import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            ۴۰۴
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['IRANSansX']">
            صفحه پیدا نشد
          </h2>
          <p className="text-lg text-white/70 mb-8 font-['IRANSansX']">
            متأسفانه صفحه‌ای که دنبال آن می‌گردید وجود ندارد.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-['IRANSansX'] shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            بازگشت به صفحه اصلی
          </Link>
          
          <div className="mt-6">
            <a
              href="https://t.me/packsi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors font-['IRANSansX']"
            >
              یا با ما در تلگرام تماس بگیرید
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}