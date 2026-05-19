// Fotos provisórias — substituir por fotos oficiais após sessão fotográfica
// Licença: Unsplash License (uso comercial livre, sem atribuição obrigatória)

export const photos = {
  hero: {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=85&fit=crop',
    alt: 'Praia tropical com águas cristalinas, Nordeste do Brasil',
    credit: 'Sean O. / Unsplash',
  },
  portodeGalinhas: {
    piscinasNaturais: {
      url: 'https://images.unsplash.com/photo-1596394373834-d83e3ba2d0c8?w=1200&q=80&fit=crop',
      alt: 'Piscinas naturais de Porto de Galinhas, Pernambuco',
      credit: 'Unsplash',
    },
    praia: {
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80&fit=crop',
      alt: 'Praia tropical com mar calmo e areia clara',
      credit: 'Caleb Jones / Unsplash',
    },
    costal: {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&fit=crop',
      alt: 'Costa do litoral nordestino',
      credit: 'Unsplash',
    },
  },
  resort: {
    // FOTO PROVISÓRIA: substituir por imagem oficial do Makai Acqua Resort
    // após autorização da Pernambuco Construtora ou entrega das chaves (jun/2026)
    piscina: {
      url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80&fit=crop',
      alt: 'Complexo aquático de resort com piscinas e vegetação tropical — imagem ilustrativa',
      credit: 'Unsplash',
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
      caption_pt: 'Manhã na varanda',
      caption_en: 'Morning at the balcony',
      url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&q=80&fit=crop&crop=center',
      alt: 'Varanda com vista para o mar, manhã',
      credit: 'Unsplash',
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
      caption_pt: 'Piscinas naturais próximas',
      caption_en: 'Nearby natural pools',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80&fit=crop',
      alt: 'Piscinas naturais do litoral pernambucano',
      credit: 'Unsplash',
    },
    {
      caption_pt: 'Fim de tarde, Muro Alto',
      caption_en: 'Late afternoon, Muro Alto',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&fit=crop',
      alt: 'Piscina ao entardecer, litoral do Brasil',
      credit: 'Unsplash',
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
