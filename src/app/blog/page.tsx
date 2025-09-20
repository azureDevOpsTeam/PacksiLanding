'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'راهنمای کامل سفر با پکسی',
    excerpt: 'همه چیزهایی که باید درباره سفر کردن و حمل بسته با پکسی بدانید',
    image: '/airplane.png',
    date: '۱۴۰۳/۰۱/۱۵',
    category: 'راهنما',
    readTime: '۵ دقیقه'
  },
  {
    id: 2,
    title: 'چگونه با سفر درآمد کسب کنیم؟',
    excerpt: 'روش‌های مختلف کسب درآمد از طریق حمل بسته در سفرهای خود',
    image: '/bussiness.png',
    date: '۱۴۰۳/۰۱/۱۰',
    category: 'درآمدزایی',
    readTime: '۷ دقیقه'
  },
  {
    id: 3,
    title: 'نکات ایمنی در حمل بسته',
    excerpt: 'مهم‌ترین نکات ایمنی که هر مسافر باید هنگام حمل بسته رعایت کند',
    image: '/travelerPerson.png',
    date: '۱۴۰۳/۰۱/۰۵',
    category: 'ایمنی',
    readTime: '۴ دقیقه'
  },
  {
    id: 4,
    title: 'بهترین مقاصد سفر برای کسب درآمد',
    excerpt: 'شهرها و کشورهایی که بیشترین تقاضا برای حمل بسته را دارند',
    image: '/city.png',
    date: '۱۴۰۳/۰۱/۰۱',
    category: 'سفر',
    readTime: '۶ دقیقه'
  },
  {
    id: 5,
    title: 'قوانین گمرکی و حمل بسته',
    excerpt: 'آشنایی با قوانین گمرکی مختلف کشورها برای حمل بسته',
    image: '/airplane.png',
    date: '۱۴۰۲/۱۲/۲۸',
    category: 'قوانین',
    readTime: '۸ دقیقه'
  },
  {
    id: 6,
    title: 'تجربه‌های واقعی کاربران پکسی',
    excerpt: 'داستان‌های موفقیت کاربرانی که با پکسی درآمد کسب کرده‌اند',
    image: '/travelerPerson.png',
    date: '۱۴۰۲/۱۲/۲۵',
    category: 'تجربه',
    readTime: '۱۰ دقیقه'
  },
  {
    id: 7,
    title: 'آماده‌سازی بسته برای سفر',
    excerpt: 'نحوه بسته‌بندی و آماده‌سازی اقلام برای حمل در سفر',
    image: '/bussiness.png',
    date: '۱۴۰۲/۱۲/۲۰',
    category: 'راهنما',
    readTime: '۵ دقیقه'
  },
  {
    id: 8,
    title: 'بیمه و پوشش ریسک در حمل بسته',
    excerpt: 'اهمیت بیمه و نحوه محافظت از خود و بسته‌ها در طول سفر',
    image: '/city.png',
    date: '۱۴۰۲/۱۲/۱۵',
    category: 'بیمه',
    readTime: '۶ دقیقه'
  },
  {
    id: 9,
    title: 'ارتباط مؤثر با فرستندگان',
    excerpt: 'نکاتی برای برقراری ارتباط بهتر و حرفه‌ای‌تر با مشتریان',
    image: '/travelerPerson.png',
    date: '۱۴۰۲/۱۲/۱۰',
    category: 'ارتباطات',
    readTime: '۴ دقیقه'
  },
  {
    id: 10,
    title: 'آینده صنعت حمل و نقل شخصی',
    excerpt: 'نگاهی به آینده و روندهای جدید در صنعت حمل بسته توسط مسافران',
    image: '/airplane.png',
    date: '۱۴۰۲/۱۲/۰۵',
    category: 'آینده‌نگری',
    readTime: '۹ دقیقه'
  },
  {
    id: 11,
    title: 'مدیریت زمان در سفرهای کاری',
    excerpt: 'چگونه زمان خود را در سفرهای کاری بهتر مدیریت کنیم',
    image: '/bussiness.png',
    date: '۱۴۰۲/۱۱/۳۰',
    category: 'مدیریت',
    readTime: '۷ دقیقه'
  },
  {
    id: 12,
    title: 'تکنولوژی و نوآوری در پکسی',
    excerpt: 'آشنایی با جدیدترین تکنولوژی‌های استفاده شده در پلتفرم پکسی',
    image: '/city.png',
    date: '۱۴۰۲/۱۱/۲۵',
    category: 'تکنولوژی',
    readTime: '۶ دقیقه'
  }
]

const categories = ['همه', 'راهنما', 'درآمدزایی', 'ایمنی', 'سفر', 'قوانین', 'تجربه', 'بیمه', 'ارتباطات', 'آینده‌نگری', 'مدیریت', 'تکنولوژی']

export default function BlogPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('همه')
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (selectedCategory === 'همه') {
      setFilteredPosts(blogPosts)
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory))
    }
  }, [selectedCategory])

  if (!mounted) {
    return null
  }

  return (
    <main className="relative min-h-screen bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h1 className="text-2xl font-bold text-white font-['IRANSansX']">پکسی</h1>
            </Link>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white/80 hover:text-white transition-colors font-['IRANSansX']">
                خانه
              </Link>
              <Link href="/blog" className="text-blue-400 font-['IRANSansX']">
                بلاگ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-20 pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['IRANSansX']">
              بلاگ پکسی
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-['IRANSansX']">
              آخرین اخبار، راهنماها و تجربیات در دنیای سفر و حمل بسته
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-['IRANSansX'] ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm font-['IRANSansX']">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors font-['IRANSansX'] line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 font-['IRANSansX'] line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Card Footer */}
                  <div className="flex items-center justify-between text-xs text-white/60 font-['IRANSansX']">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60 text-lg font-['IRANSansX']">
                هیچ مطلبی در این دسته‌بندی یافت نشد
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}