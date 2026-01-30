import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "catchfac - 제조업 구매품 견적 비교 플랫폼",
  description: "흩어진 견적, 한 번에 잡다. 제조업 중소기업을 위한 구매품 견적 비교 플랫폼. 여러 업체의 견적을 한 번에 비교하고 최적의 가격과 납기를 선택하세요.",
  keywords: "견적 비교, 제조업, 부품 구매, B2B 플랫폼, 산업용 부품, 견적 요청, 중소기업, 유통업체",
  openGraph: {
    title: "catchfac - 제조업 구매품 견적 비교 플랫폼",
    description: "여러 업체의 견적을 한 번에 비교하고 최적의 가격과 납기를 선택하세요",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <AuthProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
