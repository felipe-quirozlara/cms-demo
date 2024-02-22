import { fetchAPI } from "@/lib/connection";

export async function getNavbarData() {
  const rawData = await fetchAPI("/navbar?populate=*");
  
  if ( !rawData ) return null;
  if ( !rawData.data ) return null;

  const url = process.env.STRAPI_URL + rawData.data.attributes.img.data.attributes.url;

  return { img: url, enlaces: rawData.data.attributes.Enlaces};
}