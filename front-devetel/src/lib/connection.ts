export function getStrapiURL(path = "") {
  return `${process.env.STRAPI_URL || "http://localhost:1337"}/api${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string) {
  try {
    const requestUrl = getStrapiURL(path);
    
    const response = await fetch(requestUrl, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + process.env.STRAPI_TOKEN
      },
      next: { revalidate: 1 }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}