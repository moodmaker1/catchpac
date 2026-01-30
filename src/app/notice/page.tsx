"use client";

export default function NoticePage() {
  // 실제로는 Firestore에서 공지사항을 가져와야 하지만, 예시 데이터로 구현
  const notices = [
    {
      id: 1,
      title: "catchfac 서비스 오픈 안내",
      date: "2026-01-15",
      content: "catchfac 서비스가 정식 오픈되었습니다. 많은 이용 부탁드립니다.",
      important: true,
    },
    {
      id: 2,
      title: "프리미엄 파트너 서비스 출시",
      date: "2026-01-20",
      content: "프리미엄 파트너 서비스가 출시되었습니다. 상단 노출 및 우선 알림 혜택을 받을 수 있습니다.",
      important: true,
    },
    {
      id: 3,
      title: "시스템 점검 안내",
      date: "2026-01-25",
      content: "2026년 1월 30일 오전 2시부터 4시까지 시스템 점검이 진행됩니다. 이용에 불편을 드려 죄송합니다.",
      important: false,
    },
  ];

  return (
    <div className="min-h-[calc(100vh-200px)] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">공지사항</h1>
          <p className="text-xl text-gray-600">
            catchfac의 주요 소식과 업데이트를 확인하세요
          </p>
        </div>

        <div className="space-y-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="card hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {notice.important && (
                      <span className="px-2 py-1 bg-[#DC2626] text-white text-xs font-medium rounded">
                        중요
                      </span>
                    )}
                    <h3 className="text-lg font-semibold text-gray-900">
                      {notice.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-2">{notice.content}</p>
                  <p className="text-sm text-gray-400">{notice.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 페이지네이션 (추후 구현) */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            더 많은 공지사항은 추후 업데이트될 예정입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
