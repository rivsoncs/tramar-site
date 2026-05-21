// Fotos — mix de imagens reais (Makai/Muro Alto/Porto de Galinhas) e provisórias (Unsplash)
// Fotos provisórias: flats Caruá e Renda — aguardam sessão fotográfica (jun/2026)
// Licença Unsplash: uso comercial livre, sem atribuição obrigatória

export const photos = {
  hero: {
    url: '/images/hero-muro-alto.jpg',
    alt: 'Piscina natural da Praia de Muro Alto, Pernambuco',
    credit: 'Muro Alto, Pernambuco',
  },
  portodeGalinhas: {
    piscinasNaturais: {
      url: 'https://images.unsplash.com/photo-1596394373834-d83e3ba2d0c8?w=1200&q=80&fit=crop',
      alt: 'Piscinas naturais de Porto de Galinhas, Pernambuco',
      credit: 'Unsplash',
    },
    praia: {
      url: '/images/porto-galinhas-piscinas.jpg',
      alt: 'Piscinas naturais de Porto de Galinhas, a 8 minutos do Makai Acqua Resort',
      credit: 'Porto de Galinhas, Pernambuco',
    },
    costal: {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&fit=crop',
      alt: 'Costa do litoral nordestino',
      credit: 'Unsplash',
    },
  },
  resort: {
    piscina: {
      url: '/images/makai-piscina-principal.webp',
      alt: 'Complexo aquático do Makai Acqua Resort, Muro Alto',
      credit: 'Makai Acqua Resort',
    },
    aerial: {
      url: '/images/makai-aerial.webp',
      alt: 'Vista aérea do Makai Acqua Resort, Muro Alto, Pernambuco',
      credit: 'Makai Acqua Resort',
    },
    areaExterna: {
      url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80&fit=crop',
      alt: 'Área externa de resort tropical com varanda — imagem ilustrativa',
      credit: 'Unsplash',
    },
  },
  flats: {
    // FOTO PROVISÓRIA: substituir por fotos reais dos flats após entrega e sessão fotográfica
    carua: {
      interior: {
        url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=900&q=80&fit=crop',
        alt: 'Interior de flat de praia com decoração em tons terrosos — imagem ilustrativa',
        credit: 'Unsplash',
      },
      detalhe: {
        url: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&q=80&fit=crop',
        alt: 'Cerâmica artesanal em tons de barro',
        credit: 'Unsplash',
      },
    },
    renda: {
      interior: {
        url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80&fit=crop',
        alt: 'Interior de flat com decoração clara e leve — imagem ilustrativa',
        credit: 'Unsplash',
      },
      detalhe: {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop',
        alt: 'Têxtil delicado em tom claro, renda renascença',
        credit: 'Unsplash',
      },
    },
  },
  galeria: [
    {
      caption_pt: 'Complexo aquático do Makai',
      caption_en: 'Makai aquatic complex',
      url: '/gallery/makai-piscina.webp',
      alt: 'Complexo aquático do Makai Acqua Resort, Muro Alto',
      credit: 'Makai Acqua Resort',
    },
    {
      caption_pt: 'Trama no detalhe',
      caption_en: 'Weave in detail',
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop',
      alt: 'Detalhe de têxtil artesanal',
      credit: 'Unsplash',
    },
    {
      caption_pt: 'Cerâmica da casa',
      caption_en: 'House ceramics',
      url: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&q=80&fit=crop',
      alt: 'Cerâmica artesanal de Caruaru',
      credit: 'Unsplash',
    },
    {
      caption_pt: 'Piscinas naturais de Porto de Galinhas',
      caption_en: 'Natural pools of Porto de Galinhas',
      url: '/gallery/porto-piscinas-naturais.jpg',
      alt: 'Piscinas naturais de Porto de Galinhas, a 8 minutos do Makai',
      credit: 'Porto de Galinhas, Pernambuco',
    },
    {
      caption_pt: 'Fim de tarde, Muro Alto',
      caption_en: 'Late afternoon, Muro Alto',
      url: '/gallery/muro-alto-praia.jpg',
      alt: 'Praia de Muro Alto ao fim de tarde, Pernambuco',
      credit: 'Muro Alto, Pernambuco',
    },
    {
      caption_pt: 'A maré que volta',
      caption_en: 'The returning tide',
      url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=900&q=80&fit=crop',
      alt: 'Vista aérea da costa do Brasil',
      credit: 'Unsplash',
    },
  ],
} as const;
