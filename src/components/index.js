/**
 * Components Barrel Export
 *
 * Centralized exports for all reusable components.
 * Import components using: import { Button, Card } from '@components'
 */

// UI Components (Atomic)
export { default as Badge } from "./ui/Badge";
export { default as Button } from "./ui/Button";
export { default as Card } from "./ui/Card";
export { default as Icon } from "./ui/Icon";
export { default as Spinner } from "./ui/Spinner";

// Layout Components
export { default as Container } from "./layout/Container";
export { default as Grid } from "./layout/Grid";
export { default as Section } from "./layout/Section";

// Feature Components
export { Carousel } from "./Carousel";

// Animation Components
export { default as AnimatedSection } from "./animation/AnimatedSection";
export { default as FadeIn } from "./animation/FadeIn";

// Background Components
export { default as AnimatedBackground } from "./background/AnimatedBackground";
