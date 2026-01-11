import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useClickOutside } from "../hooks/useClickOutside";
import { useDebounce } from "../hooks/useDebounce";
import { useLocalStorage } from "../hooks/useLocalStorage";

describe("useDebounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", 500));
    expect(result.current).toBe("initial");
  });

  it("debounces value changes", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      { initialProps: { value: "initial" } }
    );

    // Update value
    rerender({ value: "updated" });

    // Value should still be initial
    expect(result.current).toBe("initial");

    // Fast forward time
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Now should be updated
    expect(result.current).toBe("updated");
  });

  it("cancels previous timeout on rapid changes", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      { initialProps: { value: "first" } }
    );

    rerender({ value: "second" });
    act(() => vi.advanceTimersByTime(200));

    rerender({ value: "third" });
    act(() => vi.advanceTimersByTime(200));

    // Should still be first
    expect(result.current).toBe("first");

    act(() => vi.advanceTimersByTime(300));

    // Now should be third (skipped second)
    expect(result.current).toBe("third");
  });
});

describe("useLocalStorage", () => {
  const key = "test-key";

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it("returns initial value when localStorage is empty", () => {
    const { result } = renderHook(() => useLocalStorage(key, "default"));
    expect(result.current[0]).toBe("default");
  });

  it("returns stored value from localStorage", () => {
    localStorage.setItem(key, JSON.stringify("stored"));

    const { result } = renderHook(() => useLocalStorage(key, "default"));
    expect(result.current[0]).toBe("stored");
  });

  it("updates localStorage when value changes", () => {
    const { result } = renderHook(() => useLocalStorage(key, "initial"));

    act(() => {
      result.current[1]("updated");
    });

    expect(result.current[0]).toBe("updated");
    expect(JSON.parse(localStorage.getItem(key))).toBe("updated");
  });

  it("handles objects correctly", () => {
    const initialValue = { name: "test", count: 0 };
    const { result } = renderHook(() => useLocalStorage(key, initialValue));

    expect(result.current[0]).toEqual(initialValue);

    act(() => {
      result.current[1]({ ...initialValue, count: 5 });
    });

    expect(result.current[0]).toEqual({ name: "test", count: 5 });
  });
});

describe("useClickOutside", () => {
  it("calls callback when clicking outside", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useClickOutside(callback));

    // Create a mock element
    const element = document.createElement("div");
    document.body.appendChild(element);

    // Simulate ref assignment
    Object.defineProperty(result.current, "current", {
      value: element,
      writable: true,
    });

    // Click outside (on body)
    act(() => {
      document.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
    });

    expect(callback).toHaveBeenCalled();

    // Cleanup
    document.body.removeChild(element);
  });
});
