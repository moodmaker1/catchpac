"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function DeleteAccountPage() {
  const { user, deleteAccount, signOut } = useAuth();
  const router = useRouter();
  const [confirmText, setConfirmText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    if (confirmText !== "탈퇴") {
      setError("'탈퇴'를 정확히 입력해주세요");
      return;
    }

    if (!confirm("정말로 탈퇴하시겠습니까? 모든 데이터가 삭제되며 복구할 수 없습니다.")) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      await deleteAccount();
      await signOut();
      alert("회원 탈퇴가 완료되었습니다.");
      router.push("/");
    } catch (err: any) {
      console.error("Error deleting account:", err);
      if (err.code === "auth/requires-recent-login") {
        setError("보안을 위해 다시 로그인한 후 탈퇴해주세요.");
      } else {
        setError("탈퇴 처리 중 오류가 발생했습니다: " + (err.message || "알 수 없는 오류"));
      }
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">회원 탈퇴</h1>
          <p className="text-gray-500 mb-8">
            회원 탈퇴 시 모든 개인정보와 데이터가 삭제되며 복구할 수 없습니다.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h2 className="font-semibold text-red-900 mb-3">탈퇴 시 삭제되는 정보</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm text-red-800">
              <li>회원 정보 (이름, 이메일, 회사명 등)</li>
              <li>견적 요청 내역 (구매자인 경우)</li>
              <li>견적 응답 내역 (판매자인 경우)</li>
              <li>프로필 정보 및 설정</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h2 className="font-semibold text-yellow-900 mb-2">주의사항</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm text-yellow-800">
              <li>탈퇴 후 모든 데이터는 즉시 삭제되며 복구할 수 없습니다.</li>
              <li>진행 중인 거래가 있는 경우 탈퇴 전에 완료해주세요.</li>
              <li>법령에 따라 일정 기간 보관이 필요한 정보는 해당 기간 동안 보관 후 삭제됩니다.</li>
            </ul>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              탈퇴를 확인하려면 <strong className="text-red-600">"탈퇴"</strong>를 입력하세요
            </label>
            <input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              className="input-field"
              placeholder="탈퇴"
            />
          </div>

          <div className="flex gap-3">
            <Link
              href={user.userType === "SELLER" ? "/sellers/edit" : "/"}
              className="flex-1 btn-secondary text-center"
            >
              취소
            </Link>
            <button
              onClick={handleDelete}
              disabled={loading || confirmText !== "탈퇴"}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "처리 중..." : "회원 탈퇴"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
