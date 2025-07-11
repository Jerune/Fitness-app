import type { Metadata } from 'next'
import { Zain, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Zain({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-body',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-header',
})

export const metadata: Metadata = {
  title: 'Fitness Tracker',
  description: 'Be Strong. Be Big. Track progress.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${playfair.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
