const { GraphQLClient, gql } = require('graphql-request');
const { encode } = require('blurhash');
const sharp = require('sharp');
// const fetch = require('node-fetch'); // Uncomment if using Node < 18

const client = new GraphQLClient(process.env.HYGRAPH_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_MUTATION_TOKEN}`,
  },
});

// 1. Fetch only what we need to download the image
const GET_ASSET_QUERY = gql`
  query GetAsset($id: ID!) {
    asset(where: { id: $id }) {
      id
      url
      mimeType
      blurhash
    }
  }
`;

// 2. Update ONLY the blurhash field
const UPDATE_ASSET_MUTATION = gql`
  mutation UpdateAssetBlurhash($id: ID!, $blurhash: String!) {
    updateAsset(
      where: { id: $id }, 
      data: { blurhash: $blurhash }
    ) {
      id
    }
    publishAsset(where: { id: $id }) {
      id
    }
  }
`;

exports.handler = async (event) => {
  try {
    const payload = JSON.parse(event.body);
    const assetId = payload.data && payload.data.id;

    if (!assetId) {
      return { statusCode: 200, body: 'Skipped: No ID found.' };
    }

    // --- FETCH ASSET ---
    const { asset } = await client.request(GET_ASSET_QUERY, { id: assetId });

    if (!asset || !asset.mimeType || !asset.mimeType.startsWith('image/')) {
      return { statusCode: 200, body: 'Skipped: Not an image.' };
    }

    if (asset.blurhash) {
      return { statusCode: 200, body: 'Skipped: Hash already exists.' };
    }

    console.log(`Generating Hash for: ${asset.url}`);

    // --- DOWNLOAD ---
    const response = await fetch(asset.url);
    const buffer = Buffer.from(await response.arrayBuffer());

    // --- RESIZE & RAW PIXELS ---
    // We resize to fit INSIDE 32x32. 
    // This preserves the aspect ratio in the hash without needing original dims.
    const { data, info } = await sharp(buffer)
      .ensureAlpha()
      .resize(32, 32, { fit: 'inside' })
      .raw()
      .toBuffer({ resolveWithObject: true });

    // --- ENCODE ---
    // Note: info.width/height here are the THUMBNAIL dimensions (e.g., 32x20),
    // which is exactly what the encoder needs to read the buffer correctly.
    const hash = encode(
      new Uint8ClampedArray(data),
      info.width,
      info.height,
      4, // Component X
      3  // Component Y
    );

    // --- UPDATE HYGRAPH ---
    await client.request(UPDATE_ASSET_MUTATION, {
      id: asset.id,
      blurhash: hash,
    });

    return { statusCode: 200, body: `Success! Hash: ${hash}` };

  } catch (error) {
    console.error("Error:", error);
    return { statusCode: 500, body: error.message };
  }
};