import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Poke Next',
  description: 'Pokemon Next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
