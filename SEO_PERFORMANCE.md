# 🚀 SEO & Performance Guide

## 🔍 SEO (Search Engine Optimization)

### ✅ Implementado

#### Meta Tags Básicas
```html
<!-- index.html -->
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<meta name="author" content="..." />
```

#### Open Graph (Facebook, LinkedIn)
```html
<meta property="og:type" content="website" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
```

#### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
```

### 🎯 Melhorias Recomendadas

#### 1. Adicionar Sitemap

Crie `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seusite.com/</loc>
    <lastmod>2026-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

#### 2. Adicionar robots.txt

Crie `public/robots.txt`:

```txt
User-agent: *
Allow: /

Sitemap: https://seusite.com/sitemap.xml
```

#### 3. Schema.org (JSON-LD)

Adicione em `index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Cauan Amorim Gomes",
  "jobTitle": "Desenvolvedor Full Stack",
  "url": "https://seusite.com",
  "sameAs": [
    "https://github.com/CauanAmorimGomes",
    "https://linkedin.com/in/cauan-amorim"
  ]
}
</script>
```

#### 4. Favicon Completo

```html
<!-- index.html -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

#### 5. Canonical URL

```html
<link rel="canonical" href="https://seusite.com/" />
```

### 📊 SEO Checklist

- [x] Title tag otimizado
- [x] Meta description
- [x] Open Graph tags
- [x] Twitter Cards
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Schema.org markup
- [ ] Favicon completo
- [ ] Canonical URLs
- [x] Semantic HTML
- [x] Alt text em imagens (quando usar)
- [ ] Google Analytics
- [ ] Google Search Console

## ⚡ Performance

### ✅ Implementado

#### Build Otimizado
- ✅ Minificação de código
- ✅ Tree-shaking
- ✅ Bundle único (~257 KB)
- ✅ Gzip compression (~73 KB)

#### Code Splitting
- ✅ Componentes modulares
- ✅ Lazy loading quando aplicável

#### CSS
- ✅ Tailwind purge (remove classes não utilizadas)
- ✅ Single CSS file

### 🎯 Melhorias de Performance

#### 1. Lazy Load Images

Se adicionar imagens:

```tsx
<img 
  src="/image.jpg" 
  loading="lazy"
  alt="Description"
/>
```

#### 2. Preload Fonts

```html
<!-- index.html -->
<link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin>
```

#### 3. Resource Hints

```html
<!-- DNS Prefetch -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com">

<!-- Preconnect -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

#### 4. Otimizar Imagens

Use formatos modernos:
- **WebP** para fotos
- **SVG** para ícones
- **AVIF** para melhor compressão

Ferramentas:
- [Squoosh](https://squoosh.app/)
- [TinyPNG](https://tinypng.com/)

#### 5. Code Splitting Avançado

```tsx
// Lazy load de componentes pesados
const Projects = lazy(() => import('./components/Projects'));

<Suspense fallback={<LoadingScreen />}>
  <Projects />
</Suspense>
```

#### 6. Service Worker (PWA)

Crie `public/sw.js`:

```javascript
const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});
```

### 📊 Performance Checklist

- [x] Bundle size otimizado
- [x] CSS purge
- [x] Minificação
- [x] Gzip compression
- [ ] Image optimization
- [ ] Lazy loading
- [ ] Service Worker
- [ ] Resource hints
- [ ] Font optimization
- [x] Code splitting
- [ ] CDN usage

## 📈 Métricas Importantes

### Core Web Vitals

#### LCP (Largest Contentful Paint)
**Target**: < 2.5s

Otimizações:
- Minimize CSS inicial
- Preload recursos críticos
- Otimize imagens

#### FID (First Input Delay)
**Target**: < 100ms

Otimizações:
- Minimize JavaScript
- Code splitting
- Defer non-critical JS

#### CLS (Cumulative Layout Shift)
**Target**: < 0.1

Otimizações:
- Defina width/height em imagens
- Reserve espaço para conteúdo dinâmico
- Evite inserção de conteúdo acima do fold

### Ferramentas de Medição

#### Google PageSpeed Insights
```
https://pagespeed.web.dev/
```

#### Lighthouse (Chrome DevTools)
```bash
# CLI
npm install -g lighthouse
lighthouse https://seusite.com
```

#### WebPageTest
```
https://www.webpagetest.org/
```

## 🔒 Segurança

### Headers de Segurança

Configure no seu servidor/CDN:

```
Content-Security-Policy: default-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### HTTPS
- ✅ Sempre use HTTPS
- ✅ Netlify/Vercel já incluem SSL

## 🌐 Analytics

### Google Analytics 4

1. Crie propriedade em [analytics.google.com](https://analytics.google.com)

2. Adicione em `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible Analytics (Alternativa Privacy-Friendly)

```html
<script defer data-domain="seusite.com" src="https://plausible.io/js/script.js"></script>
```

## 📱 Mobile Optimization

### Viewport Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Touch Icons
```html
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
```

### Manifest.json (PWA)

Crie `public/manifest.json`:

```json
{
  "name": "Cauan Amorim Gomes - Portfólio",
  "short_name": "Portfolio",
  "description": "Portfólio profissional",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#9333ea",
  "background_color": "#0f172a",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

Adicione em `index.html`:
```html
<link rel="manifest" href="/manifest.json">
```

## 🎯 A/B Testing

### Google Optimize
```html
<script src="https://www.googleoptimize.com/optimize.js?id=OPT-XXXXXX"></script>
```

## 📊 Monitoramento

### Error Tracking - Sentry

```bash
npm install @sentry/react
```

```tsx
// main.tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production",
});
```

## 🚀 CDN

### Recomendações

1. **Vercel** (Recomendado)
   - Edge Network global
   - SSL automático
   - Deploy automático

2. **Netlify**
   - CDN global
   - Forms handling
   - Split testing

3. **Cloudflare Pages**
   - CDN global
   - DDoS protection
   - Analytics

## 📋 Quick Wins

### Top 5 Otimizações Rápidas

1. ✅ **Comprimir imagens** → 50-70% redução
2. ✅ **Minificar código** → Já feito pelo Vite
3. ✅ **Enable Gzip** → Já feito
4. 📝 **Lazy load** → Adicionar em imagens
5. 📝 **Use CDN** → Deploy em Vercel/Netlify

### Comandos Úteis

```bash
# Análise de bundle
npm run build -- --analyze

# Lighthouse CI
npx lhci autorun

# Check bundle size
npx bundlesize
```

## 📊 Benchmark Atual

Baseado no build atual:

- **Bundle Size**: 257 KB
- **Gzipped**: 73 KB
- **Load Time**: ~1-2s (estimado)
- **Lighthouse Score**: 90+ (estimado)

## 🎓 Recursos

- [web.dev](https://web.dev/) - Guias de performance
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)

---

**Mantenha monitorando e otimizando continuamente! 📈**
