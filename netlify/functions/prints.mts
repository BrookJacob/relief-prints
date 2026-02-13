// netlify/functions/prints.mts
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const ENDPOINT = process.env.HYGRAPH_ENDPOINT;
  const TOKEN = process.env.HYGRAPH_TOKEN;

  // 1. Pagination Logic
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const size = parseInt(url.searchParams.get("size") || "12"); // Default 12 per page
  const skip = (page - 1) * size;

  // 2. GraphQL Query with Variables
  // We use $limit and $offset to control the data slice
  const query = `
    query GetPrints($limit: Int!, $offset: Int!) {
      prints(first: $limit, skip: $offset, orderBy: publishedAt_DESC, where: { display: true }) {
        id
        title
        slug
        printStatus
        description
        year
        price
        paperDimensions
        imageDimensions
        editionTotal
        mainImage { url }
      }
      # Optional: Get total count for UI (e.g. "Page 1 of 5")
      printsConnection {
        aggregate { count }
      }
    }
  `;

  if (!ENDPOINT || !TOKEN) {
    return new Response(JSON.stringify({ error: "Missing Config" }), { status: 500 });
  }

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TOKEN}`
      },
      body: JSON.stringify({ 
        query,
        variables: { limit: size, offset: skip } 
      }),
    });

    const result = await response.json();
    if (result.errors) throw new Error(result.errors[0].message);

    // 3. Transform Data
    const cleanPrints = result.data.prints.map((print: any) => ({
      id: print.id,
      Title: print.title,
      Slug: print.slug,
      Status: print.printStatus,
      Description: print.description || "",
      Year: print.year,
      Price: print.price,
      paperDimensions: print.paperDimensions,
      imageDimensions: print.imageDimensions,
      editionTotal: print.editionTotal,
      imageUrl: print.mainImage ? print.mainImage.url : null
    }));

    return new Response(JSON.stringify({
      prints: cleanPrints,
      meta: {
        total: result.data.printsConnection.aggregate.count,
        page: page,
        size: size
      }
    }), {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: String(error) }), { status: 500 });
  }
};