import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Kanit } from 'next/font/google'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const kanit = Kanit({subsets: ['latin'], variable: '--font-kanit', weight: ['700']}) 

export const metadata: Metadata = {
  title: "Moodl",
  description: "Track your mood every day!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const header = (
    <header className="p-4 sm:p-8 flex item-center justify-between gap-4">
      <h1 className={`text-base sm:text-lg ${kanit.className}`}>Moodl</h1>
      <div className="flex items-center justify-between">
        placeholder :3
      </div>
    </header>
  )
  
  const footer = (
    <footer className="grid place-items-center">
      <p>
        created with luv :3
      </p>

    </footer>
  )

  return (
    <html lang="en">
      <body
        className={`h-screen justify-between w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen 
        flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
