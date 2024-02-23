interface Enlace {
  id: number;
  __component: string;
  title: string;
  enlace: string;
  blank?: boolean;
  colores?: string;
}

interface Button {
  id: number;
  enlace: string;
  colores: string;
  title: string;
}

interface HeroContent {
  id: number;
  __component: string;
  Texto: string,
  Botones?: Button[]
}

interface HeroData {
  img: string;
  contenido: HeroContent[];
}