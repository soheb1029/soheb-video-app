import { describe, it, expect } from "vitest";

describe("FAL API Token Validation", () => {
  it("should have FAL_API_TOKEN environment variable set", () => {
    const token = process.env.FAL_API_TOKEN;
    expect(token).toBeDefined();
    expect(token).toHaveLength(43); // FAL tokens are 43 characters
    expect(token).toMatch(/^[a-zA-Z0-9_-]+$/); // Valid token format
  });

  it("should validate token format", () => {
    const token = process.env.FAL_API_TOKEN;
    // FAL tokens start with specific prefixes
    expect(token).toBeTruthy();
    // Check if it's a valid FAL token format (43 chars)
    expect(token).toMatch(/^[a-zA-Z0-9_-]{43}$/);
  });
});
