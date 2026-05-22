// Fotos — 100% imagens reais (Makai/Muro Alto/Porto de Galinhas + textura de ofício pernambucano)
// Fotos dos flats interiores: provisórias de alta qualidade até sessão fotográfica (jun/2026)

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
      url: '/flats/muro-alto-entardecer.jpg',
      alt: 'Praia de Muro Alto ao entardecer, Pernambuco',
      credit: 'Muro Alto, Pernambuco',
    },
  },
  flats: {
    // FOTO PROVISÓRIA: substituir por fotos reais dos flats após entrega e sessão fotográfica
    carua: {
      interior: {
        // Cerâmica de barro sobre linho — ofício artesanal do Estúdio Caruá
        url: '/flats/carua-ceramica.jpg',
        alt: 'Cerâmica artesanal de barro sobre tecido de linho — Estúdio Caruá',
        credit: 'Tramar',
      },
      detalhe: {
        url: '/flats/carua-ceramica.jpg',
        alt: 'Detalhe de cerâmica artesanal de barro — Estúdio Caruá',
        credit: 'Tramar',
      },
    },
    renda: {
      interior: {
        // Renda renascença sobre madeira — ofício têxtil do Estúdio Renda
        url: '/flats/renda-lace.jpg',
        alt: 'Renda renascença pernambucana sobre madeira — Estúdio Renda',
        credit: 'Tramar',
      },
      detalhe: {
        url: '/flats/renda-lace.jpg',
        alt: 'Detalhe de renda renascença artesanal — Estúdio Renda',
        credit: 'Tramar',
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
