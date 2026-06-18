/**
 * Happy Horse 1.0 Video Generation API Service
 * Integrates with FAL.AI for real video generation
 */

export interface VideoGenerationRequest {
  prompt?: string;
  imageUri?: string;
  duration?: number;
  aspectRatio?: "16:9" | "9:16" | "1:1" | "4:3" | "3:4";
  resolution?: "720p" | "1080p";
}

export interface VideoGenerationResponse {
  videoUrl: string;
  duration: number;
  resolution: string;
  aspectRatio: string;
  generatedAt: number;
}

const API_KEY = process.env.FAL_API_TOKEN || "";
const API_BASE_URL = "https://fal.run";

/**
 * Generate video from text using Happy Horse 1.0
 */
export async function generateTextToVideo(
  request: VideoGenerationRequest
): Promise<VideoGenerationResponse> {
  try {
    if (!API_KEY) {
      throw new Error("FAL_API_TOKEN not configured");
    }

    const response = await fetch(`${API_BASE_URL}/alibaba/happy-horse/text-to-video`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        prompt: request.prompt,
        aspect_ratio: request.aspectRatio || "16:9",
        resolution: request.resolution || "1080p",
        duration: request.duration || 5,
      }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const result = await response.json();

    return {
      videoUrl: result.video?.url || result.url || "",
      duration: request.duration || 5,
      resolution: request.resolution || "1080p",
      aspectRatio: request.aspectRatio || "16:9",
      generatedAt: Date.now(),
    };
  } catch (error) {
    console.error("Error generating text-to-video:", error);
    throw error;
  }
}

/**
 * Generate video from image using Happy Horse 1.0
 */
export async function generateImageToVideo(
  request: VideoGenerationRequest
): Promise<VideoGenerationResponse> {
  try {
    if (!API_KEY) {
      throw new Error("FAL_API_TOKEN not configured");
    }

    if (!request.imageUri) {
      throw new Error("Image URI is required for image-to-video generation");
    }

    const response = await fetch(`${API_BASE_URL}/alibaba/happy-horse/image-to-video`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        image_url: request.imageUri,
        aspect_ratio: request.aspectRatio || "16:9",
        resolution: request.resolution || "1080p",
        duration: request.duration || 5,
      }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const result = await response.json();

    return {
      videoUrl: result.video?.url || result.url || "",
      duration: request.duration || 5,
      resolution: request.resolution || "1080p",
      aspectRatio: request.aspectRatio || "16:9",
      generatedAt: Date.now(),
    };
  } catch (error) {
    console.error("Error generating image-to-video:", error);
    throw error;
  }
}

/**
 * Check if API is configured
 */
export function isApiConfigured(): boolean {
  return !!API_KEY;
}
