import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Open Vox - Agentic Newsletter Production for Marketing Teams',
  description: 'Automate newsletter creation for lead nurturing and customer retention. From brief to send-ready in minutes.',
  keywords: ['newsletter automation', 'customer retention', 'lead nurturing', 'marketing automation', 'AI newsletter'],
  openGraph: {
    title: 'Open Vox - Agentic Newsletter Production',
    description: 'Automate newsletter creation for lead nurturing and customer retention.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} noise-bg`}>
        {children}
      </body>
    </html>
  )
}
