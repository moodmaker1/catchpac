"use client";

import { useState } from "react";
import { CATEGORIES } from "@/types";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    establishedYear: "",
    representativeName: "",
    contact: "",
    email: "",
    categories: [] as string[],
    region: "",
    annualRevenue: "",
    inquiry: "",
    privacyAgreement: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacyAgreement) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    setIsSubmitting(true);
    
    // TODO: 실제 API 호출로 변경
    try {
      // 시뮬레이션: 실제로는 API로 전송
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
        setFormData({
          companyName: "",
          establishedYear: "",
          representativeName: "",
          contact: "",
          email: "",
          categories: [],
          region: "",
          annualRevenue: "",
          inquiry: "",
          privacyAgreement: false,
        });
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCategoryToggle = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category].slice(0, 3), // 최대 3개
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 배경 오버레이 */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* 모달 컨텐츠 */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10">
        {/* 헤더 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">판매자 등록 문의</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✓</div>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                상담 신청이 완료되었습니다!
              </p>
              <p className="text-gray-600">
                빠른 시일 내에 연락드리겠습니다.
              </p>
            </div>
          ) : (
            <>
              {/* 업체명 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  업체명 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
                  placeholder="(주)회사명"
                />
              </div>

              {/* 설립 연도 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  설립 연도
                </label>
                <input
                  type="number"
                  value={formData.establishedYear}
                  onChange={(e) =>
                    setFormData({ ...formData, establishedYear: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
                  placeholder="예: 2020"
                  min="1900"
                  max={new Date().getFullYear()}
                />
              </div>

              {/* 대표자명 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  대표자명 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.representativeName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      representativeName: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
                  placeholder="홍길동"
                />
              </div>

              {/* 연락처 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
                  placeholder="010-1234-5678"
                />
              </div>

              {/* 이메일 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
                  placeholder="example@company.com"
                />
              </div>

              {/* 취급 품목 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  취급 품목 (최대 3개)
                </label>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => handleCategoryToggle(category)}
                      disabled={
                        !formData.categories.includes(category) &&
                        formData.categories.length >= 3
                      }
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        formData.categories.includes(category)
                          ? "bg-[#DC2626] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      } ${
                        !formData.categories.includes(category) &&
                        formData.categories.length >= 3
                          ? "opacity-50 cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* 지역 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  지역
                </label>
                <select
                  value={formData.region}
                  onChange={(e) =>
                    setFormData({ ...formData, region: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
                >
                  <option value="">선택하세요</option>
                  <option value="서울">서울</option>
                  <option value="경기">경기</option>
                  <option value="인천">인천</option>
                  <option value="부산">부산</option>
                  <option value="대구">대구</option>
                  <option value="대전">대전</option>
                  <option value="광주">광주</option>
                  <option value="울산">울산</option>
                  <option value="세종">세종</option>
                  <option value="강원">강원</option>
                  <option value="충북">충북</option>
                  <option value="충남">충남</option>
                  <option value="전북">전북</option>
                  <option value="전남">전남</option>
                  <option value="경북">경북</option>
                  <option value="경남">경남</option>
                  <option value="제주">제주</option>
                </select>
              </div>

              {/* 연매출 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  연매출
                </label>
                <select
                  value={formData.annualRevenue}
                  onChange={(e) =>
                    setFormData({ ...formData, annualRevenue: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
                >
                  <option value="">선택하세요</option>
                  <option value="1억 미만">1억 미만</option>
                  <option value="1억~5억">1억~5억</option>
                  <option value="5억~10억">5억~10억</option>
                  <option value="10억~50억">10억~50억</option>
                  <option value="50억 이상">50억 이상</option>
                </select>
              </div>

              {/* 문의 내용 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  문의 내용
                </label>
                <textarea
                  value={formData.inquiry}
                  onChange={(e) =>
                    setFormData({ ...formData, inquiry: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DC2626] focus:border-transparent"
                  placeholder="추가로 문의하실 내용이 있으시면 작성해주세요."
                />
              </div>

              {/* 개인정보 동의 */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.privacyAgreement}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        privacyAgreement: e.target.checked,
                      })
                    }
                    className="mt-1 w-4 h-4 text-[#DC2626] border-gray-300 rounded focus:ring-[#DC2626]"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    <span className="text-red-500">*</span> 개인정보 수집 및 이용에
                    동의합니다.
                  </span>
                </label>
                <div className="mt-2 text-xs text-gray-500 pl-7">
                  수집 항목: 업체명, 설립연도, 대표자명, 연락처, 이메일, 취급 품목,
                  지역, 연매출, 문의 내용
                  <br />
                  보유 기간: 상담 완료 후 5년
                  <br />
                  이용 목적: 판매자 등록 상담 및 서비스 제공
                </div>
              </div>

              {/* 제출 버튼 */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-[#DC2626] text-white rounded-lg hover:bg-red-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "제출 중..." : "상담 신청하기"}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
