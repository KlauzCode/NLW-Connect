import type { Metadata } from 'next'
import './globals.css'
import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Devstage',
}

const oxanium = Oxanium({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium',
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${oxanium.variable} ${montserrat.variable}`} lang="en">
      <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top">
        <main className="max-w-[1240px] mx-auto px-5 md:py-0">
          {children}
        </main>
      </body>
    </html>
  )
}
