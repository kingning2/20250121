import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rotate PDF Pages - Free Online PDF Rotation Tool",
  description: "Rotate PDF pages online for free. Simply click on a page to rotate it and download your modified PDF.",
  keywords: "PDF rotate, PDF tool, rotate PDF pages, PDF editor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M7 18h10v-2H7v2zM17 6H7v2h10V6zm0 6H7v-2h10v2z" fill="currentColor"/>
                </svg>
                <span className="font-semibold">PDF.ai</span>
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Chrome extension</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Use cases</a>
                <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800">
                  Get started →
                </button>
              </div>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 