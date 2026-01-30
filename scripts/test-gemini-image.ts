import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env.local") });

async function testGeminiImageGeneration() {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    console.error("GEMINI_API_KEY not found");
    return;
  }

  console.log("Testing Gemini API for image generation...\n");

  const genAI = new GoogleGenerativeAI(apiKey);
  
  // 사용 가능한 모델들 시도
  const models = [
    "gemini-1.5-pro",
    "gemini-1.5-flash",
    "gemini-pro",
    "gemini-1.0-pro",
  ];

  for (const modelName of models) {
    try {
      console.log(`Trying model: ${modelName}...`);
      const model = genAI.getGenerativeModel({ model: modelName });
      
      // 간단한 텍스트 생성 테스트
      const result = await model.generateContent("Say hello");
      const response = result.response;
      console.log(`✅ ${modelName} works! Response: ${response.text().substring(0, 50)}...`);
      
      // 이미지 생성 가능 여부 확인
      // 참고: Gemini는 직접 이미지 생성은 안 되지만, 프롬프트 최적화는 가능
      console.log(`   Note: Gemini can optimize prompts but doesn't generate images directly.`);
      console.log(`   For image generation, use Google's Imagen API via Vertex AI.\n`);
      
    } catch (error: any) {
      console.log(`❌ ${modelName} failed: ${error.message}\n`);
    }
  }

  console.log("\n💡 Recommendation:");
  console.log("1. Use Gemini to optimize prompts (current implementation)");
  console.log("2. Use optimized prompts with DALL-E, Midjourney, or Stable Diffusion");
  console.log("3. Or set up Vertex AI Imagen API for automatic generation");
}

testGeminiImageGeneration().catch(console.error);
