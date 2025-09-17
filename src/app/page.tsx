'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleTelegramClick = () => {
    window.open('https://t.me/packsi_channel', '_blank', 'noopener,noreferrer')
  }

  if (!mounted) {
    return null
  }

  return (
    <main className="relative min-h-screen bg-slate-900">
      {/* Background City Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/city.png"
          alt="منظره شهری"
          fill
          className="object-cover opacity-20"
          loading="eager"
          sizes="100vw"
          priority
        />
      </div>

      {/* Minimal Overlay */}
      <div className="absolute inset-0 z-10 bg-slate-900/40"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h1 className="text-2xl font-bold text-white font-['IRANSansX']">پکسی</h1>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors font-['IRANSansX']">ویژگی‌ها</a>
              <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors font-['IRANSansX']">نحوه کار</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors font-['IRANSansX']">تماس</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
        {/* Simple Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['IRANSansX'] animate-fade-in-up">
              سفر کن و از هر مسیر
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                درآمدی تازه کسب کن
              </span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-12 leading-relaxed font-['IRANSansX'] animate-fade-in-up delay-300">
            Packsi به شما امکان می‌دهد در سفر خود، بسته‌ها را برای دیگران حمل کنید و کسب درآمد کنید. سریع، امن و انعطاف‌پذیر.
          </p>
          
          {/* Simple Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center animate-fade-in-up delay-500">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 font-['IRANSansX']">
                ۱۰۰+
              </div>
              <div className="text-white/80 text-sm font-['IRANSansX']">مسافر فعال</div>
            </div>
            
            <div className="text-center animate-fade-in-up delay-700">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 font-['IRANSansX']">
                ۵۰۰+
              </div>
              <div className="text-white/80 text-sm font-['IRANSansX']">بسته تحویل شده</div>
            </div>
            
            <div className="text-center animate-fade-in-up delay-900">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 font-['IRANSansX']">
                ۹۸%
              </div>
              <div className="text-white/80 text-sm font-['IRANSansX']">رضایت کاربران</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center animate-fade-in-up delay-1100">
            <a
              href="https://t.me/packsi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 mb-6 font-['IRANSansX'] shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              همین حالا به تلگرام ما بپیوندید
            </a>
            
            <p className="text-white/70 text-base font-['IRANSansX'] animate-bounce-in delay-1300 text-center max-w-md">
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent font-semibold">
                سفر شما می‌تواند پولساز باشد. همین امروز شروع کنید!
              </span>
            </p>
            
            {/* Secondary CTA */}
            <div className="mt-6 animate-slide-up-stagger delay-1500">
              <button className="group text-white/80 hover:text-white transition-colors duration-300 font-['IRANSansX'] text-sm hover-lift">
                <span className="flex items-center gap-2 border-b border-white/30 group-hover:border-white/60 pb-1">
                  بیشتر بدانید
                  <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

        {/* Features Section */}
        <section id="features" className="relative z-20 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['IRANSansX'] animate-fade-in-up">
                چرا پکسی؟
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto font-['IRANSansX'] animate-fade-in-up delay-300">
                راه‌حلی هوشمند برای تبدیل سفرهای شما به فرصت کسب درآمد
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in-up delay-500">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-['IRANSansX']">
                  کسب درآمد آسان
                </h3>
                <p className="text-white/70 font-['IRANSansX']">
                  با حمل بسته‌های کوچک در سفرهای روزانه خود، درآمد اضافی کسب کنید
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in-up delay-700">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-['IRANSansX']">
                  امنیت بالا
                </h3>
                <p className="text-white/70 font-['IRANSansX']">
                  تمام بسته‌ها بررسی شده و بیمه هستند. امنیت شما اولویت اصلی ماست.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in-up delay-900">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-['IRANSansX']">
                  سریع و آسان
                </h3>
                <p className="text-white/70 font-['IRANSansX']">
                  فقط چند کلیک تا پیدا کردن بسته مناسب برای مسیر سفرتان. ساده و سریع.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Stats Section */}
        <section className="relative z-20 py-20 px-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['IRANSansX'] animate-bounce-in">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                  آمار زنده پکسی
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto font-['IRANSansX'] animate-slide-up-stagger delay-300">
                هر لحظه، کاربران ما در حال کسب درآمد و ارسال بسته هستند
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {/* Live Stat 1 */}
              <div className="group text-center hover-lift animate-bounce-in delay-500">
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm border border-blue-400/30 hover-glow transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
                      <svg className="w-8 h-8 text-white animate-wave" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2 font-['IRANSansX'] animate-text-shimmer">
                      ۱,۲۴۷
                    </div>
                    <div className="text-white/80 text-sm font-['IRANSansX'] group-hover:text-white transition-colors">کاربر فعال</div>
                    <div className="absolute top-3 right-3 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Live Stat 2 */}
              <div className="group text-center hover-lift animate-bounce-in delay-700">
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 backdrop-blur-sm border border-purple-400/30 hover-glow transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-300 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
                      <svg className="w-8 h-8 text-white animate-particle-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-2 font-['IRANSansX'] animate-text-shimmer">
                      ۳,۸۹۲
                    </div>
                    <div className="text-white/80 text-sm font-['IRANSansX'] group-hover:text-white transition-colors">بسته ارسال شده</div>
                    <div className="absolute top-3 right-3 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>

              {/* Live Stat 3 */}
              <div className="group text-center hover-lift animate-bounce-in delay-900">
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-green-500/20 to-green-600/10 backdrop-blur-sm border border-green-400/30 hover-glow transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-300 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
                      <svg className="w-8 h-8 text-white animate-wave" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-2 font-['IRANSansX'] animate-text-shimmer">
                      ۲۴۷M
                    </div>
                    <div className="text-white/80 text-sm font-['IRANSansX'] group-hover:text-white transition-colors">تومان درآمد</div>
                    <div className="absolute top-3 right-3 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-500"></div>
                  </div>
                </div>
              </div>

              {/* Live Stat 4 */}
              <div className="group text-center hover-lift animate-bounce-in delay-1100">
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-sm border border-orange-400/30 hover-glow transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
                      <svg className="w-8 h-8 text-white animate-particle-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 mb-2 font-['IRANSansX'] animate-text-shimmer">
                      ۹۹.۲%
                    </div>
                    <div className="text-white/80 text-sm font-['IRANSansX'] group-hover:text-white transition-colors">موفقیت تحویل</div>
                    <div className="absolute top-3 right-3 w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-700"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time indicator */}
            <div className="text-center mt-12 animate-slide-up-stagger delay-1300">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-sm font-['IRANSansX']">آمار به‌روزرسانی زنده</span>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="relative z-20 py-20 px-6 bg-white/5 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['IRANSansX'] animate-bounce-in">
                <span className="animate-text-shimmer">نحوه کار</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto font-['IRANSansX'] animate-slide-up-stagger delay-300">
                در سه قدم ساده شروع کنید و درآمدزایی را تجربه کنید
              </p>
            </div>
            
            <div className="relative">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 opacity-30 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 opacity-60 rounded-full animate-wave"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-12 relative z-10">
                {/* Step 1 */}
                <div className="group text-center animate-bounce-in delay-500 relative">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-125 transition-all duration-500 animate-glow-pulse shadow-2xl shadow-blue-500/30">
                      <span className="text-white font-bold text-3xl animate-particle-float">۱</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 group-hover:bg-white/15 transition-all duration-300 hover-lift">
                    <h3 className="text-2xl font-bold text-white mb-4 font-['IRANSansX'] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                      عضویت
                    </h3>
                    <p className="text-white/70 font-['IRANSansX'] group-hover:text-white/90 transition-colors duration-300">
                      در تلگرام پکسی عضو شوید و پروفایل خود را تکمیل کنید.
                    </p>
                  </div>
                  
                  {/* Arrow to next step */}
                  <div className="hidden md:block absolute top-12 -right-6 text-white/30 animate-wave">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="group text-center animate-bounce-in delay-700 relative">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-125 transition-all duration-500 animate-glow-pulse shadow-2xl shadow-green-500/30">
                      <span className="text-white font-bold text-3xl animate-wave">۲</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 group-hover:bg-white/15 transition-all duration-300 hover-lift">
                    <h3 className="text-2xl font-bold text-white mb-4 font-['IRANSansX'] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 transition-all duration-300">
                      انتخاب بسته
                    </h3>
                    <p className="text-white/70 font-['IRANSansX'] group-hover:text-white/90 transition-colors duration-300">
                      بسته‌های مناسب مسیر سفرتان را انتخاب کنید.
                    </p>
                  </div>
                  
                  {/* Arrow to next step */}
                  <div className="hidden md:block absolute top-12 -right-6 text-white/30 animate-wave delay-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="group text-center animate-bounce-in delay-900 relative">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-125 transition-all duration-500 animate-glow-pulse shadow-2xl shadow-purple-500/30">
                      <span className="text-white font-bold text-3xl animate-particle-float">۳</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 group-hover:bg-white/15 transition-all duration-300 hover-lift">
                    <h3 className="text-2xl font-bold text-white mb-4 font-['IRANSansX'] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                      کسب درآمد
                    </h3>
                    <p className="text-white/70 font-['IRANSansX'] group-hover:text-white/90 transition-colors duration-300">
                      بسته را تحویل دهید و درآمد خود را دریافت کنید.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Success indicator */}
            <div className="text-center mt-16 animate-slide-up-stagger delay-1100">
              <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-['IRANSansX'] text-lg">شروع کنید و در کمتر از ۵ دقیقه اولین درآمد خود را کسب کنید!</span>
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative z-20 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['IRANSansX'] animate-fade-in-up">
                نظرات کاربران
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto font-['IRANSansX'] animate-fade-in-up delay-300">
                تجربه واقعی کاربران پکسی
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 animate-fade-in-up delay-500">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ع</span>
                  </div>
                  <div className="mr-4">
                    <h4 className="text-white font-bold font-['IRANSansX']">علی محمدی</h4>
                    <p className="text-white/60 text-sm font-['IRANSansX']">مسافر فعال</p>
                  </div>
                </div>
                <p className="text-white/80 font-['IRANSansX'] leading-relaxed">
                  "در سفر اصفهان توانستم ۳ بسته حمل کنم و ۲۰۰ هزار تومان درآمد کسب کردم. فوق‌العاده بود!"
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 animate-fade-in-up delay-700">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">س</span>
                  </div>
                  <div className="mr-4">
                    <h4 className="text-white font-bold font-['IRANSansX']">سارا احمدی</h4>
                    <p className="text-white/60 text-sm font-['IRANSansX']">کارآفرین</p>
                  </div>
                </div>
                <p className="text-white/80 font-['IRANSansX'] leading-relaxed">
                  "پکسی کمک کرد تا محصولاتم را به شهرهای دیگر ارسال کنم. سریع و مطمئن!"
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 animate-fade-in-up delay-900">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ر</span>
                  </div>
                  <div className="mr-4">
                    <h4 className="text-white font-bold font-['IRANSansX']">رضا کریمی</h4>
                    <p className="text-white/60 text-sm font-['IRANSansX']">دانشجو</p>
                  </div>
                </div>
                <p className="text-white/80 font-['IRANSansX'] leading-relaxed">
                  "به عنوان دانشجو، پکسی کمک کرد تا هزینه سفرهایم را تأمین کنم. عالی!"
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative z-20 py-20 px-6 bg-gradient-to-b from-white/5 to-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['IRANSansX'] animate-bounce-in">
                <span className="animate-text-shimmer">سوالات متداول</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto font-['IRANSansX'] animate-slide-up-stagger delay-300">
                پاسخ سوالات رایج درباره پکسی را اینجا بیابید
              </p>
            </div>

            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden animate-bounce-in delay-500">
                <button className="w-full px-8 py-6 text-right flex items-center justify-between hover:bg-white/5 transition-colors duration-300">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-300 transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white font-['IRANSansX'] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                    چگونه می‌توانم در پکسی عضو شوم؟
                  </h3>
                </button>
                <div className="px-8 pb-6 text-white/70 font-['IRANSansX'] leading-relaxed">
                  کافی است در تلگرام به ربات پکسی مراجعه کنید و مراحل ثبت‌نام ساده را طی کنید. فقط چند دقیقه زمان می‌برد!
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden animate-bounce-in delay-700">
                <button className="w-full px-8 py-6 text-right flex items-center justify-between hover:bg-white/5 transition-colors duration-300">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-300 transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white font-['IRANSansX'] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 transition-all duration-300">
                    آیا حمل بسته‌ها امن است؟
                  </h3>
                </button>
                <div className="px-8 pb-6 text-white/70 font-['IRANSansX'] leading-relaxed">
                  بله، تمام بسته‌ها قبل از تحویل بررسی می‌شوند و بیمه هستند. امنیت شما اولویت اصلی ماست.
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden animate-bounce-in delay-900">
                <button className="w-full px-8 py-6 text-right flex items-center justify-between hover:bg-white/5 transition-colors duration-300">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-300 transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white font-['IRANSansX'] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                    چقدر درآمد می‌توانم کسب کنم؟
                  </h3>
                </button>
                <div className="px-8 pb-6 text-white/70 font-['IRANSansX'] leading-relaxed">
                  درآمد شما بستگی به تعداد بسته‌ها و مسافت سفر دارد. در متوسط، کاربران ماهانه ۵۰۰ هزار تا ۲ میلیون تومان درآمد کسب می‌کنند.
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden animate-bounce-in delay-1100">
                <button className="w-full px-8 py-6 text-right flex items-center justify-between hover:bg-white/5 transition-colors duration-300">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-300 transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white font-['IRANSansX'] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-500 transition-all duration-300">
                    چه زمانی پول خود را دریافت می‌کنم؟
                  </h3>
                </button>
                <div className="px-8 pb-6 text-white/70 font-['IRANSansX'] leading-relaxed">
                  پس از تحویل موفق بسته و تأیید گیرنده، پول شما فوراً به حساب شما واریز می‌شود.
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-12 animate-slide-up-stagger delay-1300">
              <p className="text-white/80 font-['IRANSansX'] mb-6">سوال دیگری دارید؟</p>
              <a href="https://t.me/packsi" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-bold font-['IRANSansX'] hover:scale-105 transition-all duration-300 animate-glow-pulse">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
                با ما در تماس باشید
              </a>
            </div>
          </div>
        </section>

         {/* Footer */}
         <footer id="contact" className="relative z-20 mt-20 bg-white/5 backdrop-blur-md border-t border-white/10">
           <div className="max-w-6xl mx-auto px-6 py-12">
             <div className="grid md:grid-cols-4 gap-8">
               {/* Logo and Description */}
               <div className="md:col-span-2">
                 <div className="flex items-center mb-4">
                   <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                     <span className="text-white font-bold text-lg">P</span>
                   </div>
                   <span className="mr-3 text-2xl font-bold text-white font-['IRANSansX']">پکسی</span>
                 </div>
                 <p className="text-white/70 font-['IRANSansX'] leading-relaxed mb-6">
                   پلتفرم هوشمند حمل بسته در سفر. با پکسی، سفر کنید، درآمد کسب کنید و به دیگران کمک کنید.
                 </p>
                 <div className="flex space-x-4 space-x-reverse">
                   <a href="https://t.me/packsi" target="_blank" rel="noopener noreferrer" 
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                     <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                     </svg>
                   </a>
                   <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                     <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                     </svg>
                   </a>
                 </div>
               </div>
               
               {/* Quick Links */}
               <div>
                 <h3 className="text-white font-bold mb-4 font-['IRANSansX']">لینک‌های سریع</h3>
                 <ul className="space-y-2">
                   <li><a href="#features" className="text-white/70 hover:text-white transition-colors font-['IRANSansX']">ویژگی‌ها</a></li>
                   <li><a href="#how-it-works" className="text-white/70 hover:text-white transition-colors font-['IRANSansX']">نحوه کار</a></li>
                   <li><a href="https://t.me/packsi" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors font-['IRANSansX']">عضویت</a></li>
                   <li><a href="#" className="text-white/70 hover:text-white transition-colors font-['IRANSansX']">پشتیبانی</a></li>
                 </ul>
               </div>
               
               {/* Contact Info */}
               <div>
                 <h3 className="text-white font-bold mb-4 font-['IRANSansX']">تماس با ما</h3>
                 <ul className="space-y-2">
                   <li className="flex items-center text-white/70 font-['IRANSansX']">
                     <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                       <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                     </svg>
                     info@packsi.ir
                   </li>
                   <li className="flex items-center text-white/70 font-['IRANSansX']">
                     <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                     </svg>
                     تهران، ایران
                   </li>
                   <li className="flex items-center text-white/70 font-['IRANSansX']">
                     <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                     </svg>
                     @packsibot
                   </li>
                 </ul>
               </div>
             </div>
             
             <div className="border-t border-white/10 mt-8 pt-8 text-center">
               <p className="text-white/60 text-sm font-['IRANSansX']">
                 © 2024 پکسی. تمامی حقوق محفوظ است.
               </p>
             </div>
           </div>
         </footer>


    </main>
  )
}