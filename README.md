# Portfólio - Yuri Machado Luz

Portfólio pessoal desenvolvido com React e tecnologias web modernas.

## Stack Tecnológica

- **Framework**: React 19 + Vite
- **Estilização**: Tailwind CSS 4
- **Roteamento**: React Router 7
- **Animações**: Motion (Framer Motion)
- **Componentes UI**: Ant Design + Sistema de Design Customizado
- **Ícones**: Lucide React
- **Testes**: Vitest + React Testing Library
- **Qualidade de Código**: ESLint + Prettier + EditorConfig

## Estrutura do Projeto

```plaintext
src/
├── assets/              # Assets estáticos (imagens, ícones)
│   ├── images/
│   └── icons/
├── components/          # Componentes UI reutilizáveis
│   ├── ui/              # Componentes atômicos (Button, Card, Badge, etc.)
│   ├── layout/          # Componentes de layout (Container, Section, Grid)
│   ├── animation/       # Wrappers de animação (FadeIn, AnimatedSection)
│   └── index.js         # Exportações centralizadas
├── constants/           # Constantes globais da aplicação
│   ├── animations.js    # Variantes e presets do Motion
│   ├── breakpoints.js   # Breakpoints responsivos
│   ├── routes.js        # Rotas de navegação
│   ├── theme.js         # Tokens de design (cores, fontes, sombras)
│   └── index.js
├── hooks/               # Hooks customizados do React
│   ├── useClickOutside.js
│   ├── useDebounce.js
│   ├── useLocalStorage.js
│   ├── useMediaQuery.js
│   ├── useScrollPosition.js
│   └── index.js
├── layout/              # Seções e layouts das páginas
│   ├── about/
│   ├── contact/
│   ├── hero/
│   ├── navbar/
│   ├── projects/
│   └── index.js
├── services/            # Serviços de API e integrações externas
├── styles/              # Estilos CSS globais
│   ├── _components.css  # Estilos específicos de componentes
│   ├── _styles.css      # Estilos base e tema Tailwind
│   └── index.css        # Ponto de entrada principal (imports)
├── test/                # Utilitários e configuração de testes
│   ├── setup.js         # Configuração do ambiente de testes
│   └── utils.js         # Helpers de testes
├── utils/               # Funções utilitárias
│   ├── cn.js            # Concatenador de classes
│   ├── date.js          # Formatação de datas
│   ├── timing.js        # Debounce, throttle
│   ├── validation.js    # Validação de formulários
│   └── index.js
├── App.jsx              # Componente raiz
└── main.jsx             # Ponto de entrada
```

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build de produção

# Qualidade de Código
npm run lint         # Executa ESLint
npm run lint:fix     # Corrige problemas do ESLint
npm run format       # Formata código com Prettier
npm run format:check # Verifica formatação

# Testes
npm run test         # Executa testes em modo watch
npm run test:ui      # Abre interface do Vitest
npm run test:run     # Executa testes uma vez
npm run test:coverage # Executa com relatório de cobertura

# Validação Completa
npm run validate     # Executa lint + verificação de formatação + testes
```

## Como Usar

1. **Instalar dependências:**

```bash
npm install
```

2. **Iniciar servidor de desenvolvimento:**

```bash
npm run dev
```

3. **Acessar** [http://localhost:5173](http://localhost:5173)

## Path Aliases

O projeto utiliza path aliases para imports mais limpos:

```javascript
// Em vez de:
import Button from "../../../components/ui/Button";

// Use:
import { Button } from "@components";
// ou
import { Button } from "@components/ui";
```

Aliases disponíveis:

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layout/*` → `src/layout/*`
- `@hooks/*` → `src/hooks/*`
- `@services/*` → `src/services/*`
- `@utils/*` → `src/utils/*`
- `@styles/*` → `src/styles/*`
- `@constants/*` → `src/constants/*`
- `@assets/*` → `src/assets/*`

## Diretrizes de Componentes

### Padrão Atomic Design

Os componentes são organizados seguindo princípios de atomic design:

- **UI (Atoms)**: Blocos básicos de construção (Button, Badge, Icon, Spinner)
- **Layout**: Componentes estruturais (Container, Section, Grid)
- **Animation**: Wrappers de animação (FadeIn, AnimatedSection)
- **Feature**: Componentes complexos combinando átomos (Carousel, Navbar)

### Criando Novos Componentes

```jsx
// src/components/ui/MyComponent.jsx
import { cn } from "@utils/cn";

const MyComponent = ({
  children,
  variant = "default",
  className,
  ...props
}) => {
  const variants = {
    default: "bg-main-gray text-white",
    primary: "bg-pri text-white",
  };

  return (
    <div className={cn("base-styles", variants[variant], className)} {...props}>
      {children}
    </div>
  );
};

export default MyComponent;
```

## Testes

Os testes estão localizados em `src/test/` e seguem o padrão `*.test.{js,jsx}`.

```bash
# Executar todos os testes
npm run test

# Executar com interface
npm run test:ui

# Executar com cobertura
npm run test:coverage
```

## Sobre o Projeto

Portfólio pessoal desenvolvido por **Yuri Machado Luz** para apresentar projetos e habilidades técnicas.

### Recursos Implementados

- Refatoração completa de arquitetura com melhores práticas
- Estrutura de pastas organizada com barrel exports
- Biblioteca de componentes seguindo Atomic Design
- Hooks customizados (useDebounce, useLocalStorage, useMediaQuery, etc.)
- Funções utilitárias (cn, validação, formatação de datas, timing)
- Constantes centralizadas (animações, tema, rotas, breakpoints)
- Setup de testes com Vitest + React Testing Library
- ESLint configurado com regras de a11y e React
- EditorConfig + Prettier
- Workflow de CI com GitHub Actions
- Path aliases para imports limpos

---

**© 2026 Yuri Machado Luz. Todos os direitos reservados.**

Este é um projeto pessoal e não está disponível para uso, modificação ou distribuição sem permissão expressa do autor.
