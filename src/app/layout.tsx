import { Metadata } from "next"
import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Created By Sufiyan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
