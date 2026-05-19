# Tramar Muro Alto — Site

Landing page bilíngue (PT-BR · EN-US) para a marca de hospedagem Tramar Muro Alto, Muro Alto, Pernambuco.

---

## Stack

- **Next.js 14** com App Router e TypeScript estrito
- **Tailwind CSS 3.4** para estilo utilitário
- **next-intl 3.15** para internacionalização
- **Fraunces** (display) e **DM Sans** (corpo) via `next/font/google`
- Deploy ready para **Vercel**

---

## Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev
# Site disponível em http://localhost:3000
# Redireciona automaticamente para /pt-BR ou /en-US

# 3. Build de produção
npm run build

# 4. Lint
npm run lint
```

---

## Estrutura de pastas

```
tramar-site/
├── app/
│   ├── [locale]/           # Rotas internacionalizadas (pt-BR, en-US)
│   │   ├── layout.tsx      # Layout com fontes, metadata e JSON-LD
│   │   ├── page.tsx        # Composição da landing page
│   │   └── components/     # Componentes por seção
│   │       ├── SiteHeader.tsx      # Header fixo com toggle de idioma
│   │       ├── Hero.tsx            # Seção 1 — hero
│   │       ├── Manifesto.tsx       # Seção 2 — manifesto
│   │       ├── ProductCards.tsx    # Seção 3 — três produtos
│   │       ├── Amenities.tsx       # Seção 4 — comodidades
│   │       ├── Gallery.tsx         # Seção 5 — galeria
│   │       ├── Location.tsx        # Seção 6 — localização
│   │       ├── FAQ.tsx             # Seção 7 — FAQ accordion
│   │       ├── Footer.tsx          # Seção 8 — rodapé
│   │       ├── BrandLogo.tsx       # SVGs inline: logo horizontal e reduzida
│   │       ├── SubBrandLogo.tsx    # SVGs inline: Caruá, Renda, Inteira
│   │       ├── FadeIn.tsx          # Animação de reveal por IntersectionObserver
│   │       └── LanguageToggle.tsx  # Toggle PT/EN
│   ├── globals.css         # Reset, tokens, padrões CSS, classes utilitárias
│   └── not-found.tsx       # Página 404
├── messages/
│   ├── pt-BR.json          # Todos os textos em português
│   └── en-US.json          # Todos os textos em inglês
├── public/
│   ├── brand-assets/       # SVGs copiados de tramar-brand-assets/
│   │   ├── logos/
│   │   ├── sub-brands/
│   │   ├── patterns/
│   │   └── icons/
│   ├── robots.txt
│   └── sitemap.xml
├── styles/
│   └── tokens.css          # Design tokens (copiado de tramar-brand-assets/)
├── lib/
│   └── tokens.json         # Design tokens W3C (copiado de tramar-brand-assets/)
├── middleware.ts            # Detecção e redirecionamento de idioma
├── i18n.ts                  # Configuração next-intl
├── next.config.mjs
├── tailwind.config.ts
└── tramar-brand-assets/    # Pasta original — não modificar
```

---

## Como editar textos

Todos os textos da landing page estão em:

- **PT-BR**: [`messages/pt-BR.json`](messages/pt-BR.json)
- **EN-US**: [`messages/en-US.json`](messages/en-US.json)

Edite os valores de cada chave e salve. O servidor de desenvolvimento reflete as mudanças automaticamente.

Exemplo — para editar o manifesto em português:
```json
// messages/pt-BR.json
{
  "manifesto": {
    "text": "Seu novo texto aqui..."
  }
}
```

---

## Como adicionar uma nova tradução de idioma

1. Crie `messages/[novo-locale].json` copiando `pt-BR.json` como base.
2. Em `middleware.ts`, adicione o novo locale ao array `locales`.
3. Em `i18n.ts`, ajuste a validação de locales se necessário.
4. Em `app/[locale]/layout.tsx`, atualize `generateStaticParams()` e `alternates`.
5. Em `public/sitemap.xml`, adicione as entradas correspondentes.

---

## Como substituir os placeholders da galeria por fotos reais

Cada item da galeria em `Gallery.tsx` tem um comentário `TODO` marcando o placeholder.

Para substituir:
1. Adicione as fotos em `public/gallery/foto-1.jpg` etc.
2. Substitua o `<div>` placeholder por `<Image>` do `next/image`:
   ```tsx
   import Image from 'next/image';
   // ...
   <Image src="/gallery/foto-1.jpg" alt={caption} fill style={{ objectFit: 'cover' }} />
   ```
3. Remova o comentário `TODO`.

**Especificações de foto recomendadas**: 1200×900 px mínimo, formato JPEG, saturação −10 a −15%, sem flash, luz natural.

---

## Como fazer deploy na Vercel

### Opção 1 — Via CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Opção 2 — Via GitHub (recomendado)

1. Suba o projeto para um repositório GitHub.
2. Acesse [vercel.com](https://vercel.com) e clique em **New Project**.
3. Importe o repositório.
4. A Vercel detecta Next.js automaticamente — clique em **Deploy**.
5. Em **Settings → Domains**, configure o domínio (a ser adquirido).

### Variáveis de ambiente

Nenhuma variável de ambiente é necessária nesta versão estática. Quando adicionar integrações (analytics, CMS), configure em **Settings → Environment Variables** na Vercel.

---

## Como atualizar brand assets

Se uma nova versão do pacote `tramar-brand-assets` for entregue:

1. Substitua os arquivos em `public/brand-assets/` com os novos SVGs.
2. Atualize `styles/tokens.css` e `lib/tokens.json` com os novos tokens.
3. Se houver mudanças de cor, atualize `tailwind.config.ts` para refletir os novos valores.
4. Execute `npm run build` para validar.

---

## TODOs pendentes

- [ ] Substituir link `#` do Airbnb por URL real (aguarda verificação de convenção do condomínio)
- [ ] Substituir placeholders da galeria por fotos reais (aguarda sessão fotográfica)
- [ ] Preencher respostas do FAQ (aguarda definição com operação dos flats)
- [ ] Preencher endereço completo no structured data em `layout.tsx`
- [ ] Configurar domínio na Vercel (a ser adquirido)
- [ ] Configurar e-mail real de contato
- [ ] Criar `public/og-image.jpg` (1200×630) para Open Graph

---

**Tramar · Muro Alto · Pernambuco** · 2026
# tramar-site
