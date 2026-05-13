# 🎨 Guia de Customização Visual

## 🌈 Esquema de Cores

### Paleta Atual

```css
/* Cores Primárias */
Purple 400: #c084fc
Purple 500: #a855f7
Purple 600: #9333ea
Purple 700: #7e22ce

/* Cores Secundárias */
Pink 400: #f472b6
Pink 500: #ec4899
Pink 600: #db2777
Pink 700: #be185d

/* Background */
Slate 800: #1e293b
Slate 900: #0f172a
Slate 950: #020617

/* Text */
White: #ffffff
Gray 300: #d1d5db
Gray 400: #9ca3af
```

### Trocar Cores Globalmente

#### Opção 1: Find & Replace

Use seu editor para substituir:

```
purple-400 → blue-400
purple-500 → blue-500
purple-600 → blue-600
purple-700 → blue-700

pink-400 → cyan-400
pink-500 → cyan-500
pink-600 → cyan-600
pink-700 → cyan-700
```

#### Opção 2: Criar Tema Customizado

Adicione em `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0066FF',
          secondary: '#00D9FF',
          dark: '#000033',
          light: '#E6F3FF',
        },
      },
    },
  },
};
```

Depois use:
```tsx
className="bg-brand-primary text-brand-light"
```

## 🎭 Temas Pré-configurados

### Tema 1: Ocean Blue
```css
Primary: #0066FF (Blue 600)
Secondary: #00D9FF (Cyan 400)
Background: #001133
Accent: #4DA6FF
```

### Tema 2: Forest Green
```css
Primary: #10B981 (Green 500)
Secondary: #34D399 (Green 400)
Background: #064E3B
Accent: #A7F3D0
```

### Tema 3: Sunset Orange
```css
Primary: #F97316 (Orange 500)
Secondary: #FB923C (Orange 400)
Background: #431407
Accent: #FDBA74
```

### Tema 4: Royal Purple (Atual)
```css
Primary: #9333EA (Purple 600)
Secondary: #DB2777 (Pink 600)
Background: #0F172A
Accent: #C084FC
```

## 🖼️ Customizar Background

### Gradiente Atual
```tsx
className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
```

### Alternativas

#### Gradiente Diagonal Simples
```tsx
className="bg-gradient-to-br from-blue-900 to-purple-900"
```

#### Gradiente Radial
```tsx
className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-slate-900 to-slate-900"
```

#### Background com Padrão
```tsx
className="bg-slate-900 bg-[url('/pattern.svg')]"
```

#### Cor Sólida
```tsx
className="bg-slate-900"
```

## ✨ Efeitos e Animações

### Hover Effects

#### Atual
```tsx
className="hover:scale-105 transition-transform"
```

#### Alternativas
```tsx
// Glow effect
className="hover:shadow-lg hover:shadow-purple-500/50"

// Lift effect
className="hover:-translate-y-2 transition-transform"

// Shine effect
className="relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700"
```

### Animações Personalizadas

Adicione em `src/index.css`:

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.5); }
  50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.8); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}
```

Use:
```tsx
<div className="animate-float">...</div>
```

## 📝 Tipografia

### Fontes Atuais
- Sistema: `-apple-system, BlinkMacSystemFont, 'Segoe UI'`

### Adicionar Google Fonts

1. Em `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
```

2. Em `src/index.css`:
```css
body {
  font-family: 'Inter', sans-serif;
}
```

### Fontes Recomendadas

- **Moderna**: Inter, Poppins, Montserrat
- **Elegante**: Playfair Display, Cormorant
- **Código**: Fira Code, JetBrains Mono
- **Fun**: Righteous, Fredoka

## 🎯 Customizar Componentes Específicos

### Header

#### Transparente → Sólido
```tsx
// De:
className="bg-slate-900/95 backdrop-blur-sm"

// Para:
className="bg-slate-900"
```

#### Mudar Altura
```tsx
// De:
className="py-4"

// Para:
className="py-6" // Mais alto
className="py-2" // Mais baixo
```

### Hero

#### Mudar Avatar
```tsx
// Circular com gradiente (atual)
<div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">

// Quadrado com cantos arredondados
<div className="w-32 h-32 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">

// Hexágono (requer CSS custom)
<div className="hexagon">
```

#### Efeito de Digitação
```tsx
// Ajustar velocidade em Hero.tsx
const timer = setInterval(() => {
  // ...
}, 100); // Mude para 50 (mais rápido) ou 200 (mais lento)
```

### Cards de Projeto

#### Layout de Grid
```tsx
// De:
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"

// Para 4 colunas:
className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"

// Para 2 colunas:
className="grid md:grid-cols-2 gap-8"
```

#### Estilo do Card
```tsx
// De (com blur):
className="bg-slate-800/50 backdrop-blur-sm"

// Para (sólido):
className="bg-slate-800"

// Ou (com bordas):
className="bg-transparent border-2 border-purple-500"
```

### Barras de Progresso (Skills)

#### Mudar Estilo
```tsx
// Gradiente (atual)
className="bg-gradient-to-r from-purple-500 to-pink-500"

// Cor sólida
className="bg-purple-500"

// Com padrão
className="bg-purple-500 bg-[url('/pattern.svg')]"
```

#### Arredondar Mais/Menos
```tsx
// De:
className="rounded-full"

// Para:
className="rounded-lg" // Menos arredondado
className="rounded-none" // Reto
```

## 🎨 Bordas e Sombras

### Bordas Gradiente

```tsx
className="relative p-[1px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
```

### Sombras Customizadas

```css
/* Em index.css */
.shadow-glow {
  box-shadow: 0 0 30px rgba(147, 51, 234, 0.5);
}

.shadow-neon {
  box-shadow: 
    0 0 5px rgba(147, 51, 234, 0.8),
    0 0 10px rgba(147, 51, 234, 0.6),
    0 0 20px rgba(147, 51, 234, 0.4);
}
```

## 📱 Responsividade

### Breakpoints Customizados

Em `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
};
```

## 🌟 Efeitos Especiais

### Glassmorphism

```tsx
className="bg-white/10 backdrop-blur-lg border border-white/20"
```

### Neumorphism

```css
.neumorphic {
  background: #1e293b;
  box-shadow: 
    8px 8px 16px #0f172a,
    -8px -8px 16px #2d3748;
}
```

### Particles Background

Use bibliotecas como `tsparticles` ou `react-particles`.

## 🎬 Transições

### Duração
```tsx
// Rápida
className="transition-all duration-150"

// Normal
className="transition-all duration-300"

// Lenta
className="transition-all duration-500"
```

### Easing
```tsx
className="transition-all ease-linear"
className="transition-all ease-in"
className="transition-all ease-out"
className="transition-all ease-in-out"
```

## 💡 Dicas Finais

1. **Consistência**: Use o mesmo esquema de cores em todo o site
2. **Contraste**: Garanta boa legibilidade (WCAG AA)
3. **Performance**: Evite animações pesadas
4. **Teste**: Veja em diferentes dispositivos
5. **Inspiração**: Sites como Dribbble, Awwwards

## 🛠️ Ferramentas Úteis

- [Coolors](https://coolors.co) - Paletas de cores
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [Gradient Generator](https://cssgradient.io/)
- [Box Shadow Generator](https://shadows.brumm.af/)
- [Hero Patterns](https://heropatterns.com/) - Padrões SVG

---

**Divirta-se customizando! 🎨**
