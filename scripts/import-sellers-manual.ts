import * as fs from "fs";
import * as path from "path";

// sample-sellers.json 파일 읽기
const jsonPath = path.join(process.cwd(), "sample-sellers.json");
const sellersData = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

console.log("📋 Firebase Console에서 수동으로 추가할 수 있는 형식으로 변환 중...\n");

// 각 문서를 Firebase Console 형식으로 출력
const sellerEntries = Object.entries(sellersData);

console.log("=".repeat(80));
console.log("Firebase Console에서 다음 단계를 따라주세요:\n");
console.log("1. https://console.firebase.google.com/project/catchpac/firestore/data 접속");
console.log("2. 'users' 컬렉션 선택 (없으면 생성)");
console.log("3. 아래 각 문서를 추가하세요:\n");
console.log("=".repeat(80));

sellerEntries.forEach(([docId, sellerData], index) => {
  const seller = sellerData as any;
  console.log(`\n📄 문서 ${index + 1}/${sellerEntries.length}: ${docId}`);
  console.log("-".repeat(80));
  console.log("문서 ID:", docId);
  console.log("\n필드 및 값:");
  console.log(JSON.stringify(seller, null, 2));
  console.log("-".repeat(80));
});

console.log(`\n✨ 총 ${sellerEntries.length}개의 문서를 추가해야 합니다.`);
console.log("\n💡 팁:");
console.log("   - Firebase Console에서 '문서 추가' 버튼 클릭");
console.log("   - 문서 ID 입력: 위에 표시된 문서 ID 사용");
console.log("   - 각 필드를 개별적으로 추가하거나");
console.log("   - JSON 형식으로 복사-붙여넣기 (Firebase Console이 지원하는 경우)");
