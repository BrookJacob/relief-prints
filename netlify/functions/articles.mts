// netlify/functions/articles.mts
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const ENDPOINT = process.env.HYGRAPH_ENDPOINT;
  const TOKEN = process.env.HYGRAPH_TOKEN;

  // 1. Pagination Logic
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const size = parseInt(url.searchParams.get("size") || "6"); // Default 6 articles
  const skip = (page - 1) * size;

  // 2. GraphQL Query
  const query = `
    query GetArticles($limit: Int!, $offset: Int!) {
      articles(first: $limit, skip: $offset, orderBy: publishedDate_DESC) {
        id
        title
        slug
        publishedDate
        excerpt
        techStack
        repoUrl
        coverImage { url }
      }
      articlesConnection {
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
    const cleanArticles = result.data.articles.map((article: any) => ({
      id: article.id,
      Title: article.title,
      Slug: article.slug,
      Date: article.publishedDate,
      Excerpt: article.excerpt,
      Stack: article.techStack || [], // Array of strings e.g. ["Remix", "React"]
      Repo: article.repoUrl,
      imageUrl: article.coverImage ? article.coverImage.url : null
    }));

    return new Response(JSON.stringify({
      articles: cleanArticles,
      meta: {
        total: result.data.articlesConnection.aggregate.count,
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