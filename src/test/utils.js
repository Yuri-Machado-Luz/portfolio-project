import { render } from "@testing-library/react";

/**
 * Custom render function with common providers
 *
 * @example
 * import { renderWithProviders } from '@/test/utils';
 * const { getByText } = renderWithProviders(<MyComponent />);
 */
export function renderWithProviders(ui, options = {}) {
  const { ...renderOptions } = options;

  // Add any providers here (Router, Theme, etc.)
  function Wrapper({ children }) {
    return <>{children}</>;
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

/**
 * Create a mock function with TypeScript-friendly types
 */
export const createMockFn = () => vi.fn();

/**
 * Wait for a condition to be true
 */
export async function waitForCondition(condition, timeout = 5000) {
  const startTime = Date.now();

  while (!condition()) {
    if (Date.now() - startTime > timeout) {
      throw new Error("Timeout waiting for condition");
    }
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
}

// Re-export everything from testing-library
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
