# 🚀 Guia Rápido de Início

## ⚡ Início Rápido (5 minutos)

### 1. Clone o Repositório
```bash
git clone https://github.com/CauanAmorimGomes/portfolio.git
cd portfolio
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Execute em Desenvolvimento
```bash
npm run dev
```

Acesse: `http://localhost:5173`

## 📝 Personalizar Seu Portfólio

### Passo 1: Informações Pessoais

Edite `src/constants/portfolio-data.ts`:

```typescript
export const PERSONAL_INFO = {
  name: 'SEU NOME',
  title: 'SEU TÍTULO',
  email: 'seu@email.com',
  location: 'Sua Localização',
  github: 'https://github.com/SeuUsuario',
  linkedin: 'https://linkedin.com/in/seu-perfil',
};
```

### Passo 2: Texto "Sobre Mim"

Ainda em `portfolio-data.ts`:

```typescript
export const ABOUT_TEXT = {
  intro: 'Sua introdução aqui...',
  journey: 'Sua jornada...',
  hobby: 'Seus hobbies...',
};
```

### Passo 3: Habilidades

Ajuste as habilidades e níveis:

```typescript
export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 90 },
      // Adicione mais...
    ],
  },
];
```

### Passo 4: Projetos

Adicione seus projetos:

```typescript
export const PROJECTS = [
  {
    title: 'Nome do Projeto',
    description: 'Descrição...',
    tags: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/...',
    liveUrl: 'https://...',
    image: '🎨', // Emoji ou caminho de imagem
  },
];
```

### Passo 5: Links de Redes Sociais

Já configurados em `PERSONAL_INFO`, mas você pode adicionar mais em:
- `src/components/Hero.tsx` (linha ~89)
- `src/components/Footer.tsx` (linha ~12)

## 🎨 Personalizar Cores

### Método 1: Classes Tailwind

Encontre e substitua em todos os arquivos:
- `purple-500` → `blue-500` (sua cor primária)
- `pink-500` → `cyan-500` (sua cor secundária)
- `slate-900` → `gray-900` (background)

### Método 2: Tailwind Config

Crie `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#SUA_COR',
        secondary: '#SUA_COR',
      },
    },
  },
};
```

## 📸 Adicionar Foto de Perfil

### Opção 1: Substituir Logo por Imagem

Em `src/components/Hero.tsx`:

```tsx
// De:
<div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
    <span className="text-5xl font-bold text-white">CA</span>
  </div>
</div>

// Para:
<img 
  src="/path/to/your/photo.jpg" 
  alt="Seu Nome"
  className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-purple-500"
/>
```

### Opção 2: Adicionar no About

Em `src/components/About.tsx`, adicione uma imagem na seção sobre.

## 🚀 Deploy

### Vercel (Recomendado)

1. Push para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Deploy automático! ✨

### Netlify

1. Push para GitHub
2. Acesse [netlify.com](https://netlify.com)
3. New site from Git
4. Selecione o repositório
5. Build command: `npm run build`
6. Publish directory: `dist`

### GitHub Pages

```bash
# Instalar gh-pages
npm install -D gh-pages

# Adicionar em package.json:
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}

# Deploy
npm run deploy
```

## 📧 Configurar Formulário de Contato

### Opção 1: FormSpree

1. Crie conta em [formspree.io](https://formspree.io)
2. Crie um formulário
3. Em `src/components/Contact.tsx`, substitua:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/SEU_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    setStatus('success');
  }
};
```

### Opção 2: EmailJS

Similar ao FormSpree, mas com mais controle.

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Preview do build
npm run preview

# Lint
npm run lint

# Formatar código
npx prettier --write .
```

## 🐛 Troubleshooting

### Erro de Porta em Uso
```bash
# Mude a porta em vite.config.ts
server: {
  port: 3000
}
```

### Erro de Build
```bash
# Limpe cache e reinstale
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Tailwind não funciona
```bash
# Verifique se index.css está importado em main.tsx
import './index.css';
```

## 📚 Próximos Passos

1. ✅ Personalize conteúdo
2. ✅ Ajuste cores/tema
3. ✅ Adicione seus projetos reais
4. ✅ Configure formulário de contato
5. ✅ Deploy
6. ✅ Compartilhe! 🎉

## 💡 Dicas Extras

- Use imagens otimizadas (WebP)
- Adicione Google Analytics
- Configure SEO para cada página
- Teste em dispositivos móveis
- Peça feedback de amigos

## 🆘 Precisa de Ajuda?

- 📖 Leia o [README.md](README.md) completo
- 📝 Veja [COMPONENTS.md](COMPONENTS.md) para detalhes técnicos
- 🐛 Abra uma issue no GitHub
- 📧 Entre em contato: cauan@example.com

---

**Boa sorte com seu portfólio! 🚀**
