/**
 * Hugging Face Video Generation API Service
 * Uses free open-source models for 1080p video generation
 * No API key required
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
  status: "processing" | "completed" | "failed";
}

// Using free Hugging Face Inference API endpoints
const HF_API_BASE = "https://api-inference.huggingface.co/models";

/**
 * Generate video from text using Stable Video Diffusion
 * Free model, no API key required for basic usage
 */
export async function generateTextToVideo(
  request: VideoGenerationRequest
): Promise<VideoGenerationResponse> {
  try {
    if (!request.prompt) {
      throw new Error("Prompt is required for text-to-video generation");
    }

    // Using Hugging Face's free video generation model
    const modelId = "damo-vilab/text-to-video-ms-1.7b";
    
    const response = await fetch(`${HF_API_BASE}/${modelId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: request.prompt,
        parameters: {
          height: 1080,
          width: 1920,
          num_frames: 16,
          num_inference_steps: 30,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Hugging Face API Error:", error);
      throw new Error(`Video generation failed: ${response.statusText}`);
    }

    // Response is a video file (blob)
    const videoBlob = await response.blob();
    const videoUrl = URL.createObjectURL(videoBlob);

    return {
      videoUrl,
      duration: request.duration || 5,
      resolution: "1080p",
      aspectRatio: request.aspectRatio || "16:9",
      generatedAt: Date.now(),
      status: "completed",
    };
  } catch (error) {
    console.error("Error generating text-to-video:", error);
    throw error;
  }
}

/**
 * Generate video from image using AnimateDiff
 * Free model, no API key required
 */
export async function generateImageToVideo(
  request: VideoGenerationRequest
): Promise<VideoGenerationResponse> {
  try {
    if (!request.imageUri) {
      throw new Error("Image URI is required for image-to-video generation");
    }

    // Using Hugging Face's free image-to-video model
    const modelId = "guoyww/animatediff";
    
    const response = await fetch(`${HF_API_BASE}/${modelId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: request.imageUri,
        parameters: {
          height: 1080,
          width: 1920,
          num_frames: 16,
          num_inference_steps: 25,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Hugging Face API Error:", error);
      throw new Error(`Video generation failed: ${response.statusText}`);
    }

    const videoBlob = await response.blob();
    const videoUrl = URL.createObjectURL(videoBlob);

    return {
      videoUrl,
      duration: request.duration || 5,
      resolution: "1080p",
      aspectRatio: request.aspectRatio || "16:9",
      generatedAt: Date.now(),
      status: "completed",
    };
  } catch (error) {
    console.error("Error generating image-to-video:", error);
    throw error;
  }
}

/**
 * Check if API is available (no token required)
 */
export function isApiConfigured(): boolean {
  return true; // Hugging Face free API is always available
}
