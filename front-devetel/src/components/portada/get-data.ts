import { fetchAPI } from "@/lib/connection";

export async function getDataPortada():Promise<HeroData | null > {
  const rawData = await fetchAPI("/portada?populate[contenido][on][ui.lista-de-botones][populate]=*&populate[contenido][on][ui.texto-negrita][populate]=*&populate[contenido][on][ui.texto-normal][populate]=*&populate[Img][populate]=*");

  if ( !rawData ) return null;
  if ( !rawData.data ) return null;

  const image = process.env.STRAPI_URL + rawData.data.attributes.Img.data.attributes.url 

  return { img: image, contenido: rawData.data.attributes.contenido};
}