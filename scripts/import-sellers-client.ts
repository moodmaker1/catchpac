import * as fs from "fs";
import * as path from "path";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import dotenv from "dotenv";

// 환경 변수 로드
dotenv.config({ path: path.join(process.cwd(), ".env.local") });

// Firebase 초기화
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  console.error("❌ Firebase 환경 변수가 설정되지 않았습니다.");
  console.error("   .env.local 파일에 Firebase 설정을 확인하세요.");
  process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// sample-sellers.json 파일 읽기
const jsonPath = path.join(process.cwd(), "sample-sellers.json");
const sellersData = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

console.log("🚀 클라이언트 SDK를 사용하여 샘플 업체 데이터 추가 중...\n");
console.log("⚠️  참고: 이 스크립트는 보안 규칙을 따릅니다.");
console.log("   users 컬렉션의 create 규칙을 확인하세요.\n");

// 각 문서를 개별적으로 추가
const sellerEntries = Object.entries(sellersData);
let successCount = 0;
let failCount = 0;

async function importSellers() {
  for (const [docId, sellerData] of sellerEntries) {
    try {
      const seller = sellerData as any;
      
      // createdAt을 Timestamp로 변환
      const createdAt = seller.createdAt?._seconds 
        ? Timestamp.fromMillis(seller.createdAt._seconds * 1000)
        : Timestamp.now();
      
      const sellerDoc = {
        ...seller,
        createdAt: createdAt,
      };
      
      console.log(`📝 Adding: ${seller.company} (${docId})`);
      
      // Firestore에 문서 추가
      await setDoc(doc(db, "users", docId), sellerDoc);
      
      console.log(`✅ Created: ${seller.company} (${seller.region})`);
      successCount++;
      
      // API rate limit 방지
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error: any) {
      console.error(`❌ Failed to add ${docId}: ${error.message}`);
      if (error.code === "permission-denied") {
        console.error(`   → 보안 규칙 때문에 거부되었습니다.`);
        console.error(`   → users 컬렉션의 create 규칙을 확인하세요.`);
      }
      failCount++;
    }
  }

  console.log(`\n✨ 완료!`);
  console.log(`   ✅ 성공: ${successCount}`);
  console.log(`   ❌ 실패: ${failCount}`);
  
  if (failCount > 0) {
    console.log("\n💡 실패한 경우:");
    console.log("   1. Firebase Console에서 보안 규칙 확인");
    console.log("   2. 또는 Firebase Console에서 수동으로 추가");
    console.log("      → https://console.firebase.google.com/project/catchpac/firestore/data");
  }
}

importSellers()
  .then(() => {
    console.log("\n✅ Done!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Fatal error:", error);
    process.exit(1);
  });
