import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DeFi vs TradFi: Agent Payments Showdown | x402 Series',
  description: 'TradFi banks are racing to build AI agent payments. DeFi already has it. Compare x402/ERC-7710 vs FIS/Mastercard/Visa.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
