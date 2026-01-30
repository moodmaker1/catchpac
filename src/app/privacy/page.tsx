export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">개인정보 처리방침</h1>
          
          <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">
              <strong>시행일자:</strong> 2026년 1월 1일
            </p>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. 개인정보의 처리 목적</h2>
              <p className="mb-3">
                catchfac(이하 "회사")는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>회원 가입 및 관리:</strong> 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지 목적</li>
                <li><strong>서비스 제공:</strong> 견적 요청 및 응답, 거래 중개, 시세 정보 제공, 고객 상담 및 문의 응대</li>
                <li><strong>마케팅 및 광고 활용:</strong> 신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. 개인정보의 처리 및 보유기간</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>회원 탈퇴 시까지 보유 (단, 관계 법령 위반에 따른 수사·조사 등이 진행중인 경우에는 해당 수사·조사 종료 시까지)</li>
                <li>전자상거래법에 따라 거래 기록은 5년간 보관</li>
                <li>회원 탈퇴 시 즉시 개인정보 파기 (단, 위 법령에 따라 보관이 필요한 경우 해당 기간 동안 보관 후 파기)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. 처리하는 개인정보의 항목</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">필수 항목:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>이메일 주소, 비밀번호</li>
                  <li>이름, 회사명</li>
                  <li>사용자 유형 (구매자/판매자)</li>
                </ul>
                <h3 className="font-semibold mb-2 mt-4">선택 항목:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>전화번호 (판매자)</li>
                  <li>업체 소개, 취급 품목, 지역 (판매자)</li>
                </ul>
                <h3 className="font-semibold mb-2 mt-4">자동 수집 항목:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP 주소, 쿠키, 서비스 이용 기록, 접속 로그</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. 개인정보의 제3자 제공</h2>
              <p className="mb-3">
                회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>이용자가 사전에 동의한 경우</li>
                <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                <li>견적 요청 시, 판매자에게 구매자 회사명 및 연락처 제공 (익명 요청 시 제외)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. 개인정보 처리의 위탁</h2>
              <p className="mb-3">
                회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Firebase:</strong> 데이터베이스 및 인증 서비스 제공 (위탁기간: 서비스 제공 기간)</li>
                  <li><strong>Vercel:</strong> 웹 호스팅 서비스 제공 (위탁기간: 서비스 제공 기간)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. 정보주체의 권리·의무 및 행사방법</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>이용자는 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</li>
                <li>권리 행사는 회사에 대해 개인정보보호법 시행령 제41조 제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체없이 조치하겠습니다.</li>
                <li>회원 탈퇴를 통해 개인정보 삭제를 요청할 수 있습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. 개인정보의 파기</h2>
              <p className="mb-3">회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">파기 방법:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>전자적 파일 형태: 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제</li>
                  <li>기록물, 인쇄물, 서면 등: 분쇄하거나 소각</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. 개인정보 보호책임자</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2"><strong>개인정보 보호책임자:</strong></p>
                <ul className="space-y-1">
                  <li>성명: 성혜준</li>
                  <li>직책: 대표이사</li>
                  <li>연락처: 010-2481-5106</li>
                  <li>이메일: tjdgp002@gmail.com</li>
                </ul>
                <p className="mt-4 mb-2">개인정보 처리방침에 대한 문의사항이 있으시면 위 연락처로 문의해 주시기 바랍니다.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. 개인정보 처리방침 변경</h2>
              <p>
                이 개인정보 처리방침은 2026년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
