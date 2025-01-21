'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white py-16 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M7 18h10v-2H7v2zM17 6H7v2h10V6zm0 6H7v-2h10v2z" fill="currentColor"/>
              </svg>
              <span className="font-semibold">PDF.ai</span>
            </div>
            <p className="text-gray-600 text-sm">
              Chat with any PDF: ask questions, get summaries, find information, and more.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-6h2v6z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-6h2v6z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/use-cases" className="text-gray-600 hover:text-gray-900">Use cases</Link></li>
              <li><Link href="/chrome-extension" className="text-gray-600 hover:text-gray-900">Chrome extension</Link></li>
              <li><Link href="/api-docs" className="text-gray-600 hover:text-gray-900">API docs</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
              <li><Link href="/video-tutorials" className="text-gray-600 hover:text-gray-900">Video tutorials</Link></li>
              <li><Link href="/resources" className="text-gray-600 hover:text-gray-900">Resources</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
            </ul>
          </div>

          {/* We also built */}
          <div>
            <h3 className="font-semibold mb-4">We also built</h3>
            <ul className="space-y-2">
              <li><Link href="/resume-scanner" className="text-gray-600 hover:text-gray-900">Resume AI Scanner</Link></li>
              <li><Link href="/invoice-scanner" className="text-gray-600 hover:text-gray-900">Invoice AI Scanner</Link></li>
              <li><Link href="/quiz-generator" className="text-gray-600 hover:text-gray-900">AI Quiz Generator</Link></li>
              <li><Link href="/quickyai" className="text-gray-600 hover:text-gray-900">QuickyAI</Link></li>
              <li><Link href="/docsium" className="text-gray-600 hover:text-gray-900">Docsium</Link></li>
              <li><Link href="/pdf-gpts" className="text-gray-600 hover:text-gray-900">PDF GPTs</Link></li>
              <li><Link href="/pdf-ai-generator" className="text-gray-600 hover:text-gray-900">PDF AI generator</Link></li>
              <li><Link href="/other-tools" className="text-gray-600 hover:text-gray-900">Other PDF tools</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/vs-chatpdf" className="text-gray-600 hover:text-gray-900">PDF.ai vs ChatPDF</Link></li>
              <li><Link href="/vs-acrobat" className="text-gray-600 hover:text-gray-900">PDF.ai vs Acrobat Reader</Link></li>
              <li><Link href="/legal" className="text-gray-600 hover:text-gray-900">Legal</Link></li>
              <li>
                <Link href="/affiliate" className="text-gray-600 hover:text-gray-900 inline-flex items-center gap-1">
                  Affiliate program
                  <span className="px-1 py-0.5 text-xs bg-green-100 text-green-800 rounded">💰</span>
                </Link>
              </li>
              <li><Link href="/investor" className="text-gray-600 hover:text-gray-900">Investor</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
} 