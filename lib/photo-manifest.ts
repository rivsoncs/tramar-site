// Fotos — imagens reais (Makai/Muro Alto/Porto de Galinhas)
// Fotos provisórias: flats Caruá e Renda e card Inteira — aguardam sessão fotográfica (jun/2026)
// Licença Unsplash: uso comercial livre, sem atribuição obrigatória

export const photos = {
  hero: {
    url: '/images/hero-muro-alto.jpg',
    alt: 'Piscina natural da Praia de Muro Alto, Pernambuco',
    credit: 'Muro Alto, Pernambuco',
  },
  portodeGalinhas: {
    praia: {
      url: '/images/porto-galinhas-piscinas.jpg',
      alt: 'Piscinas naturais de Porto de Galinhas, a 8 minutos do Makai Acqua Resort',
      credit: 'Porto de Galinhas, Pernambuco',
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
        // Cerâmica de barro cozido — evoca o ofício do Estúdio Caruá
        url: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=900&q=80&fit=crop',
        alt: 'Detalhe tátil de cerâmica crua trabalhada manualmente — Estúdio Caruá',
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
        // Lençóis de linho natural e sombras suaves — evoca o Estúdio Renda
        url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=900&q=80&fit=crop',
        alt: 'Lençóis de linho natural com sombras de fim de tarde — Estúdio Renda',
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
      caption_pt: 'Deck do Makai',
      caption_en: 'Makai deck',
      url: '/gallery/makai-deck.webp',
      alt: 'Deck e área de convivência do Makai Acqua Resort, Muro Alto',
      credit: 'Makai Acqua Resort',
    },
    {
      caption_pt: 'Beach tennis no Makai',
      caption_en: 'Beach tennis at Makai',
      url: '/gallery/makai-beach-tennis.webp',
      alt: 'Quadra de beach tennis do Makai Acqua Resort',
      credit: 'Makai Acqua Resort',
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
      caption_pt: 'Jangadas, Porto de Galinhas',
      caption_en: 'Jangadas, Porto de Galinhas',
      url: '/gallery/porto-jangadas.jpg',
      alt: 'Jangadas tradicionais na praia de Porto de Galinhas, Pernambuco',
      credit: 'Porto de Galinhas, Pernambuco',
    },
  ],
} as const;
