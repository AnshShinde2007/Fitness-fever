import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fitness Fever Gym - Mumbai's Best Equipped Gym | Bhayandar & Borivali",
  description:
    "Join Fitness Fever Gym - Mumbai's best equipped gym with experienced trainers. 2 locations: Bhayandar East & Borivali West. AC gym, group classes, steam & massage, nutrition consultancy. Starting ₹1,000/month.",
  keywords:
    "Fitness Fever Gym, gym Mumbai, Bhayandar gym, Borivali gym, best equipped gym, experienced trainers, group classes, steam massage, nutrition consultancy, affordable gym Mumbai",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
