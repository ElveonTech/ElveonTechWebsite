import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/i18n/language-context'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Elveon Tech | Intelligent Process Automation',
  description: 'Elveon Tech develops cutting-edge software solutions to automate and optimize processes across industries. Transform your business with intelligent automation.',
  icons: {
    icon: [
      {
        url: '/et-logo-new.png',
        type: 'image/png',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
        sizes: '32x32',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
        sizes: '32x32',
      },
    ],
    apple: '/apple-icon.png',
    shortcut: '/et-logo-new.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EZTJEG46GW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EZTJEG46GW');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LanguageProvider>
      </body>
    </html>
  )
}
