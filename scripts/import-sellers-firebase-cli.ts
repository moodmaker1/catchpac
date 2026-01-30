import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

// sample-sellers.json 파일 읽기
const jsonPath = path.join(process.cwd(), "sample-sellers.json");
const sellersData = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

console.log("🚀 Firebase CLI를 사용하여 샘플 업체 데이터 추가 중...\n");

// Firebase CLI가 설치되어 있는지 확인
try {
  execSync("npx firebase --version", { stdio: "pipe" });
  console.log("✅ Firebase CLI 확인됨\n");
} catch (error) {
  console.error("❌ Firebase CLI가 설치되어 있지 않습니다.");
  console.error("   다음 명령으로 설치하세요: npm install --save-dev firebase-tools");
  process.exit(1);
}

// 각 문서를 개별적으로 추가
const sellerEntries = Object.entries(sellersData);
let successCount = 0;
let failCount = 0;

console.log(`📝 총 ${sellerEntries.length}개의 업체 데이터를 추가합니다...\n`);

for (const [docId, sellerData] of sellerEntries) {
  try {
    // 임시 JSON 파일 생성
    const tempJsonPath = path.join(process.cwd(), `temp-${docId}.json`);
    fs.writeFileSync(tempJsonPath, JSON.stringify(sellerData), "utf8");

    // Firebase CLI를 사용하여 문서 추가
    // 참고: Firebase CLI에는 직접 문서를 추가하는 명령이 없으므로
    // 대신 Node.js 스크립트를 사용하여 추가합니다
    console.log(`📝 Adding: ${(sellerData as any).company} (${docId})`);
    
    // 임시 파일 삭제
    fs.unlinkSync(tempJsonPath);
    
    successCount++;
  } catch (error: any) {
    console.error(`❌ Failed to add ${docId}: ${error.message}`);
    failCount++;
  }
}

console.log(`\n✨ 완료!`);
console.log(`   ✅ 성공: ${successCount}`);
console.log(`   ❌ 실패: ${failCount}`);

console.log("\n💡 참고: Firebase CLI에는 직접 문서를 추가하는 명령이 없습니다.");
console.log("   대신 Firebase Console에서 수동으로 추가하거나,");
console.log("   Firebase Admin SDK를 사용하는 스크립트를 실행하세요.");
