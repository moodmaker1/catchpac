import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as fs from "fs";
import * as path from "path";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: path.join(process.cwd(), ".env.local") });

// Initialize Firebase Admin
const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || 
  path.join(process.cwd(), "service-account-key.json");

if (!fs.existsSync(serviceAccountPath)) {
  console.error("❌ Service account key file not found!");
  console.log("Please set GOOGLE_APPLICATION_CREDENTIALS or place service-account-key.json in the project root");
  process.exit(1);
}

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

if (!getApps().length) {
  try {
    initializeApp({
      credential: cert(serviceAccount),
      projectId: serviceAccount.project_id,
    });
    console.log("✅ Firebase Admin initialized");
  } catch (error: any) {
    console.error("❌ Firebase Admin initialization failed:", error.message);
    process.exit(1);
  }
}

const db = getFirestore();

async function setAdmin(userEmail: string) {
  try {
    const usersRef = db.collection("users");
    const snapshot = await usersRef.where("email", "==", userEmail).get();
    
    if (snapshot.empty) {
      console.error(`❌ 사용자를 찾을 수 없습니다: ${userEmail}`);
      console.log("\n💡 사용자 이메일을 확인해주세요.");
      return;
    }

    snapshot.forEach(async (doc) => {
      await doc.ref.update({ isAdmin: true });
      const userData = doc.data();
      console.log(`✅ ${userEmail}을(를) 관리자로 설정했습니다.`);
      console.log(`   이름: ${userData.name}`);
      console.log(`   회사: ${userData.company}`);
      console.log(`   유형: ${userData.userType}`);
    });
  } catch (error: any) {
    console.error("❌ 오류 발생:", error.message);
    process.exit(1);
  }
}

// 사용법: npm run set-admin -- your-email@example.com
const email = process.argv[2];
if (!email) {
  console.error("❌ 이메일을 입력해주세요");
  console.log("\n사용법:");
  console.log("  npm run set-admin -- your-email@example.com");
  console.log("\n또는:");
  console.log("  npx tsx scripts/set-admin.ts your-email@example.com");
  process.exit(1);
}

setAdmin(email).then(() => {
  console.log("\n✅ 완료!");
  process.exit(0);
}).catch((error) => {
  console.error("❌ 치명적 오류:", error);
  process.exit(1);
});
