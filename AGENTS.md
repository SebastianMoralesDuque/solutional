# AGENTS.md - Development Guidelines

## Overview
This is a React 19 + TypeScript + Vite + Tailwind CSS v4 landing page for Solutional Tech (AI agency). The project uses Express for backend services.

## Build Commands

```bash
# Install dependencies
npm install

# Start development server (port 3000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Clean dist folder
npm run clean

# TypeScript type checking (lint)
npm run lint
```

**Note:** There is currently no test framework configured. To add tests, install Vitest or Jest.

## Path Aliases

The `@/` alias maps to `./src`:
```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

## Code Style Guidelines

### Imports
- Use named imports for libraries: `import { motion } from "motion/react"`
- Use named imports from lucide-react: `import { ArrowRight, Bot } from "lucide-react"`
- Use path aliases (`@/`) for internal imports
- React imports: `import React, { useState, useEffect } from "react"`

### TypeScript
- Use interfaces for component props
- Use `type` for unions, intersections, and utility types
- Enable strict null checks
- Use explicit return types for functions where helpful

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}
```

### Component Patterns

**Functional Components with forwardRef:**
```typescript
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";
```

**CVA for Variants:**
```typescript
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("inline-flex items-center...", {
  variants: {
    variant: { default: "...", destructive: "..." },
    size: { default: "...", sm: "...", lg: "..." },
  },
  defaultVariants: { variant: "default", size: "default" },
});
```

### Class Utilities
Always use the `cn()` utility from `@/lib/utils` for merging Tailwind classes:
```typescript
import { cn } from "@/lib/utils";

<div className={cn("base-class", conditional && "conditional-class", className)} />
```

### Naming Conventions
- Components: PascalCase (e.g., `InteractiveGlobe`, `Button`)
- Functions: camelCase (e.g., `handleClick`, `formatDate`)
- Interfaces/Types: PascalCase (e.g., `ButtonProps`, `Testimonial`)
- Constants: camelCase or UPPER_SNAKE_CASE for config

### Tailwind CSS v4
- Use Tailwind v4 syntax (no `@tailwind` directives, use CSS `@import`)
- Dark mode via `dark:` prefix: `dark:bg-zinc-950`
- Use semantic colors: `bg-primary`, `text-primary-foreground`
- Use arbitrary values sparingly: `tracking-[0.3em]`

### Event Handlers
```typescript
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => { ... };
<button onClick={handleClick} />
```

### State Management
- Use `useState` for local component state
- Use `useEffect` for side effects with proper cleanup (return cleanup function)
```typescript
useEffect(() => {
  const timer = setTimeout(() => { ... }, 2500);
  return () => clearTimeout(timer);
}, []);
```

### Accessibility
- Include `aria-label` for icon-only buttons
- Use semantic HTML elements
- Include `alt` text for images

## Development Notes

- HMR can be disabled via `DISABLE_HMR=true` environment variable (useful for AI Studio to prevent flickering during edits)
- The dev server runs on port 3000 with host 0.0.0.0: `npm run dev`
- Environment variables go in `.env.local` (see `.env.example` for template)
- Required: `GEMINI_API_KEY` in `.env.local` for AI features
