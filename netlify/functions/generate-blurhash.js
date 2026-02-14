const { GraphQLClient, gql } = require('graphql-request');
const { encode } = require('blurhash');
const sharp = require('sharp');
// const fetch = require('node-fetch'); // Uncomment if using Node < 18

// --- CONFIGURATION ---
const endpoint = process.env.HYGRAPH_ENDPOINT;
const token = process.env.HYGRAPH_MUTATION_TOKEN;

// 1. Debug: Check Env Vars (safely)
if (!endpoint || !token) {
  console.error("CRITICAL ERROR: Missing HYGRAPH_ENDPOINT or HYGRAPH_MUTATION_TOKEN");
}

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const GET_ASSET_QUERY = gql`
  query GetAsset($id: ID!) {
    asset(where: { id: $id }) {
      id
      url
      mimeType
      fileName
      blurhash
    }
  }
`;

const UPDATE_ASSET_MUTATION = gql`
  mutation UpdateAssetBlurhash($id: ID!, $blurhash: String!) {
    updateAsset(where: { id: $id }, data: { blurhash: $blurhash }) {
      id
      blurhash
    }
    publishAsset(where: { id: $id }) {
      id
      stage
    }
  }
`;

exports.handler = async (event) => {
  // 2. Debug: Log the incoming event to ensure trigger works
  console.log("--- START: Webhook Triggered ---");
  
  try {
    const payload = JSON.parse(event.body);
    const assetId = payload.data && payload.data.id;

    if (!assetId) {
      console.log("STOP: No Asset ID found in payload.");
      return { statusCode: 200, body: 'Skipped: No ID.' };
    }

    console.log(`STEP 1: Fetching metadata for Asset ID: ${assetId}`);

    // --- FETCH ASSET ---
    const { asset } = await client.request(GET_ASSET_QUERY, { id: assetId });

    // 3. Debug: Log what Hygraph actually returned
    if (!asset) {
      console.error(`STOP: Asset query returned null for ID ${assetId}. Check permissions?`);
      return { statusCode: 404, body: 'Asset not found.' };
    }
    
    console.log(`STEP 2: Asset Found. MIME: ${asset.mimeType}, URL: ${asset.url}`);

    if (!asset.mimeType || !asset.mimeType.startsWith('image/')) {
      console.log(`STOP: Asset is not an image (${asset.mimeType}).`);
      return { statusCode: 200, body: 'Skipped: Not an image.' };
    }

    if (asset.blurhash) {
      console.log(`STOP: Asset already has a blurhash: ${asset.blurhash}`);
      return { statusCode: 200, body: 'Skipped: Hash exists.' };
    }

    // --- DOWNLOAD ---
    console.log(`STEP 3: Downloading image...`);
    const response = await fetch(asset.url);
    if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const buffer = Buffer.from(await response.arrayBuffer());
    console.log(`STEP 4: Download complete. Buffer size: ${buffer.length} bytes`);

    // --- RESIZE & RAW PIXELS ---
    console.log(`STEP 5: Resizing with Sharp...`);
    const { data, info } = await sharp(buffer)
      .ensureAlpha()
      .resize(32, 32, { fit: 'inside' })
      .raw()
      .toBuffer({ resolveWithObject: true });

    console.log(`STEP 6: Sharp resize complete. Width: ${info.width}, Height: ${info.height}`);

    // --- ENCODE ---
    const hash = encode(
      new Uint8ClampedArray(data),
      info.width,
      info.height,
      4, 
      3
    );
    console.log(`STEP 7: Hash Generated: ${hash}`);

    // --- UPDATE HYGRAPH ---
    console.log(`STEP 8: Sending Mutation to Hygraph...`);
    const mutationResult = await client.request(UPDATE_ASSET_MUTATION, {
      id: asset.id,
      blurhash: hash,
    });

    console.log(`--- SUCCESS: Hygraph Updated ---`);
    console.log("Mutation Result:", JSON.stringify(mutationResult, null, 2));

    return { statusCode: 200, body: `Success! Hash: ${hash}` };

  } catch (error) {
    // 4. Debug: Log the FULL error stack
    console.error("--- ERROR ---");
    console.error(error);
    return { statusCode: 500, body: error.message };
  }
};