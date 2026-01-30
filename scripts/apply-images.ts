import * as fs from "fs";
import * as path from "path";

// 이미지 파일 체크 및 코드 적용
const IMAGE_FILES = [
  "logo.svg",
  "hero-desktop.jpg",
  "process-1-register.svg",
  "process-2-notify.svg",
  "process-3-compare.svg",
  "badge-premium.svg",
  "category-servo-motor.jpg",
  "category-cylinder.jpg",
  "category-motor.jpg",
  "category-bearing.jpg",
  "category-lm-guide.jpg",
  "category-sensor.jpg",
  "category-plc.jpg",
  "category-inverter.jpg",
  "category-other.jpg",
  "seller-placeholder.svg",
  "og-image.jpg",
];

function checkImages() {
  const imagesDir = path.join(process.cwd(), "public", "images");
  const missing: string[] = [];
  const existing: string[] = [];

  console.log("🔍 Checking for images...\n");

  IMAGE_FILES.forEach((file) => {
    const filePath = path.join(imagesDir, file);
    if (fs.existsSync(filePath)) {
      existing.push(file);
      console.log(`✅ ${file}`);
    } else {
      missing.push(file);
      console.log(`❌ ${file} (missing)`);
    }
  });

  console.log(`\n📊 Summary: ${existing.length}/${IMAGE_FILES.length} images found`);

  if (missing.length > 0) {
    console.log(`\n⚠️  Missing images (${missing.length}):`);
    missing.forEach((file) => console.log(`   - ${file}`));
  }

  return { existing, missing };
}

// 메인 함수
function main() {
  const { existing, missing } = checkImages();

  if (existing.length === 0) {
    console.log("\n❌ No images found in public/images/");
    console.log("Please generate images first using: npm run generate-images");
    process.exit(1);
  }

  console.log("\n✨ Images are ready to be used in the codebase!");
  console.log("\n💡 Tip: The code will automatically use images from public/images/");
}

main();
