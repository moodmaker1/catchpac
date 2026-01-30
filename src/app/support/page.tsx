"use client";

import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">고객센터</h1>
          <p className="text-xl text-gray-600">
            궁금한 점이 있으시면 언제든지 문의해주세요
          </p>
        </div>

        {/* 연락처 정보 */}
        <section className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">연락처</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">대표번호</h3>
              <p className="text-gray-600">010-2481-5106</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">이메일</h3>
              <p className="text-gray-600">
                <a href="mailto:tjdgp002@gmail.com" className="text-[#DC2626] hover:underline">
                  tjdgp002@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">업무시간</h3>
              <p className="text-gray-600">평일 09:00 ~ 18:00</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">응답 시간</h3>
              <p className="text-gray-600">평일 기준 24시간 이내</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Q. 회원가입은 무료인가요?
              </h3>
              <p className="text-gray-600">
                네, 구매자와 판매자 모두 무료로 회원가입할 수 있습니다.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Q. 견적 요청은 어떻게 하나요?
              </h3>
              <p className="text-gray-600">
                구매자로 로그인한 후 "견적 요청하기" 메뉴에서 필요한 부품 정보를 입력하여 견적을 요청할 수 있습니다.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Q. 판매자로 등록하려면 어떻게 해야 하나요?
              </h3>
              <p className="text-gray-600">
                회원가입 시 "판매자"를 선택하거나, 회원가입 후 판매자 계정으로 전환할 수 있습니다. 상단의 "판매자 등록 문의" 버튼을 통해 상담도 받을 수 있습니다.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Q. 프리미엄 파트너는 무엇인가요?
              </h3>
              <p className="text-gray-600">
                프리미엄 파트너는 업체 목록 상단에 노출되고, 견적 요청 알림을 우선적으로 받을 수 있는 유료 서비스입니다. 자세한 내용은 문의해주세요.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Q. 견적 제출 후 어떻게 진행되나요?
              </h3>
              <p className="text-gray-600">
                구매자가 여러 견적을 비교한 후 최적의 견적을 선택하면, 해당 판매자에게 연락이 가며 주문을 진행할 수 있습니다.
              </p>
            </div>
            <div className="pb-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Q. 취급 품목은 어떻게 등록하나요?
              </h3>
              <p className="text-gray-600">
                판매자로 로그인한 후 "내 프로필" 메뉴에서 취급 품목을 최대 3개까지 선택할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 문의하기 */}
        <section className="card">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              추가 문의가 필요하신가요?
            </h2>
            <p className="text-gray-600 mb-6">
              아래 연락처로 직접 문의하시거나, 상단의 "판매자 등록 문의" 버튼을 통해 상담을 신청하실 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:010-2481-5106"
                className="btn-primary text-lg px-8 py-4"
              >
                전화 문의하기
              </a>
              <a
                href="mailto:tjdgp002@gmail.com"
                className="btn-secondary text-lg px-8 py-4"
              >
                이메일 문의하기
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
