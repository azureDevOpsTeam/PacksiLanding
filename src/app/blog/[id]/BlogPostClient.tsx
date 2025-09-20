'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  date: string
  readTime: string
}

interface BlogPostClientProps {
  post: BlogPost
  blogPosts: BlogPost[]
}

export default function BlogPostClient({ post, blogPosts }: BlogPostClientProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 font-['IRANSansX'] transition-colors"
          >
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            بازگشت به بلاگ
          </Link>

          {/* Article Header */}
          <article className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20">
            {/* Featured Image */}
            <div className="relative h-64 md:h-80">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm font-['IRANSansX']">
                    {post.category}
                  </span>
                  <span className="text-white/80 text-sm font-['IRANSansX']">
                    {post.readTime}
                  </span>
                  <span className="text-white/80 text-sm font-['IRANSansX']">
                    {post.date}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white font-['IRANSansX'] leading-tight">
                  {post.title}
                </h1>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                <div 
                  className="text-white/90 leading-relaxed font-['IRANSansX'] text-lg"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{
                    lineHeight: '1.8'
                  }}
                />
              </div>

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div className="text-white/60 text-sm font-['IRANSansX']">
                    تاریخ انتشار: {post.date}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-white/60 text-sm font-['IRANSansX']">
                      اشتراک‌گذاری:
                    </span>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </button>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 font-['IRANSansX']">
              مطالب مرتبط
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="relative h-40">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors font-['IRANSansX'] line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-white/70 text-sm font-['IRANSansX'] line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}