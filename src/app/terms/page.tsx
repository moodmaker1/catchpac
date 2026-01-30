export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">이용약관</h1>
          
          <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">
              <strong>시행일자:</strong> 2026년 1월 1일
            </p>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제1조 (목적)</h2>
              <p>
                이 약관은 catchfac(이하 "회사")이 운영하는 온라인 견적 비교 플랫폼 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제2조 (정의)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>"서비스"</strong>란 회사가 제공하는 부품 견적 요청, 비교, 중개 서비스를 의미합니다.</li>
                <li><strong>"이용자"</strong>란 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
                <li><strong>"회원"</strong>이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며, 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</li>
                <li><strong>"구매자"</strong>란 견적을 요청하는 회원을 말합니다.</li>
                <li><strong>"판매자"</strong>란 견적을 제출하는 회원을 말합니다.</li>
                <li><strong>"견적"</strong>이란 구매자가 요청한 부품에 대한 판매자의 가격 및 납기 제안을 말합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제3조 (약관의 게시와 개정)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>회사는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.</li>
                <li>회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</li>
                <li>회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 서비스의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.</li>
                <li>이용자는 변경된 약관에 대해 거부할 권리가 있으며, 약관 변경에 동의하지 않을 경우 서비스 이용을 중단하고 회원 탈퇴를 할 수 있습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제4조 (회원가입)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.</li>
                <li>회사는 제1항과 같이 회원가입을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
                    <li>등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                    <li>기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
                  </ul>
                </li>
                <li>회원가입계약의 성립 시기는 회사의 승낙이 회원에게 도달한 시점으로 합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제5조 (서비스의 제공 및 변경)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>회사는 다음과 같은 서비스를 제공합니다:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>견적 요청 및 비교 서비스</li>
                    <li>판매자-구매자 중개 서비스</li>
                    <li>시세 정보 제공 서비스</li>
                    <li>기타 회사가 추가 개발하거나 제휴계약 등을 통해 회원에게 제공하는 일체의 서비스</li>
                  </ul>
                </li>
                <li>회사는 서비스의 내용 및 제공일자를 제7조 제2항에서 정한 방법으로 이용자에게 통지하고, 제1항에 정한 서비스를 변경하여 제공할 수 있습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제6조 (서비스의 중단)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>회사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</li>
                <li>회사는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, 회사가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제7조 (회원의 의무)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>회원은 다음 행위를 하여서는 안 됩니다:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>신청 또는 변경 시 허위내용의 등록</li>
                    <li>타인의 정보 도용</li>
                    <li>회사가 게시한 정보의 변경</li>
                    <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                    <li>회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                    <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                    <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제8조 (견적의 성격 및 책임)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>플랫폼을 통해 제공되는 견적은 계약의 청약이 아닌 참고용 정보입니다.</li>
                <li>실제 거래는 구매자와 판매자 간에 직접 체결되며, 회사는 거래의 당사자가 아닙니다.</li>
                <li>견적의 정확성, 품질, 납기 등에 대한 책임은 해당 견적을 제출한 판매자에게 있습니다.</li>
                <li>회사는 견적의 내용, 정확성, 신뢰성에 대해 어떠한 보증도 하지 않습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제9조 (회사의 면책)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
                <li>회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</li>
                <li>회사는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.</li>
                <li>회사는 회원이 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.</li>
                <li>회사는 회원 간 또는 회원과 제3자 상호간에 서비스를 매개로 하여 거래 등을 한 경우에는 책임을 지지 않습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제10조 (회원 탈퇴 및 자격 상실 등)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원탈퇴를 처리합니다.</li>
                <li>회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원자격을 제한 및 정지시킬 수 있습니다:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li>가입 신청 시에 허위 내용을 등록한 경우</li>
                    <li>다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</li>
                    <li>서비스를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</li>
                  </ul>
                </li>
                <li>회사가 회원 자격을 제한·정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 회사는 회원자격을 상실시킬 수 있습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">제11조 (분쟁의 해결)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.</li>
                <li>회사와 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시의 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다.</li>
                <li>회사와 이용자 간에 발생한 분쟁에 관한 소송은 대한민국 법을 적용합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">부칙</h2>
              <p>이 약관은 2026년 1월 1일부터 시행됩니다.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
