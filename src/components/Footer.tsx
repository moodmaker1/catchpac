import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4 text-sm text-gray-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-[#DC2626] mb-2">catchfac</h3>
                  <p className="text-gray-500 mb-2">제조업 구매품 견적 비교 플랫폼</p>
                  <p className="text-gray-400 text-sm">
                    여러 업체의 견적을 한 번에 비교하고 최적의 선택을 하세요
                  </p>
                </div>
              </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
            <div>
              <p className="font-semibold text-gray-900 mb-2">회사 정보</p>
              <p>대표이사: 성혜준, 노찬규</p>
              <p>사업자번호: -</p>
              <p>통신판매업 신고번호: -</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">연락처</p>
              <p>대표번호: 010-2481-5106</p>
              <p>
                이메일:{" "}
                <a 
                  href="mailto:tjdgp002@gmail.com" 
                  className="text-gray-600 hover:text-gray-900 hover:underline"
                >
                  tjdgp002@gmail.com
                </a>
              </p>
              <p>업무시간: 평일 09:00 ~ 18:00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4 text-sm">
              <Link href="/terms" className="text-gray-500 hover:text-gray-900 hover:underline">
                이용약관
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-900 hover:underline">
                개인정보 처리방침
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              COPYRIGHT © 2026 catchfac. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
