import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import * as fs from "fs";
import * as path from "path";
import dotenv from "dotenv";
import { GoogleAuth } from "google-auth-library";

// Load environment variables
dotenv.config({ path: path.join(process.cwd(), ".env.local") });

// 이미지 생성 설정
const IMAGE_CONFIG = [
  {
    name: "logo",
    filename: "logo.svg",
    size: "200x50px",
    prompt: "Modern, minimalist logo design for 'Catchpac' - a B2B industrial parts quotation platform. Red (#DC2626) and white color scheme. Text-based logo with clean sans-serif typography. Optional: subtle icon of connected gears or quotation marks. Professional, tech startup feel. White background, vector style.",
    type: "svg" as const,
  },
  {
    name: "hero-desktop",
    filename: "hero-desktop.jpg",
    size: "1920x800px",
    prompt: "Professional industrial manufacturing scene, modern Korean factory with automation equipment. Clean, bright lighting. Servo motors, cylinders, and industrial parts visible in background. 1920x800px, wide horizontal format. Modern, professional photography style. Red accent colors (#DC2626) subtly integrated. Optimistic, forward-looking atmosphere. High quality commercial photography.",
    type: "jpg" as const,
  },
  {
    name: "process-1",
    filename: "process-1-register.svg",
    size: "400x400px",
    prompt: "Flat design illustration, isometric 3D style. Person filling out digital form on tablet/computer. Industrial parts (servo motor, cylinder) visible on screen. Clean, modern office setting. Red (#DC2626) accent colors. 400x400px, square format. Minimalist, professional style. '부품 정보 등록' concept.",
    type: "svg" as const,
  },
  {
    name: "process-2",
    filename: "process-2-notify.svg",
    size: "400x400px",
    prompt: "Flat design illustration, isometric 3D style. Multiple notification icons and messages floating. Connection lines between buyer and seller. Industrial parts in background. Red (#DC2626) accent colors. 400x400px, square format. Modern, tech-forward style. '업체에서 연락' concept.",
    type: "svg" as const,
  },
  {
    name: "process-3",
    filename: "process-3-compare.svg",
    size: "400x400px",
    prompt: "Flat design illustration, isometric 3D style. Comparison chart or table with checkmark. Person selecting best option. Price tags and delivery dates visible. Red (#DC2626) accent colors. 400x400px, square format. Clean, decision-making theme. '비교 후 선택' concept.",
    type: "svg" as const,
  },
  {
    name: "badge-premium",
    filename: "badge-premium.svg",
    size: "100x100px",
    prompt: "Premium badge design, gold/red gradient. Star or crown icon in center. '프리미엄' text in Korean. Modern, elegant design. 100x100px, square format. Vector style, clean edges.",
    type: "svg" as const,
  },
  {
    name: "category-servo-motor",
    filename: "category-servo-motor.jpg",
    size: "300x200px",
    prompt: "Professional product photography of industrial servo motor. White background, studio lighting. Mitsubishi or similar brand style. Clean, detailed, commercial product shot. 300x200px, horizontal format. High quality, sharp focus.",
    type: "jpg" as const,
  },
  {
    name: "category-cylinder",
    filename: "category-cylinder.jpg",
    size: "300x200px",
    prompt: "Professional product photography of pneumatic cylinder. White background, studio lighting. SMC or similar brand style. Clean, detailed, commercial product shot. 300x200px, horizontal format.",
    type: "jpg" as const,
  },
  {
    name: "category-motor",
    filename: "category-motor.jpg",
    size: "300x200px",
    prompt: "Professional product photography of industrial AC/DC motor. White background, studio lighting. Clean, detailed, commercial product shot. 300x200px, horizontal format.",
    type: "jpg" as const,
  },
  {
    name: "category-bearing",
    filename: "category-bearing.jpg",
    size: "300x200px",
    prompt: "Professional product photography of ball bearing. White background, studio lighting. NSK or similar brand style. Clean, detailed, commercial product shot. 300x200px, horizontal format.",
    type: "jpg" as const,
  },
  {
    name: "category-lm-guide",
    filename: "category-lm-guide.jpg",
    size: "300x200px",
    prompt: "Professional product photography of linear motion guide (LM guide). White background, studio lighting. THK or similar brand style. Clean, detailed, commercial product shot. 300x200px, horizontal format.",
    type: "jpg" as const,
  },
  {
    name: "category-sensor",
    filename: "category-sensor.jpg",
    size: "300x200px",
    prompt: "Professional product photography of industrial sensor. White background, studio lighting. Omron or similar brand style. Clean, detailed, commercial product shot. 300x200px, horizontal format.",
    type: "jpg" as const,
  },
  {
    name: "category-plc",
    filename: "category-plc.jpg",
    size: "300x200px",
    prompt: "Professional product photography of Programmable Logic Controller (PLC). White background, studio lighting. Siemens or similar brand style. Clean, detailed, commercial product shot. 300x200px, horizontal format.",
    type: "jpg" as const,
  },
  {
    name: "category-inverter",
    filename: "category-inverter.jpg",
    size: "300x200px",
    prompt: "Professional product photography of industrial inverter. White background, studio lighting. Clean, detailed, commercial product shot. 300x200px, horizontal format.",
    type: "jpg" as const,
  },
  {
    name: "category-other",
    filename: "category-other.jpg",
    size: "300x200px",
    prompt: "Collection of various industrial parts and components. White background, studio lighting. Clean, organized arrangement. 300x200px, horizontal format.",
    type: "jpg" as const,
  },
  {
    name: "seller-placeholder",
    filename: "seller-placeholder.svg",
    size: "200x200px",
    prompt: "Simple, clean company logo placeholder. Building or factory icon in center. Light gray background (#F3F4F6). Minimalist design. 200x200px, square format. Professional, neutral style.",
    type: "svg" as const,
  },
  {
    name: "og-image",
    filename: "og-image.jpg",
    size: "1200x630px",
    prompt: "Catchpac platform social media preview image. Logo centered, industrial parts in background. '제조업 구매품 견적 비교 플랫폼' text. Red (#DC2626) and white color scheme. 1200x630px, Facebook/LinkedIn optimized format. Professional, clean design.",
    type: "jpg" as const,
  },
];

// Google Imagen API로 이미지 생성 (Vertex AI)
async function generateImageWithImagen(
  prompt: string,
  size: string
): Promise<Buffer | null> {
  try {
    const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID;
    if (!projectId) {
      console.log("   GOOGLE_CLOUD_PROJECT_ID not set");
      return null;
    }

    // 크기 매핑 (Imagen 3.0은 aspect ratio를 문자열로 받음)
    const sizeMap: Record<string, string> = {
      "1920x800px": "16:9",  // wide
      "1200x630px": "16:9",  // wide
      "300x200px": "4:3",    // horizontal
      "400x400px": "1:1",    // square
      "200x200px": "1:1",    // square
      "100x100px": "1:1",    // square
    };

    const aspectRatio = sizeMap[size] || "1:1";
    const location = "us-central1";

    // Google Auth 설정
    const authOptions: any = {
      scopes: ["https://www.googleapis.com/auth/cloud-platform"],
    };

    // 서비스 계정 키 파일이 있으면 사용
    const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    if (serviceAccountPath && fs.existsSync(serviceAccountPath)) {
      authOptions.keyFile = serviceAccountPath;
    }

    const auth = new GoogleAuth(authOptions);

    let client;
    try {
      client = await auth.getClient();
    } catch (authError: any) {
      console.log(`   Authentication failed: ${authError.message}`);
      console.log(`   💡 To use Vertex AI Imagen, you need to:`);
      console.log(`      1. Create a service account key in Google Cloud Console`);
      console.log(`      2. Set GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json`);
      console.log(`      OR run: gcloud auth application-default login`);
      return null;
    }

    const accessToken = await client.getAccessToken();

    if (!accessToken || !accessToken.token) {
      console.log("   Failed to get access token");
      return null;
    }

    // Vertex AI Imagen API 호출 (최신 모델 사용)
    // imagegeneration@005, @006은 deprecated, 최신 모델 사용
    // 최신 모델: imagen-3.0-generate-001 또는 imagegeneration@007
    const modelName = "imagen-3.0-generate-001";
    const url = `https://${location}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${location}/publishers/google/models/${modelName}:predict`;

    // Imagen 3.0 API 요청 형식
    const response = await axios.post(
      url,
      {
        instances: [
          {
            prompt: prompt,
          },
        ],
        parameters: {
          sampleCount: 1,
          aspectRatio: aspectRatio,
          safetyFilterLevel: "block_some",
          personGeneration: "allow_all",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken.token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.predictions?.[0]?.bytesBase64Encoded) {
      const base64Image = response.data.predictions[0].bytesBase64Encoded;
      return Buffer.from(base64Image, "base64");
    }

    return null;
  } catch (error: any) {
    const errorMsg = error.response?.data?.error?.message || error.message;
    console.error(`   Imagen API error: ${errorMsg}`);
    
    if (errorMsg.includes("credentials") || errorMsg.includes("authentication")) {
      console.log(`   💡 Authentication required. Options:`);
      console.log(`      1. Set GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account-key.json`);
      console.log(`      2. Install gcloud CLI and run: gcloud auth application-default login`);
    }
    
    return null;
  }
}

// 이미지 생성 함수
async function generateImage(
  config: typeof IMAGE_CONFIG[0],
  geminiApiKey: string
): Promise<Buffer | null> {
  let optimized = config.prompt;
  
  try {
    // Gemini API로 프롬프트 최적화 시도
    try {
      const genAI = new GoogleGenerativeAI(geminiApiKey);
      // 사용 가능한 모델 시도
      const models = ["gemini-1.5-pro", "gemini-pro", "gemini-1.5-flash"];
      let model = null;
      
      for (const modelName of models) {
        try {
          model = genAI.getGenerativeModel({ model: modelName });
          break;
        } catch (e) {
          continue;
        }
      }
      
      if (model) {
        const optimizationPrompt = `Optimize this image generation prompt for DALL-E 3. Make it more specific, detailed, and effective. Return ONLY the optimized prompt, nothing else. Do not include explanations or markdown:\n\n${config.prompt}\n\nSize: ${config.size}\nFormat: ${config.type}`;
        const result = await model.generateContent(optimizationPrompt);
        optimized = result.response.text().trim();
        console.log(`\n📝 Optimized prompt for ${config.name}:`);
        console.log(optimized);
      }
    } catch (error) {
      // Gemini API 실패 시 원본 프롬프트 사용
      console.log(`\n📝 Using original prompt for ${config.name} (Gemini optimization failed):`);
      console.log(optimized);
    }

    // Imagen API로 이미지 생성 시도
    console.log(`🎨 Attempting image generation with Vertex AI Imagen...`);
    
    const imageBuffer = await generateImageWithImagen(optimized, config.size);
    if (imageBuffer) {
      console.log(`✅ Image generated successfully!`);
      return imageBuffer;
    }

    // Imagen이 실패하면 프롬프트만 저장
    // 사용자가 수동으로 이미지 생성 서비스에 사용할 수 있도록
    console.log(`💡 Saving optimized prompt for manual generation.`);
    console.log(`   You can use this prompt with:`);
    console.log(`   - DALL-E 3: https://chat.openai.com`);
    console.log(`   - Midjourney: Discord`);
    console.log(`   - Or other image generation services`);
    return null;
  } catch (error) {
    console.error(`Error generating ${config.name}:`, error);
    return null;
  }
}

// 메인 함수
async function main() {
  const geminiApiKey = process.env.GEMINI_API_KEY;

  if (!geminiApiKey) {
    console.error("❌ GEMINI_API_KEY environment variable is not set!");
    console.log("\nPlease set it in .env.local:");
    console.log("GEMINI_API_KEY=your_api_key_here");
    console.log("\nOptional (for automatic image generation):");
    console.log("OPENAI_API_KEY=your_openai_key_here");
    process.exit(1);
  }

  // public/images 디렉토리 생성
  const imagesDir = path.join(process.cwd(), "public", "images");
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  console.log("🎨 Starting image generation...\n");
  console.log(`📁 Output directory: ${imagesDir}\n`);

  // 각 이미지 생성
  for (const config of IMAGE_CONFIG) {
    console.log(`\n🖼️  Processing ${config.name} (${config.filename})...`);

    const imageBuffer = await generateImage(config, geminiApiKey);

    if (imageBuffer) {
      const filePath = path.join(imagesDir, config.filename);
      fs.writeFileSync(filePath, imageBuffer);
      console.log(`✅ Saved: ${filePath}`);
    } else {
      // 프롬프트만 저장
      const promptPath = path.join(imagesDir, `${config.name}-prompt.txt`);
      fs.writeFileSync(promptPath, config.prompt);
      console.log(`📄 Prompt saved: ${promptPath}`);
      console.log(`   (Use this prompt with DALL-E, Midjourney, or Stable Diffusion)`);
    }

    // API rate limit 방지
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  console.log("\n✨ Image generation process completed!");
  console.log("\n📋 Next steps:");
  console.log("1. Check public/images/ for generated images");
  console.log("2. For images with prompts only, use the saved prompts with an image generation service");
  console.log("3. Run 'npm run check-images' to verify all images are in place");
}

main().catch(console.error);
