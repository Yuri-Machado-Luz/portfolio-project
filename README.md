# Portfolio Projects

Personal portfolio website built with React and modern web technologies.

## Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router 7
- **Animations**: Motion (Framer Motion)
- **UI Components**: Ant Design + Custom Design System
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library
- **Code Quality**: ESLint + Prettier + EditorConfig

## Project Structure

```t
src/
├── assets/              # Static assets (images, icons)
│   ├── images/
│   └── icons/
├── components/          # Reusable UI components
│   ├── ui/              # Atomic UI components (Button, Card, Badge, etc.)
│   ├── layout/          # Layout primitives (Container, Section, Grid)
│   ├── animation/       # Animation wrappers (FadeIn, AnimatedSection)
│   └── index.js         # Barrel export
├── constants/           # App-wide constants
│   ├── animations.js    # Motion variants and presets
│   ├── breakpoints.js   # Responsive breakpoints
│   ├── routes.js        # Navigation routes
│   ├── theme.js         # Design tokens (colors, fonts, shadows)
│   └── index.js
├── hooks/               # Custom React hooks
│   ├── useClickOutside.js
│   ├── useDebounce.js
│   ├── useLocalStorage.js
│   ├── useMediaQuery.js
│   ├── useScrollPosition.js
│   └── index.js
├── layout/              # Page sections/layouts
│   ├── about/
│   ├── contact/
│   ├── hero/
│   ├── navbar/
│   ├── projects/
│   └── index.js
├── services/            # API services and external integrations
├── styles/              # Global CSS styles
│   ├── _components.css  # Component-specific styles
│   ├── _styles.css      # Base styles and Tailwind theme
│   └── index.css        # Main entry (imports)
├── test/                # Test utilities and setup
│   ├── setup.js         # Test environment config
│   └── utils.js         # Testing helpers
├── utils/               # Utility functions
│   ├── cn.js            # Class name merger
│   ├── date.js          # Date formatting
│   ├── timing.js        # Debounce, throttle
│   ├── validation.js    # Form validation
│   └── index.js
├── App.jsx              # Root component
└── main.jsx             # Entry point
```

## Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format with Prettier
npm run format:check # Check formatting

# Testing
npm run test         # Run tests in watch mode
npm run test:ui      # Open Vitest UI
npm run test:run     # Run tests once
npm run test:coverage # Run with coverage report

# All Checks
npm run validate     # Run lint + format check + tests
```

## Getting Started

1. **Install dependencies:**

```bash
npm install
```

1. **Start development server:**

```bash
npm run dev
```

1. **Open** [http://localhost:5173](http://localhost:5173)

## Import Aliases

The project uses path aliases for cleaner imports:

```javascript
// Instead of:
import Button from "../../../components/ui/Button";

// Use:
import { Button } from "@components";
// or
import { Button } from "@components/ui";
```

Available aliases:

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layout/*` → `src/layout/*`
- `@hooks/*` → `src/hooks/*`
- `@services/*` → `src/services/*`
- `@utils/*` → `src/utils/*`
- `@styles/*` → `src/styles/*`
- `@constants/*` → `src/constants/*`
- `@assets/*` → `src/assets/*`

## Component Guidelines

### Atomic Design Pattern

Components are organized following atomic design principles:

- **UI (Atoms)**: Basic building blocks (Button, Badge, Icon, Spinner)
- **Layout**: Structural components (Container, Section, Grid)
- **Animation**: Motion wrappers (FadeIn, AnimatedSection)
- **Feature**: Complex components combining atoms (Carousel, Navbar)

### Creating New Components

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

## Testing

Tests are located in `src/test/` and follow the pattern `*.test.{js,jsx}`.

```bash
# Run all tests
npm run test

# Run with UI
npm run test:ui

# Run with coverage
npm run test:coverage
```

## Changelog

### v0.6.0

- ✨ Complete architecture refactor with best practices
- 📁 New folder structure with barrel exports
- 🧱 Atomic Design component library (Button, Card, Badge, Icon, Spinner)
- 🎣 Custom hooks (useDebounce, useLocalStorage, useMediaQuery, etc.)
- 🛠️ Utility functions (cn, validation, date formatting, timing)
- 📋 Centralized constants (animations, theme, routes, breakpoints)
- 🧪 Testing setup with Vitest + React Testing Library
- 🔧 Improved ESLint with a11y and React rules
- 💅 EditorConfig + Prettier configuration
- 🚀 GitHub Actions CI workflow
- 📝 Path aliases for cleaner imports

### v0.5.0-alpha

- Complete project overhaul
- Migration to React + Vite
- Added Tailwind CSS
- Modern architecture implementation

## License

MIT
