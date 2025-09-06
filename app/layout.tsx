import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maria - Project Coordinator & Educator',
  description: 'Personal portfolio of Maria, Project Coordinator at Indiana University Bloomington, passionate about coordinating projects, teaching, and creating impact.',
  keywords: ['project coordinator', 'educator', 'Indiana University', 'classical studies', 'portfolio'],
  authors: [{ name: 'Maria' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
