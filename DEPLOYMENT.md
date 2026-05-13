# 🚀 Guia de Deploy

## 📋 Pré-requisitos

- ✅ Projeto buildado localmente sem erros
- ✅ Código versionado no Git
- ✅ Repositório no GitHub

## 🌐 Opções de Deploy

### 1️⃣ Vercel (Recomendado) ⭐

**Por quê?**
- ✅ Deploy automático do GitHub
- ✅ CDN global
- ✅ SSL gratuito
- ✅ Preview deployments
- ✅ Analytics incluído

#### Passo a Passo

1. **Criar conta** em [vercel.com](https://vercel.com)

2. **Conectar GitHub**
   - Clique em "New Project"
   - Selecione seu repositório
   - Autorize o Vercel

3. **Configurar Build**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   ```

4. **Deploy**
   - Clique em "Deploy"
   - Aguarde ~1 minuto
   - Pronto! 🎉

5. **Domínio Customizado** (Opcional)
   - Settings → Domains
   - Adicione seu domínio
   - Configure DNS

#### Variáveis de Ambiente

```bash
# Dashboard Vercel → Settings → Environment Variables
VITE_API_URL=https://api.exemplo.com
VITE_GA_ID=G-XXXXXXXXXX
```

#### Deploy via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

---

### 2️⃣ Netlify

**Por quê?**
- ✅ Forms handling gratuito
- ✅ Redirects fáceis
- ✅ Split testing
- ✅ CI/CD integrado

#### Passo a Passo

1. **Criar conta** em [netlify.com](https://netlify.com)

2. **Novo Site**
   - "Add new site" → "Import from Git"
   - Conecte GitHub
   - Selecione repositório

3. **Configurar Build**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Deploy Settings** (Opcional)

   Crie `netlify.toml` na raiz:

   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   
   [build.environment]
     NODE_VERSION = "18"
   ```

5. **Deploy**
   - Clique em "Deploy site"
   - Aguarde build
   - Pronto! 🎉

#### Deploy via CLI

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Init
netlify init

# Deploy
netlify deploy --prod
```

---

### 3️⃣ GitHub Pages

**Por quê?**
- ✅ Gratuito e integrado ao GitHub
- ✅ Simples para projetos estáticos
- ✅ Sem configuração de servidor

#### Método 1: GitHub Actions (Recomendado)

1. **Criar workflow**

   Crie `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - uses: actions/checkout@v3
       
       - name: Setup Node
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           
       - name: Install dependencies
         run: npm ci
         
       - name: Build
         run: npm run build
         
       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

2. **Habilitar GitHub Pages**
   - Settings → Pages
   - Source: gh-pages branch
   - Save

3. **Push para main**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages"
   git push
   ```

4. **Acessar**
   ```
   https://seuusuario.github.io/nome-repo/
   ```

#### Método 2: gh-pages Package

1. **Instalar**
   ```bash
   npm install -D gh-pages
   ```

2. **Adicionar script** em `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

3. **Configurar base** em `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/nome-do-repo/',
   });
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

---

### 4️⃣ Cloudflare Pages

**Por quê?**
- ✅ CDN global ultra-rápido
- ✅ DDoS protection
- ✅ Analytics gratuito
- ✅ Unlimited bandwidth

#### Passo a Passo

1. **Criar conta** em [pages.cloudflare.com](https://pages.cloudflare.com)

2. **Conectar Git**
   - Create a project
   - Connect GitHub
   - Select repository

3. **Build Settings**
   ```
   Build command: npm run build
   Build output directory: dist
   ```

4. **Deploy**
   - Save and Deploy
   - Pronto! 🎉

---

### 5️⃣ Firebase Hosting

**Por quê?**
- ✅ Google infrastructure
- ✅ SSL gratuito
- ✅ Rollback fácil
- ✅ Integração com Firebase

#### Passo a Passo

1. **Instalar Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login**
   ```bash
   firebase login
   ```

3. **Inicializar**
   ```bash
   firebase init hosting
   ```

   Configurações:
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub Actions: `No` (ou Yes se preferir)

4. **Build**
   ```bash
   npm run build
   ```

5. **Deploy**
   ```bash
   firebase deploy
   ```

---

## 🔧 Configurações Avançadas

### Custom Domain

#### Vercel
```bash
vercel domains add seudominio.com
```

#### Netlify
- Site settings → Domain management → Add custom domain

### Environment Variables

Crie arquivo `.env.production`:

```env
VITE_API_URL=https://api.producao.com
VITE_GA_ID=G-XXXXXXXXXX
```

### Redirects & Rewrites

#### Vercel (`vercel.json`)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

#### Netlify (`_redirects` em `public/`)
```
/*    /index.html   200
```

---

## 📊 CI/CD Pipeline

### Exemplo Completo (GitHub Actions)

`.github/workflows/ci-cd.yml`:

```yaml
name: CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install
      run: npm ci
    
    - name: Lint
      run: npm run lint
    
    - name: Build
      run: npm run build

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

---

## 🔒 Segurança no Deploy

### Headers de Segurança

#### Netlify (`netlify.toml`)
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

#### Vercel (`vercel.json`)
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

## 📈 Monitoramento Pós-Deploy

### 1. Google Analytics
- Verifique se está rastreando
- Configure Goals

### 2. Google Search Console
- Adicione propriedade
- Submit sitemap
- Monitor indexação

### 3. Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com/)
- [StatusCake](https://www.statuscake.com/)
- [Pingdom](https://www.pingdom.com/)

### 4. Performance
- Lighthouse CI
- WebPageTest
- PageSpeed Insights

---

## 🐛 Troubleshooting

### Build Falha

```bash
# Limpar cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 em Rotas

Adicione redirect rules (veja seção Redirects acima)

### Ambiente Variáveis

```bash
# Verificar variáveis
echo $VITE_API_URL

# Testar build local
npm run build
npm run preview
```

### CORS Issues

Configure headers no servidor de API ou use proxy.

---

## 📋 Checklist Pré-Deploy

- [ ] Build local sem erros
- [ ] Testar em diferentes navegadores
- [ ] Testar responsividade
- [ ] Verificar links
- [ ] Otimizar imagens
- [ ] Configurar analytics
- [ ] Adicionar favicon
- [ ] Configurar SEO
- [ ] Testar formulários
- [ ] Review de segurança

## 📋 Checklist Pós-Deploy

- [ ] Site acessível
- [ ] SSL funcionando (https://)
- [ ] Analytics rastreando
- [ ] Performance aceitável (Lighthouse)
- [ ] SEO verificado
- [ ] Submit sitemap ao Google
- [ ] Compartilhar nas redes sociais
- [ ] Configurar monitoring

---

## 🎉 Deploy Concluído!

Seu portfólio está no ar! 🚀

**Próximos passos:**
1. Configure domínio customizado
2. Adicione Google Analytics
3. Submit ao Google Search Console
4. Compartilhe com o mundo!

---

**Links Úteis:**
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
