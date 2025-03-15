import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Whatsapp from "../../public/images/WhatsApp.svg"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Acharya Ashok Dwivedi",
  description:
    "Welcome to the official website of Acharya Ashok Dwivedi. Expert astrologer and spiritual guide offering vedic astrology consultations, horoscope readings, and spiritual guidance. Contact us for personalized astrological solutions.",
  icons: {
    icon: "/images/logo-white.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" href="/images/logo-white.png" />
      </head>
      <body className={inter.className}>
        <div className="fixed right-4 bottom-4 md:right-8 md:bottom-8 z-50">
          <a
            href="https://wa.me/9981933791"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:scale-110 transition-transform duration-200"
          >
            <Image
              src={Whatsapp}
              alt="WhatsApp Contact"
              width={60}
              height={60}
              priority
            />
          </a>
        </div>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}

        <Footer />
      </body>
    </html>
  )
}
