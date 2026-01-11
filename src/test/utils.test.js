import { describe, expect, it } from "vitest";
import { cn } from "../utils/cn";
import { formatDate, formatRelativeTime } from "../utils/date";
import { debounce, throttle } from "../utils/timing";
import {
  validateEmail,
  validateMinLength,
  validateRequired,
  validateUrl,
} from "../utils/validation";

describe("cn (className utility)", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("filters out falsy values", () => {
    expect(cn("foo", null, undefined, false, "bar")).toBe("foo bar");
  });

  it("handles conditional classes", () => {
    const isActive = true;
    const isDisabled = false;

    expect(cn("base", isActive && "active", isDisabled && "disabled")).toBe(
      "base active"
    );
  });

  it("returns empty string for no valid classes", () => {
    expect(cn(null, undefined, false)).toBe("");
  });
});

describe("Validation utilities", () => {
  describe("validateEmail", () => {
    it("validates correct emails", () => {
      expect(validateEmail("test@example.com")).toBe(true);
      expect(validateEmail("user.name@domain.org")).toBe(true);
      expect(validateEmail("user+tag@example.co.uk")).toBe(true);
    });

    it("rejects invalid emails", () => {
      expect(validateEmail("invalid")).toBe(false);
      expect(validateEmail("@example.com")).toBe(false);
      expect(validateEmail("test@")).toBe(false);
      expect(validateEmail("test @example.com")).toBe(false);
    });
  });

  describe("validateRequired", () => {
    it("returns true for non-empty values", () => {
      expect(validateRequired("text")).toBe(true);
      expect(validateRequired([1, 2])).toBe(true);
      expect(validateRequired({ key: "value" })).toBe(true);
      expect(validateRequired(0)).toBe(true);
    });

    it("returns false for empty values", () => {
      expect(validateRequired("")).toBe(false);
      expect(validateRequired("   ")).toBe(false);
      expect(validateRequired([])).toBe(false);
      expect(validateRequired({})).toBe(false);
      expect(validateRequired(null)).toBe(false);
      expect(validateRequired(undefined)).toBe(false);
    });
  });

  describe("validateMinLength", () => {
    it("validates minimum length correctly", () => {
      expect(validateMinLength("hello", 3)).toBe(true);
      expect(validateMinLength("hi", 3)).toBe(false);
      expect(validateMinLength("abc", 3)).toBe(true);
    });
  });

  describe("validateUrl", () => {
    it("validates correct URLs", () => {
      expect(validateUrl("https://example.com")).toBe(true);
      expect(validateUrl("http://localhost:3000")).toBe(true);
      expect(validateUrl("https://sub.domain.org/path")).toBe(true);
    });

    it("rejects invalid URLs", () => {
      expect(validateUrl("not-a-url")).toBe(false);
      expect(validateUrl("example.com")).toBe(false);
    });
  });
});

describe("Timing utilities", () => {
  describe("debounce", () => {
    it("debounces function calls", async () => {
      vi.useFakeTimers();
      const fn = vi.fn();
      const debounced = debounce(fn, 100);

      debounced();
      debounced();
      debounced();

      expect(fn).not.toHaveBeenCalled();

      vi.advanceTimersByTime(100);

      expect(fn).toHaveBeenCalledTimes(1);
      vi.useRealTimers();
    });

    it("can be cancelled", () => {
      vi.useFakeTimers();
      const fn = vi.fn();
      const debounced = debounce(fn, 100);

      debounced();
      debounced.cancel();

      vi.advanceTimersByTime(100);

      expect(fn).not.toHaveBeenCalled();
      vi.useRealTimers();
    });
  });

  describe("throttle", () => {
    it("throttles function calls", () => {
      vi.useFakeTimers();
      const fn = vi.fn();
      const throttled = throttle(fn, 100);

      throttled();
      throttled();
      throttled();

      expect(fn).toHaveBeenCalledTimes(1);

      vi.advanceTimersByTime(100);
      throttled();

      expect(fn).toHaveBeenCalledTimes(2);
      vi.useRealTimers();
    });
  });
});

describe("Date utilities", () => {
  describe("formatDate", () => {
    it("formats date correctly", () => {
      // Use UTC date to avoid timezone issues
      const date = new Date(Date.UTC(2024, 0, 15, 12, 0, 0));
      const formatted = formatDate(date, {}, "en-US");

      expect(formatted).toContain("January");
      expect(formatted).toContain("2024");
    });
  });

  describe("formatRelativeTime", () => {
    it("formats relative time", () => {
      const now = new Date();
      const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);

      const relative = formatRelativeTime(yesterday, "en-US");
      expect(relative).toContain("yesterday");
    });
  });
});
