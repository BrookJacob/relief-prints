// netlify/functions/prints.mts
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  // 1. Secrets (Netlify loads these automatically from UI or .env)
  const BASEROW_TOKEN = process.env.BASEROW_TOKEN;
  const TABLE_ID = process.env.BASEROW_PRINTS_ID;

  if (!BASEROW_TOKEN || !TABLE_ID) {
    return new Response(JSON.stringify({ error: "Missing Config" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    // 2. Fetch
    const response = await fetch(
      `https://api.baserow.io/api/database/rows/table/${TABLE_ID}/?user_field_names=true`,
      { headers: { Authorization: `Token ${BASEROW_TOKEN}` } }
    );

    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();

    // 3. Clean
    const cleanPrints = data.results.map((row: any) => ({
      id: row.id,
      Title: row.Title,
      Slug: row.Slug,
      imageUrl: (row.Photo && row.Photo.length > 0) ? row.Photo[0].url : null,
      Status: row.Status?.value || "Available",
      Description: row.Description || ""
    }));

    // 4. Respond
    return new Response(JSON.stringify(cleanPrints), {
      headers: { 
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=60" // Cache for 60s
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: String(error) }), { status: 500 });
  }
};