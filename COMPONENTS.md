# 📦 Documentação de Componentes

## Estrutura de Componentes

### 🎯 App.tsx
**Descrição:** Componente raiz da aplicação.

**Funcionalidades:**
- Gerenciamento de estado global
- Controle de navegação ativa
- Tela de carregamento inicial
- SEO e metadados

**Estados:**
- `activeSection`: Seção ativa atual baseada no scroll
- `isLoading`: Controla exibição da tela de loading

---

### 🎨 Header.tsx
**Descrição:** Cabeçalho fixo com navegação.

**Props:**
- `activeSection: string` - Seção atualmente ativa

**Funcionalidades:**
- Navegação suave entre seções
- Menu mobile responsivo
- Mudança de aparência no scroll
- Destaque da seção ativa

**Estados:**
- `isScrolled`: Detecta scroll para aplicar backdrop
- `isMobileMenuOpen`: Controla abertura do menu mobile

---

### 🏠 Hero.tsx
**Descrição:** Seção inicial de apresentação.

**Funcionalidades:**
- Efeito de digitação animado no título
- Links para redes sociais
- CTAs para projetos e contato
- Indicador de scroll animado

**Animações:**
- Efeito typewriter no subtítulo
- Fade in no nome
- Bounce no indicador de scroll

---

### 👤 About.tsx
**Descrição:** Seção sobre o desenvolvedor.

**Funcionalidades:**
- Apresentação pessoal
- Experiência profissional
- Estatísticas (projetos, tecnologias)
- Cards informativos com hover effects

**Layout:**
- Grid responsivo 2 colunas (desktop)
- Stack vertical (mobile)

---

### 💪 Skills.tsx
**Descrição:** Exibição de habilidades técnicas.

**Funcionalidades:**
- Categorização de skills (Frontend, Backend, Ferramentas)
- Barras de progresso animadas
- Cards de features
- Ícones representativos

**Dados:**
- Importa `SKILL_CATEGORIES` de constants
- Níveis de proficiência (0-100%)

---

### 🎯 Projects.tsx
**Descrição:** Portfólio de projetos.

**Funcionalidades:**
- Grid responsivo de projetos
- Sistema de filtros por tecnologia
- Links para GitHub, Claude e demos
- Tags de tecnologias
- Hover effects

**Estados:**
- `filter`: Tecnologia selecionada para filtro

**Interface Project:**
```typescript
{
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  claudeUrl?: string;
  liveUrl?: string;
  image: string;
}
```

---

### 📧 Contact.tsx
**Descrição:** Formulário e informações de contato.

**Funcionalidades:**
- Formulário de contato funcional
- Validação de campos
- Feedback de envio
- Informações de contato com links
- Redes sociais

**Estados:**
- `formData`: Dados do formulário (name, email, message)
- `status`: Status do envio ('idle' | 'success' | 'error')

---

### 🦶 Footer.tsx
**Descrição:** Rodapé da aplicação.

**Funcionalidades:**
- Links rápidos para navegação
- Informações de contato
- Redes sociais
- Botão scroll to top
- Copyright dinâmico

---

### ⏳ LoadingScreen.tsx
**Descrição:** Tela de carregamento inicial.

**Props:**
- `onLoadingComplete: () => void` - Callback ao finalizar

**Funcionalidades:**
- Animação de progresso
- Logo animado
- Transição suave

**Estados:**
- `progress`: Progresso de 0-100%

---

### 🔍 SEO.tsx
**Descrição:** Gerenciamento de metadados SEO.

**Props:**
- `title?: string` - Título da página
- `description?: string` - Descrição da página

**Funcionalidades:**
- Atualização dinâmica de title
- Injeção de meta description

---

## 🎨 Estilos e Temas

### Cores Principais
- **Purple**: `#9333ea` - Cor primária
- **Pink**: `#db2777` - Cor secundária
- **Slate-900**: `#0f172a` - Background
- **Slate-800**: `#1e293b` - Cards

### Gradientes
```css
from-slate-900 via-purple-900 to-slate-900
from-purple-600 to-pink-600
```

### Animações
- `animate-fade-in`: Fade in com translate
- `animate-pulse`: Pulsação
- `animate-bounce`: Bounce vertical

---

## 🛠️ Utilities

### Hooks Personalizados

#### useScrollAnimation
```typescript
const isVisible = useScrollAnimation(ref);
```
Detecta quando elemento entra no viewport.

### Helpers

#### scrollToSection
```typescript
scrollToSection('projects'); // Scroll suave para seção
```

#### debounce
```typescript
const debouncedFn = debounce(myFunction, 300);
```

#### throttle
```typescript
const throttledFn = throttle(myFunction, 1000);
```

---

## 📱 Responsividade

### Breakpoints Tailwind
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Mobile First
Todos os componentes são desenvolvidos com abordagem mobile-first.

---

## 🚀 Performance

### Otimizações
- Lazy loading de componentes
- Debounce em scroll events
- Intersection Observer para animações
- CSS-in-JS mínimo (Tailwind)
- Build otimizado com Vite

---

## ♿ Acessibilidade

### Boas Práticas
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus visible
- Alt texts (quando aplicável)
- Color contrast (WCAG AA)
