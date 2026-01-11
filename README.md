# Portfolio Pessoal — Yuri Machado Luz

Site de portfolio pessoal desenvolvido com React e tecnologias web modernas.

**Nota importante:** Este é um projeto pessoal e não está disponível para uso, cópia ou distribuição. O código está público apenas para fins de demonstração de habilidades técnicas.

## Sobre o Desenvolvedor

### Yuri Machado Luz (Yuma)

- Desenvolvedor Full-Stack
- Perfil híbrido: Tecnologia + Psicologia + Design
- São Paulo, Brasil

### Contato

- LinkedIn: [linkedin.com/in/yurimachadoluz0311](https://linkedin.com/in/yurimachadoluz0311)
- GitHub: [github.com/Yuri-Machado-Luz](https://github.com/Yuri-Machado-Luz)
- Email: <yurimachadoluz@hotmail.com>

## Stack Tecnológico

- **Framework**: React 19 + Vite 7
- **Estilização**: Tailwind CSS 4
- **Roteamento**: React Router 7
- **Animações**: Motion (Framer Motion)
- **Componentes UI**: Ant Design + Sistema de Design Customizado
- **Ícones**: Lucide React
- **Testes**: Vitest + React Testing Library
- **Qualidade de Código**: ESLint + Prettier + EditorConfig

## Estrutura do Projeto

```text
src/
├── assets/              # Assets estáticos (imagens, ícones)
│   ├── images/
│   └── icons/
├── components/          # Componentes reutilizáveis
│   ├── ui/              # Componentes atômicos (Button, Card, Badge, etc.)
│   ├── layout/          # Primitivas de layout (Container, Section, Grid)
│   ├── animation/       # Wrappers de animação (FadeIn, AnimatedSection)
│   └── index.js         # Barrel export
├── constants/           # Constantes da aplicação
│   ├── animations.js    # Variantes e presets do Motion
│   ├── breakpoints.js   # Breakpoints responsivos
│   ├── routes.js        # Rotas de navegação
│   ├── theme.js         # Design tokens (cores, fontes, sombras)
│   └── index.js
├── hooks/               # Custom React hooks
│   ├── useClickOutside.js
│   ├── useDebounce.js
│   ├── useLocalStorage.js
│   ├── useMediaQuery.js
│   ├── useScrollPosition.js
│   └── index.js
├── layout/              # Seções da página
│   ├── about/
│   ├── contact/
│   ├── hero/
│   ├── navbar/
│   ├── projects/
│   └── index.js
├── services/            # Serviços de API e integrações externas
├── styles/              # Estilos CSS globais
│   ├── _components.css  # Estilos específicos de componentes
│   ├── _styles.css      # Estilos base e tema do Tailwind
│   └── index.css        # Entrada principal (imports)
├── test/                # Utilitários e configuração de testes
│   ├── setup.js         # Configuração do ambiente de testes
│   └── utils.js         # Helpers de testes
├── utils/               # Funções utilitárias
│   ├── cn.js            # Mesclador de class names
│   ├── date.js          # Formatação de datas
│   ├── timing.js        # Debounce, throttle
│   ├── validation.js    # Validação de formulários
│   └── index.js
├── App.jsx              # Componente raiz
└── main.jsx             # Ponto de entrada
```

## Design System

### Paleta de Cores

- **Primária**: #ff0040 (vermelho/rosa)
- **Secundária**: #00ffff (ciano)
- **Neutros**: #f2f4f3 (branco), #1a1a1a (cinza), #0c090d (preto)

### Tipografia

- **Sans**: Josefin Sans
- **Logo**: Changa
- **Accent**: Tenor Sans

## Scripts de Desenvolvimento

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build de produção

# Qualidade de Código
npm run lint         # Executa ESLint
npm run lint:fix     # Corrige problemas do ESLint
npm run format       # Formata com Prettier
npm run format:check # Verifica formatação

# Testes
npm run test         # Executa testes em modo watch
npm run test:ui      # Abre UI do Vitest
npm run test:run     # Executa testes uma vez
npm run test:coverage # Executa com relatório de cobertura

# Validação Completa
npm run validate     # Executa lint + format check + testes
```

## Configuração Local

1. **Instalar dependências:**

   ```bash
   npm install
   ```

2. **Iniciar servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

3. **Acessar** [http://localhost:5173](http://localhost:5173)

## Aliases de Importação

O projeto utiliza aliases de caminho para imports mais limpos:

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

## Padrão de Componentes

### Atomic Design

Os componentes seguem princípios de atomic design:

- **UI (Atoms)**: Blocos básicos (Button, Badge, Icon, Spinner)
- **Layout**: Componentes estruturais (Container, Section, Grid)
- **Animation**: Wrappers de animação (FadeIn, AnimatedSection)
- **Feature**: Componentes complexos combinando átomos (Carousel, Navbar)

### Exemplo de Componente

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

Testes estão localizados em `src/test/` e seguem o padrão `*.test.{js,jsx}`.

```bash
# Executar todos os testes
npm run test

# Executar com UI
npm run test:ui

# Executar com cobertura
npm run test:coverage
```

## Changelog

### v0.6.0

- Refatoração completa da arquitetura com melhores práticas
- Nova estrutura de pastas com barrel exports
- Biblioteca de componentes com Atomic Design (Button, Card, Badge, Icon, Spinner)
- Custom hooks (useDebounce, useLocalStorage, useMediaQuery, etc.)
- Funções utilitárias (cn, validation, formatação de datas, timing)
- Constantes centralizadas (animações, tema, rotas, breakpoints)
- Configuração de testes com Vitest + React Testing Library
- ESLint melhorado com regras de a11y e React
- Configuração de EditorConfig + Prettier
- Workflow de CI com GitHub Actions
- Aliases de caminho para imports mais limpos

### v1.0.0

- Reformulação completa do projeto
- Migração para React + Vite
- Adição do Tailwind CSS
- Implementação de arquitetura moderna

---

**Última atualização:** Janeiro 2026

Copyright © 2026 Yuri Machado Luz. Todos os direitos reservados.
