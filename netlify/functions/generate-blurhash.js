const { GraphQLClient, gql } = require('graphql-request');
const { encode } = require('blurhash');
const sharp = require('sharp');

// Initialize Hygraph Client
const client = new GraphQLClient(process.env.HYGRAPH_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_MUTATION_TOKEN}`,
  },
});

const UPDATE_ASSET_MUTATION = gql`
  # Add width and height to the mutation variables
  mutation UpdateAssetBlurhash($id: ID!, $blurhash: String!, $width: Int!, $height: Int!) {
    updateAsset(
      where: { id: $id }, 
      data: { 
        blurhash: $blurhash,
        width: $width,       # Saving width
        height: $height      # Saving height
      }
    ) {
      id
    }
    publishAsset(where: { id: $id }) {
      id
    }
  }
`;

exports.handler = async (event) => {
  // 1. Parse the Webhook Payload
  const payload = JSON.parse(event.body);
  const asset = payload.data;

  // 2. Safety Checks
  // Only proceed if it's an image and the upload is actually done.
  if (!asset.mimeType.startsWith('image/')) {
    return { statusCode: 200, body: 'Not an image, skipping.' };
  }
  
  // CRITICAL: Hygraph sends webhooks for every stage. 
  // We only want to run this when the file is ready.
  // Check if the trigger operation was an update that set status to uploaded
  // OR if you are manually triggering this, ensure the url is accessible.
  // (Simplest check: Does it have a URL and no blurhash yet?)
  if (!asset.url || asset.blurhash) {
     return { statusCode: 200, body: 'Already has hash or no URL.' };
  }

  try {
    console.log(`Processing: ${asset.fileName}`);

    // 3. Download the image
    const response = await fetch(asset.url);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 4. Resize and get raw pixels
    // Blurhash requires raw pixel data (Uint8ClampedArray)
    // We resize to 32x32 because Blurhash is designed for tiny thumbnails
    const { data, info } = await sharp(buffer)
      .raw()
      .ensureAlpha()
      .resize(32, 32, { fit: 'inside' })
      .toBuffer({ resolveWithObject: true });

    // 5. Generate Hash
    const hash = encode(
      new Uint8ClampedArray(data),
      info.width,
      info.height,
      4, // Component X
      3  // Component Y
    );

    // 6. Save back to Hygraph
    await client.request(UPDATE_ASSET_MUTATION, {
      id: asset.id,
      blurhash: hash,
      width: metadata.width,   // Send original width
      height: metadata.height,  // Send original height
    });

    return { statusCode: 200, body: `Success! Hash: ${hash}` };

  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: error.message };
  }
};