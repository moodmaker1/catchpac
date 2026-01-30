import * as fs from "fs";
import * as path from "path";

// 샘플 업체 데이터 (create-sample-sellers.ts와 동일)
const sampleSellers = [
  {
    email: "contact@seoulparts.co.kr",
    name: "김철수",
    company: "서울부품공급(주)",
    userType: "SELLER",
    phone: "02-1234-5678",
    description: "서울 지역 산업용 부품 전문 유통업체입니다. 서보모터, 실린더, 센서 등 다양한 부품을 취급하며 빠른 납기와 합리적인 가격을 제공합니다.",
    categories: ["서보모터", "실린더", "센서"],
    region: "서울",
    isPremium: true,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "info@gyeonggi-automation.com",
    name: "이영희",
    company: "경기자동화부품(주)",
    userType: "SELLER",
    phone: "031-2345-6789",
    description: "경기 지역 자동화 부품 전문 유통사입니다. PLC, 인버터, 모터 등 자동화 시스템에 필요한 모든 부품을 공급합니다.",
    categories: ["PLC", "인버터", "AC/DC 모터"],
    region: "경기",
    isPremium: true,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "sales@incheon-industrial.com",
    name: "박민수",
    company: "인천산업부품(주)",
    userType: "SELLER",
    phone: "032-3456-7890",
    description: "인천 지역 산업용 부품 전문 유통업체입니다. 베어링, LM가이드, 기타 부품을 취급하며 전국 배송이 가능합니다.",
    categories: ["베어링", "LM 가이드", "기타"],
    region: "인천",
    isPremium: false,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "contact@busan-machinery.co.kr",
    name: "최지영",
    company: "부산기계부품(주)",
    userType: "SELLER",
    phone: "051-4567-8901",
    description: "부산 지역 기계 부품 전문 유통사입니다. 서보모터, 실린더, 센서 등 다양한 부품을 취급합니다.",
    categories: ["서보모터", "실린더", "센서"],
    region: "부산",
    isPremium: false,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "info@daegu-parts.com",
    name: "정대현",
    company: "대구부품공급(주)",
    userType: "SELLER",
    phone: "053-5678-9012",
    description: "대구 지역 산업용 부품 전문 유통업체입니다. PLC, 인버터, 모터 등 자동화 부품을 전문으로 취급합니다.",
    categories: ["PLC", "인버터", "AC/DC 모터"],
    region: "대구",
    isPremium: false,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "sales@daejeon-automation.co.kr",
    name: "강수진",
    company: "대전자동화부품(주)",
    userType: "SELLER",
    phone: "042-6789-0123",
    description: "대전 지역 자동화 부품 전문 유통사입니다. 베어링, LM가이드, 센서 등 정밀 부품을 취급합니다.",
    categories: ["베어링", "LM 가이드", "센서"],
    region: "대전",
    isPremium: false,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "contact@gwangju-industrial.com",
    name: "윤태호",
    company: "광주산업부품(주)",
    userType: "SELLER",
    phone: "062-7890-1234",
    description: "광주 지역 산업용 부품 전문 유통업체입니다. 서보모터, 실린더, 기타 부품을 취급하며 빠른 납기를 자랑합니다.",
    categories: ["서보모터", "실린더", "기타"],
    region: "광주",
    isPremium: false,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "info@ulsan-parts.co.kr",
    name: "임동욱",
    company: "울산부품공급(주)",
    userType: "SELLER",
    phone: "052-8901-2345",
    description: "울산 지역 부품 전문 유통사입니다. PLC, 인버터, 모터 등 자동화 시스템 부품을 전문으로 취급합니다.",
    categories: ["PLC", "인버터", "AC/DC 모터"],
    region: "울산",
    isPremium: false,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "sales@sejong-automation.com",
    name: "한미라",
    company: "세종자동화부품(주)",
    userType: "SELLER",
    phone: "044-9012-3456",
    description: "세종 지역 자동화 부품 전문 유통업체입니다. 베어링, LM가이드, 센서 등 정밀 부품을 취급합니다.",
    categories: ["베어링", "LM 가이드", "센서"],
    region: "세종",
    isPremium: false,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "contact@gangwon-industrial.co.kr",
    name: "송재현",
    company: "강원산업부품(주)",
    userType: "SELLER",
    phone: "033-0123-4567",
    description: "강원 지역 산업용 부품 전문 유통사입니다. 서보모터, 실린더, 기타 부품을 취급하며 전국 배송이 가능합니다.",
    categories: ["서보모터", "실린더", "기타"],
    region: "강원",
    isPremium: false,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "info@chungbuk-parts.com",
    name: "오세영",
    company: "충북부품공급(주)",
    userType: "SELLER",
    phone: "043-1234-5678",
    description: "충북 지역 부품 전문 유통업체입니다. PLC, 인버터, 모터 등 자동화 부품을 전문으로 취급합니다.",
    categories: ["PLC", "인버터", "AC/DC 모터"],
    region: "충북",
    isPremium: false,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "sales@chungnam-automation.co.kr",
    name: "류지혜",
    company: "충남자동화부품(주)",
    userType: "SELLER",
    phone: "041-2345-6789",
    description: "충남 지역 자동화 부품 전문 유통사입니다. 베어링, LM가이드, 센서 등 정밀 부품을 취급합니다.",
    categories: ["베어링", "LM 가이드", "센서"],
    region: "충남",
    isPremium: false,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "contact@jeonbuk-industrial.com",
    name: "배성민",
    company: "전북산업부품(주)",
    userType: "SELLER",
    phone: "063-3456-7890",
    description: "전북 지역 산업용 부품 전문 유통업체입니다. 서보모터, 실린더, 기타 부품을 취급하며 빠른 납기를 제공합니다.",
    categories: ["서보모터", "실린더", "기타"],
    region: "전북",
    isPremium: false,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "info@jeonnam-parts.co.kr",
    name: "신동욱",
    company: "전남부품공급(주)",
    userType: "SELLER",
    phone: "061-4567-8901",
    description: "전남 지역 부품 전문 유통사입니다. PLC, 인버터, 모터 등 자동화 시스템 부품을 전문으로 취급합니다.",
    categories: ["PLC", "인버터", "AC/DC 모터"],
    region: "전남",
    isPremium: false,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "sales@gyeongbuk-automation.com",
    name: "조은지",
    company: "경북자동화부품(주)",
    userType: "SELLER",
    phone: "054-5678-9012",
    description: "경북 지역 자동화 부품 전문 유통업체입니다. 베어링, LM가이드, 센서 등 정밀 부품을 취급합니다.",
    categories: ["베어링", "LM 가이드", "센서"],
    region: "경북",
    isPremium: false,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "contact@gyeongnam-industrial.co.kr",
    name: "허준호",
    company: "경남산업부품(주)",
    userType: "SELLER",
    phone: "055-6789-0123",
    description: "경남 지역 산업용 부품 전문 유통사입니다. 서보모터, 실린더, 기타 부품을 취급하며 전국 배송이 가능합니다.",
    categories: ["서보모터", "실린더", "기타"],
    region: "경남",
    isPremium: false,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "info@jeju-parts.com",
    name: "고민수",
    company: "제주부품공급(주)",
    userType: "SELLER",
    phone: "064-7890-1234",
    description: "제주 지역 부품 전문 유통업체입니다. PLC, 인버터, 모터 등 자동화 부품을 전문으로 취급합니다.",
    categories: ["PLC", "인버터", "AC/DC 모터"],
    region: "제주",
    isPremium: false,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "sales@national-automation.co.kr",
    name: "문혜진",
    company: "전국자동화부품(주)",
    userType: "SELLER",
    phone: "02-8901-2345",
    description: "전국 배송이 가능한 자동화 부품 전문 유통사입니다. 베어링, LM가이드, 센서 등 모든 자동화 부품을 취급합니다.",
    categories: ["베어링", "LM 가이드", "센서"],
    region: "서울",
    isPremium: true,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "contact@premium-parts.com",
    name: "양성호",
    company: "프리미엄부품공급(주)",
    userType: "SELLER",
    phone: "02-9012-3456",
    description: "프리미엄 품질의 산업용 부품을 전문으로 취급하는 유통업체입니다. 서보모터, 실린더, 센서 등 고품질 부품을 제공합니다.",
    categories: ["서보모터", "실린더", "센서"],
    region: "서울",
    isPremium: true,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
  {
    email: "info@tech-automation.co.kr",
    name: "구미영",
    company: "테크자동화부품(주)",
    userType: "SELLER",
    phone: "031-0123-4567",
    description: "최신 기술의 자동화 부품을 전문으로 취급하는 유통사입니다. PLC, 인버터, 모터 등 첨단 자동화 시스템 부품을 제공합니다.",
    categories: ["PLC", "인버터", "AC/DC 모터"],
    region: "경기",
    isPremium: true,
    createdAt: { _seconds: Math.floor(Date.now() / 1000), _nanoseconds: 0 },
    profileComplete: true,
  },
];

// JSON 파일 생성
function generateJSON() {
  console.log("📝 Generating JSON file for Firebase Console import...\n");

  const output: Record<string, any> = {};
  
  sampleSellers.forEach((seller) => {
    // 문서 ID 생성 (이메일 기반)
    const docId = seller.email.replace(/[@.]/g, "_");
    output[docId] = seller;
  });

  const jsonContent = JSON.stringify(output, null, 2);
  const outputPath = path.join(process.cwd(), "sample-sellers.json");

  fs.writeFileSync(outputPath, jsonContent, "utf8");

  console.log(`✅ JSON file created: ${outputPath}`);
  console.log(`📊 Total sellers: ${sampleSellers.length}`);
  console.log(`   - Premium: ${sampleSellers.filter(s => s.isPremium).length}`);
  console.log(`   - Free: ${sampleSellers.filter(s => !s.isPremium).length}`);
  console.log("\n📋 사용 방법:");
  console.log("   1. Firebase Console 접속:");
  console.log("      → https://console.firebase.google.com/project/catchpac/firestore/data");
  console.log("   2. 'users' 컬렉션 선택");
  console.log("   3. 각 문서를 수동으로 추가하거나");
  console.log("   4. Firebase CLI를 사용하여 import:");
  console.log("      → firebase firestore:import sample-sellers.json --collection users");
  console.log("\n💡 또는 Firebase Console에서 직접 복사-붙여넣기:");
  console.log("   - 각 seller 객체를 개별 문서로 추가");
}

generateJSON();
