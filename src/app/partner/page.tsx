"use client";

import Link from "next/link";
import Image from "next/image";

export default function PartnerPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">파트너 되기</h1>
          <p className="text-xl text-gray-600">
            catchfac에 파트너로 등록하고 새로운 고객을 만나보세요
          </p>
        </div>

        {/* 혜택 섹션 */}
        <section className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">파트너 혜택</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#DC2626] rounded-lg flex items-center justify-center text-white text-xl">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">신규 견적 요청 실시간 알림</h3>
                <p className="text-gray-600 text-sm">
                  구매자들의 견적 요청을 실시간으로 받아 빠르게 대응할 수 있습니다.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#DC2626] rounded-lg flex items-center justify-center text-white text-xl">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">업체 프로필 페이지 제공</h3>
                <p className="text-gray-600 text-sm">
                  자세한 업체 정보와 취급 품목을 등록하여 구매자들에게 어필할 수 있습니다.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#DC2626] rounded-lg flex items-center justify-center text-white text-xl">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">구매자 직접 연결</h3>
                <p className="text-gray-600 text-sm">
                  선택된 견적의 경우 구매자와 직접 연결되어 주문을 진행할 수 있습니다.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-xl">
                  ★
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">프리미엄: 상단 노출 + 우선 알림</h3>
                <p className="text-gray-600 text-sm">
                  프리미엄 파트너는 업체 목록 상단에 노출되고, 견적 요청 알림을 우선적으로 받을 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 등록 절차 */}
        <section className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">등록 절차</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">회원가입</h3>
                <p className="text-gray-600">
                  판매자 계정으로 회원가입을 진행하세요. 회사명과 담당자 정보를 입력합니다.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">업체 정보 등록</h3>
                <p className="text-gray-600">
                  업체 프로필 페이지에서 연락처, 취급 품목, 지역, 업체 소개 등을 등록하세요.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">견적 요청 확인</h3>
                <p className="text-gray-600">
                  등록이 완료되면 구매자들의 견적 요청을 확인하고 견적을 제출할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="card bg-gradient-to-br from-gray-50 to-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              지금 바로 파트너로 등록하세요
            </h2>
            <p className="text-gray-600 mb-6">
              무료로 등록하고 새로운 고객을 만나보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="btn-primary text-lg px-8 py-4">
                무료로 등록하기
              </Link>
              <button
                onClick={() => {
                  // 상담 신청 모달 열기 (Header에서 관리)
                  window.dispatchEvent(new CustomEvent('openConsultationModal'));
                }}
                className="btn-secondary text-lg px-8 py-4"
              >
                상담 신청하기
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
