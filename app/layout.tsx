import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const _montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'PLET - Neobanco Digital',
  description: 'Tu patrimonio protegido. Prestamos P2P, seguros, gestion financiera y depositos en una sola app.',
}

export const viewport: Viewport = {
  themeColor: '#F7F8FC',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_inter.variable} ${_montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
