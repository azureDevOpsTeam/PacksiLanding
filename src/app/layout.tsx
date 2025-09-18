import type { Metadata } from 'next'
import '../styles/globals.css'
import Script from "next/script";

export const metadata: Metadata = {
  title: 'پکسی – سفر کن، بسته حمل کن و درآمد کسب کن | به تلگرام ما بپیوند',
  description: 'پکسی به مسافران و مهاجران امکان حمل بسته‌ها در طول سفر و کسب درآمد اضافی آسان را می‌دهد. به کانال تلگرام ما بپیوندید و شروع به درآمدزایی کنید!',
  keywords: 'سفر, بسته, درآمد, مهاجران, مسافران, تلگرام, درآمدزایی, تحویل',
  authors: [{ name: 'Packsi' }],
  creator: 'Packsi',
  publisher: 'Packsi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://packsi.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'پکسی – سفر کن، بسته حمل کن و درآمد کسب کن',
    description: 'پکسی به مسافران و مهاجران امکان حمل بسته‌ها در طول سفر و کسب درآمد اضافی آسان را می‌دهد. به کانال تلگرام ما بپیوندید!',
    url: 'https://packsi.com',
    siteName: 'پکسی',
    images: [
      {
        url: '/airplane.png',
        width: 1200,
        height: 630,
        alt: 'پکسی - سفر کن و با حمل بسته درآمد کسب کن',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'پکسی – سفر کن، بسته حمل کن و درآمد کسب کن',
    description: 'پکسی به مسافران و مهاجران امکان حمل بسته‌ها در طول سفر و کسب درآمد اضافی آسان را می‌دهد!',
    images: ['/airplane.png'],
    creator: '@packsi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': 'https://packsi.com/#website',
                  url: 'https://packsi.com/',
                  name: 'پکسی',
                  description: 'پلتفرم سفر، حمل بسته و درآمدزایی برای مسافران و مهاجران',
                  potentialAction: [
                    {
                      '@type': 'SearchAction',
                      target: {
                        '@type': 'EntryPoint',
                        urlTemplate: 'https://packsi.com/search?q={search_term_string}',
                      },
                      'query-input': 'required name=search_term_string',
                    },
                  ],
                },
                {
                  '@type': 'Organization',
                  '@id': 'https://packsi.com/#organization',
                  name: 'پکسی',
                  url: 'https://packsi.com/',
                  description: 'پلتفرمی که مسافران را با فرصت‌های تحویل بسته برای کسب درآمد اضافی متصل می‌کند',
                  foundingDate: '2024',
                  contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'customer service',
                    url: 'https://t.me/packsi_channel',
                  },
                  sameAs: [
                    'https://t.me/packsi_channel',
                  ],
                },
              ],
            }),
          }}
        />
        <Script
          id="goftino-widget" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(){var i="BcQr2J",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);} "complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();`,
          }}
        />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="MpMbC2A8fgpbgGoQM04hLw" async></script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}