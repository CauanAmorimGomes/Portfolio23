# 📂 Estrutura do Projeto

## 🌳 Árvore de Arquivos

```
portfolio/
│
├── 📁 src/                          # Código fonte
│   ├── 📁 components/               # Componentes React
│   │   ├── Header.tsx              # ⬆️ Navegação fixa
│   │   ├── Hero.tsx                # 🏠 Seção inicial
│   │   ├── About.tsx               # 👤 Sobre mim
│   │   ├── Skills.tsx              # 💪 Habilidades
│   │   ├── Projects.tsx            # 🎯 Portfólio
│   │   ├── Contact.tsx             # 📧 Contato
│   │   ├── Footer.tsx              # 🦶 Rodapé
│   │   ├── LoadingScreen.tsx       # ⏳ Tela de loading
│   │   └── SEO.tsx                 # 🔍 Meta tags
│   │
│   ├── 📁 constants/                # Dados e constantes
│   │   └── portfolio-data.ts       # 📊 Dados do portfólio
│   │
│   ├── 📁 hooks/                    # React hooks customizados
│   │   └── useScrollAnimation.ts   # 📜 Hook de scroll
│   │
│   ├── 📁 types/                    # TypeScript types
│   │   └── index.ts                # 📝 Interfaces e tipos
│   │
│   ├── 📁 utils/                    # Utilitários
│   │   ├── cn.ts                   # 🎨 ClassNames helper
│   │   └── helpers.ts              # 🛠️ Funções auxiliares
│   │
│   ├── App.tsx                     # 🎯 Componente raiz
│   ├── main.tsx                    # 🚀 Entry point
│   └── index.css                   # 🎨 Estilos globais
│
├── 📁 public/                       # Arquivos estáticos
│   └── (seus assets aqui)          # Imagens, ícones, etc.
│
├── 📁 dist/                         # Build de produção
│   └── index.html                  # 📦 Arquivo final
│
├── 📄 index.html                    # 🌐 HTML template
├── 📄 package.json                  # 📦 Dependências
├── 📄 tsconfig.json                 # ⚙️ Config TypeScript
├── 📄 vite.config.ts                # ⚡ Config Vite
├── 📄 .gitignore                    # 🚫 Arquivos ignorados
│
├── 📚 README.md                     # 📖 Documentação principal
├── 📚 QUICK_START.md                # 🚀 Guia rápido
├── 📚 COMPONENTS.md                 # 📦 Doc de componentes
├── 📚 CUSTOMIZATION_GUIDE.md        # 🎨 Guia de customização
├── 📚 CONTRIBUTING.md               # 🤝 Guia de contribuição
├── 📚 CHANGELOG.md                  # 📝 Histórico de mudanças
├── 📚 PROJECT_STRUCTURE.md          # 📂 Este arquivo
└── 📄 LICENSE                       # ⚖️ Licença MIT
```

## 📊 Visão Geral dos Componentes

### 🎯 Componentes Principais (7)

| Componente | Arquivo | Responsabilidade |
|-----------|---------|------------------|
| Header | `Header.tsx` | Navegação e menu |
| Hero | `Hero.tsx` | Apresentação inicial |
| About | `About.tsx` | Informações pessoais |
| Skills | `Skills.tsx` | Habilidades técnicas |
| Projects | `Projects.tsx` | Portfólio de projetos |
| Contact | `Contact.tsx` | Formulário de contato |
| Footer | `Footer.tsx` | Links e informações |

### 🛠️ Componentes Utilitários (2)

| Componente | Arquivo | Responsabilidade |
|-----------|---------|------------------|
| LoadingScreen | `LoadingScreen.tsx` | Tela de carregamento |
| SEO | `SEO.tsx` | Meta tags dinâmicas |

## 📝 Fluxo de Dados

```
App.tsx (Estado Global)
    ↓
    ├─→ LoadingScreen (Inicial)
    ├─→ SEO (Metadados)
    ├─→ Header (Navegação)
    ├─→ Hero (Apresentação)
    ├─→ About (Sobre)
    ├─→ Skills (Habilidades)
    ├─→ Projects (Projetos)
    ├─→ Contact (Contato)
    └─→ Footer (Rodapé)
```

## 🔄 Ciclo de Vida da Aplicação

1. **Inicialização** (`main.tsx`)
   - Carrega React e estilos
   - Monta App no DOM

2. **Loading** (`LoadingScreen`)
   - Animação de carregamento
   - Progresso 0-100%

3. **Renderização** (`App.tsx`)
   - Detecta scroll
   - Atualiza seção ativa
   - Gerencia estado

4. **Interação** (Componentes)
   - Navegação suave
   - Filtros de projetos
   - Formulário de contato

## 📦 Dependências

### Principais
- ⚛️ **React 18** - UI Library
- 📘 **TypeScript** - Type Safety
- ⚡ **Vite** - Build Tool
- 🎨 **Tailwind CSS** - Styling

### DevDependencies
- ESLint - Linting
- TypeScript Compiler - Type Checking

## 🎨 Arquitetura de Estilos

```
index.css (Global)
    ├─→ Tailwind Base
    ├─→ Animações customizadas
    ├─→ Scrollbar customizada
    └─→ Utilities

Components (Tailwind Classes)
    └─→ Inline com className
```

## 🗂️ Organização de Dados

### Centralizado em `portfolio-data.ts`

```typescript
PERSONAL_INFO      → Informações pessoais
ABOUT_TEXT         → Textos sobre mim
SKILL_CATEGORIES   → Habilidades e níveis
PROJECTS           → Lista de projetos
CONTACT_INFO       → Informações de contato
FEATURES           → Features destacadas
```

## 🔗 Fluxo de Navegação

```
Header
  ├─→ Home (Hero)
  ├─→ About
  ├─→ Skills
  ├─→ Projects
  └─→ Contact

Footer (Scroll to Top)
  └─→ Home
```

## 📱 Responsividade

### Breakpoints

```
Mobile:    < 768px
Tablet:    768px - 1024px
Desktop:   > 1024px
```

### Estratégia
- **Mobile First**: Estilos base para mobile
- **Progressive Enhancement**: Media queries para telas maiores
- **Grid System**: Tailwind grid responsivo

## 🎯 Pontos de Entrada

1. **Usuário Acessa** → `index.html`
2. **Carrega Script** → `main.tsx`
3. **Monta App** → `App.tsx`
4. **Renderiza Componentes** → `components/*`

## 🧩 Modularização

### Por Funcionalidade

```
components/     → UI Components
hooks/          → React Hooks
utils/          → Utility Functions
constants/      → Data & Config
types/          → TypeScript Types
```

### Por Camada

```
Presentation Layer    → Components
Business Logic        → Hooks & Utils
Data Layer           → Constants
Type Layer           → Types
```

## 📈 Estatísticas do Projeto

- **Componentes**: 9
- **Hooks Customizados**: 1
- **Arquivos TypeScript**: 15+
- **Linhas de Código**: ~2500+
- **Documentação**: 7 arquivos
- **Build Size**: ~257 KB (73 KB gzipped)

## 🚀 Scripts Disponíveis

```bash
npm run dev        # Desenvolvimento (localhost:5173)
npm run build      # Build de produção
npm run preview    # Preview do build
npm run lint       # Lint do código
```

## 🎓 Padrões Utilizados

- ✅ **Component-Based Architecture**
- ✅ **Functional Components + Hooks**
- ✅ **TypeScript Strict Mode**
- ✅ **Mobile-First Design**
- ✅ **Semantic HTML**
- ✅ **Utility-First CSS (Tailwind)**
- ✅ **Single Responsibility Principle**

## 🔐 Boas Práticas Implementadas

- ✅ Type Safety com TypeScript
- ✅ Código modular e reutilizável
- ✅ Separação de concerns
- ✅ Performance otimizada
- ✅ Acessibilidade (ARIA, Semantic HTML)
- ✅ SEO friendly
- ✅ Responsivo
- ✅ Documentação completa

## 📊 Fluxo de Build

```
Source Code (src/)
    ↓
TypeScript Compilation
    ↓
Tailwind CSS Processing
    ↓
Vite Bundling
    ↓
Optimization (minify, tree-shaking)
    ↓
Single HTML File (dist/index.html)
```

---

**Total de Arquivos**: 29  
**Total de Componentes**: 9  
**Tecnologias**: 4 principais  
**Linhas de Docs**: 2000+  

*Atualizado em: Janeiro 2026*
