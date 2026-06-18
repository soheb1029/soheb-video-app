import { describe, it, expect } from "vitest";

describe("FAL API Token Validation", () => {
  it("should have FAL_API_TOKEN configured", () => {
    const token = process.env.FAL_API_TOKEN;
    expect(token).toBeDefined();
    expect(token?.length).toBeGreaterThan(0);
    expect(token).toMatch(/^r8_/); // FAL tokens start with r8_
  });

  it("should validate token format", () => {
    const token = process.env.FAL_API_TOKEN;
    // FAL tokens are typically 40+ characters
    expect(token?.length).toBeGreaterThanOrEqual(40);
  });

  it("should test Happy Horse API endpoint", async () => {
    const token = process.env.FAL_API_TOKEN;
    
    if (!token) {
      throw new Error("FAL_API_TOKEN not configured");
    }

    try {
      // Test with a simple text-to-video request
      const response = await fetch("https://fal.run/alibaba/happy-horse/text-to-video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          prompt: "test",
          aspect_ratio: "16:9",
          resolution: "720p",
          duration: 1,
        }),
      });

      // We expect either success or a proper error response
      expect(response.status).toBeLessThan(500);
      
      // If it's not a server error, the token is likely valid
      if (response.status >= 400 && response.status < 500) {
        const error = await response.json();
        console.log("API Response:", error);
        // 429 = rate limited (token is valid), 401 = invalid token
        expect(response.status).not.toBe(401);
      }
    } catch (error) {
      console.error("FAL API Test Error:", error);
      throw error;
    }
  });
});
