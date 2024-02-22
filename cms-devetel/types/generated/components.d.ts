import type { Schema, Attribute } from '@strapi/strapi';

export interface UiBoton extends Schema.Component {
  collectionName: 'components_navbar_botons';
  info: {
    displayName: 'Bot\u00F3n';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    enlace: Attribute.String & Attribute.Required;
    colores: Attribute.Enumeration<['azul', 'naranja']> &
      Attribute.Required &
      Attribute.DefaultTo<'azul'>;
  };
}

export interface UiLink extends Schema.Component {
  collectionName: 'components_ui_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    enlace: Attribute.String;
    blank: Attribute.Boolean;
  };
}

export interface UiListaDeBotones extends Schema.Component {
  collectionName: 'components_ui_lista_de_botones';
  info: {
    displayName: 'lista de botones';
  };
  attributes: {
    Botones: Attribute.Component<'ui.boton', true> &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 2;
        },
        number
      >;
  };
}

export interface UiTextoNegrita extends Schema.Component {
  collectionName: 'components_ui_texto_negritas';
  info: {
    displayName: 'Texto Negrita';
  };
  attributes: {
    Texto: Attribute.String & Attribute.Required;
  };
}

export interface UiTextoNormal extends Schema.Component {
  collectionName: 'components_ui_texto_normals';
  info: {
    displayName: 'Texto Normal';
  };
  attributes: {
    Texto: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.boton': UiBoton;
      'ui.link': UiLink;
      'ui.lista-de-botones': UiListaDeBotones;
      'ui.texto-negrita': UiTextoNegrita;
      'ui.texto-normal': UiTextoNormal;
    }
  }
}
