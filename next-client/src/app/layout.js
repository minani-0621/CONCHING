import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CONCHING",
  description: "기프티콘 거래소 콘칭",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Navbar />
        <div className="flex-1 px-2 py-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
