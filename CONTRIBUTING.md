# 🤝 Guia de Contribuição

Obrigado por considerar contribuir para este projeto! Este documento fornece diretrizes para contribuir.

## 📋 Código de Conduta

Este projeto segue um Código de Conduta. Ao participar, espera-se que você mantenha este código.

### Nossos Padrões

- Use linguagem acolhedora e inclusiva
- Respeite pontos de vista e experiências diferentes
- Aceite críticas construtivas
- Foque no que é melhor para a comunidade

## 🚀 Como Contribuir

### Reportar Bugs

Antes de criar um bug report, verifique se já não existe uma issue sobre o problema.

**Bom bug report deve incluir:**
- Resumo claro e descritivo
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)
- Informações do ambiente (navegador, OS, etc.)

### Sugerir Melhorias

Enhancement suggestions são rastreadas como issues no GitHub.

**Boa sugestão deve incluir:**
- Descrição clara da funcionalidade
- Casos de uso
- Possível implementação
- Alternativas consideradas

### Pull Requests

1. **Fork o repositório**
```bash
git clone https://github.com/CauanAmorimGomes/portfolio.git
cd portfolio
```

2. **Crie uma branch**
```bash
git checkout -b feature/minha-feature
# ou
git checkout -b fix/meu-bugfix
```

3. **Faça suas alterações**
- Siga os padrões de código
- Adicione testes se necessário
- Atualize documentação

4. **Commit suas mudanças**
```bash
git commit -m "feat: adiciona nova funcionalidade X"
```

Use commits semânticos:
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Manutenção

5. **Push para o GitHub**
```bash
git push origin feature/minha-feature
```

6. **Abra um Pull Request**

## 💻 Padrões de Código

### TypeScript

```typescript
// ✅ Bom
interface Props {
  title: string;
  onClose: () => void;
}

const Component = ({ title, onClose }: Props) => {
  // ...
};

// ❌ Evite
const Component = (props: any) => {
  // ...
};
```

### React Components

```typescript
// ✅ Functional Components
const MyComponent = () => {
  return <div>...</div>;
};

// ✅ Props com interface
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};
```

### Naming Conventions

- **Componentes**: PascalCase (`MyComponent.tsx`)
- **Funções**: camelCase (`handleClick`)
- **Constantes**: UPPER_SNAKE_CASE (`API_URL`)
- **Arquivos**: kebab-case (`my-component.tsx`)

### CSS/Tailwind

```tsx
// ✅ Organize classes logicamente
<div className="
  flex items-center justify-center
  px-4 py-2
  bg-purple-600 hover:bg-purple-700
  text-white
  rounded-lg
  transition-all
">
  Button
</div>

// ❌ Evite classes muito longas inline
<div className="flex items-center justify-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg">
```

## 📁 Estrutura de Pastas

```
src/
├── components/       # Componentes React
│   ├── Header.tsx
│   └── ...
├── constants/        # Constantes e dados
│   └── portfolio-data.ts
├── hooks/           # Custom hooks
│   └── useScrollAnimation.ts
├── types/           # TypeScript types
│   └── index.ts
├── utils/           # Funções utilitárias
│   └── helpers.ts
├── App.tsx          # Componente raiz
├── main.tsx         # Entry point
└── index.css        # Estilos globais
```

## 🧪 Testes

```bash
# Executar testes
npm test

# Executar com coverage
npm run test:coverage
```

## 📝 Documentação

- Comente código complexo
- Atualize README.md quando necessário
- Documente novas funcionalidades
- Use JSDoc para funções públicas

```typescript
/**
 * Calcula o total do carrinho
 * @param items - Array de itens
 * @returns Total calculado
 */
function calculateTotal(items: Item[]): number {
  // ...
}
```

## 🎨 Estilo de Código

### Formatação

- Use Prettier (configuração incluída)
- 2 espaços para indentação
- Aspas simples para strings
- Ponto e vírgula no final

### Imports

```typescript
// ✅ Organize imports
import { useState, useEffect } from 'react';
import { MyComponent } from './components/MyComponent';
import { helper } from './utils/helper';
import type { MyType } from './types';
```

## 🔍 Code Review

Ao revisar PRs, considere:

- ✅ Código segue padrões do projeto
- ✅ Testes passam
- ✅ Documentação atualizada
- ✅ Sem código desnecessário
- ✅ Performance adequada
- ✅ Acessibilidade mantida

## 🐛 Debugging

```bash
# Modo desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## 📞 Contato

Dúvidas? Entre em contato:
- GitHub Issues
- Email: cauan@example.com

## 📄 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto (MIT).

---

**Obrigado por contribuir! 🎉**
