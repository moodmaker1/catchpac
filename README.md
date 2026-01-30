# Catchpac

**부품 구매 고민의 순간, Catchpac**

제조업 중소기업을 위한 구매품 견적 비교 플랫폼 + 실시간 시세 정보 서비스

## 주요 기능

### 구매자 (중소 제조업체)
- 부품 견적 요청 등록 (품목, 메이커, 품번, 수량, 희망 납기)
- 여러 대리점으로부터 견적 수신
- 가격/납기 기준 견적 비교
- 최적 견적 선택

### 판매자 (대리점/유통사)
- 파트너 업체로 등록 및 프로필 관리
- 열린 견적 요청 목록 조회
- 견적 제출 (단가, 납기, 재고 여부)
- 프리미엄 파트너 혜택 (상단 노출, 우선 알림)

### 시세 정보
- 품목별 평균 단가 표시
- 전주 대비 변동률
- 평균 납기 정보

## 기술 스택

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend/DB**: Firebase (Authentication, Firestore)
- **Deployment**: Vercel

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. Firebase 설정

Firebase Console에서 프로젝트를 생성하고, 아래 환경변수를 `.env.local` 파일에 설정하세요:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. Firestore 보안 규칙 설정 ⚠️ 중요!

**Firebase Console에서 반드시 적용해야 합니다!**

1. [Firebase Console](https://console.firebase.google.com) 접속
2. 프로젝트 선택
3. **Firestore Database** > **Rules** 탭 클릭
4. 아래 규칙을 복사해서 붙여넣기
5. **Publish** 버튼 클릭

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      // 판매자(SELLER) 정보는 공개적으로 읽을 수 있음 (업체 목록 표시용)
      // 개인 정보는 자신만 읽을 수 있음
      allow read: if request.auth != null || 
        (resource != null && resource.data.userType == 'SELLER');
      // 자신의 문서만 생성/수정 가능
      allow create: if request.auth != null && request.auth.uid == userId;
      allow update: if request.auth != null && request.auth.uid == userId;
      allow delete: if request.auth != null && request.auth.uid == userId;
    }
    
    // Quote Requests collection
    match /quoteRequests/{requestId} {
      // 인증된 사용자만 읽을 수 있음
      allow read: if request.auth != null;
      // 구매자만 생성 가능
      allow create: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.userType == 'BUYER';
      // 작성자만 수정 가능
      allow update: if request.auth != null && 
        resource.data.buyerId == request.auth.uid;
      allow delete: if request.auth != null && 
        resource.data.buyerId == request.auth.uid;
    }
    
    // Quote Responses collection
    match /quoteResponses/{responseId} {
      // 시세 정보 표시를 위해 공개적으로 읽을 수 있음 (가격, 납기 정보만)
      // 전체 데이터는 인증된 사용자만
      allow read: if true; // 공개 읽기 허용 (시세 정보 표시용)
      // 판매자만 생성 가능
      allow create: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.userType == 'SELLER';
      // 작성자만 수정 가능
      allow update: if request.auth != null && 
        resource.data.sellerId == request.auth.uid;
      allow delete: if request.auth != null && 
        resource.data.sellerId == request.auth.uid;
    }
  }
}
```

**⚠️ 이 규칙을 적용하지 않으면 "Missing or insufficient permissions" 에러가 발생합니다!**

### 4. Firestore 인덱스 설정

Firebase Console > Firestore > Indexes에서 아래 복합 인덱스를 추가하세요:

**quoteRequests 컬렉션:**
- `buyerId` (Ascending) + `createdAt` (Descending)
- `status` (Ascending) + `createdAt` (Descending)

**quoteResponses 컬렉션:**
- `requestId` (Ascending) + `createdAt` (Descending)
- `sellerId` (Ascending) + `createdAt` (Descending)

**users 컬렉션:**
- `userType` (Ascending) + `profileComplete` (Ascending)

### 5. 이미지 생성 (선택사항)

Gemini API를 사용하여 이미지를 자동 생성할 수 있습니다:

```bash
# .env.local에 추가
GEMINI_API_KEY=your_gemini_api_key
OPENAI_API_KEY=your_openai_api_key  # DALL-E 사용 시

# 이미지 생성 실행
npm run generate-images

# 이미지 확인
npm run check-images
```

### 6. 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인하세요.

## Vercel 배포

1. [Vercel](https://vercel.com)에 GitHub 저장소 연결
2. Environment Variables에 Firebase 설정 추가
3. Deploy!

## 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx           # 메인 페이지 (시세 대시보드)
│   ├── login/             # 로그인
│   ├── register/          # 회원가입
│   ├── complete-profile/  # 프로필 완성 (구글 로그인 후)
│   ├── requests/          # 견적 요청 목록
│   │   ├── new/           # 새 견적 요청
│   │   └── [id]/          # 견적 요청 상세
│   ├── sellers/           # 업체 목록
│   │   ├── [id]/          # 업체 상세
│   │   └── edit/          # 업체 프로필 수정
│   └── my-quotes/         # 제출한 견적 (판매자)
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── contexts/
│   └── AuthContext.tsx    # 인증 컨텍스트
├── lib/
│   └── firebase.ts        # Firebase 설정
└── types/
    └── index.ts           # 타입 정의

scripts/
├── generate-images.ts     # 이미지 생성 스크립트
└── apply-images.ts        # 이미지 확인 스크립트

public/
└── images/                # 생성된 이미지 저장소
```

## 라이선스

MIT
