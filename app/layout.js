import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Claud W Dennis — Coffee Bar, Southgate',
  description: 'A proper neighbourhood coffee bar next to Southgate tube. Specialty coffee, handmade food, craft beer, cocktails & wine. Sip, relax, enjoy.',
  openGraph: {
    title: 'Claud W Dennis — Coffee Bar, Southgate',
    description: 'A proper neighbourhood coffee bar next to Southgate tube.',
    url: 'https://claudwdennis.com',
    siteName: 'Claud W Dennis',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
