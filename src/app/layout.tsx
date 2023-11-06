import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/app/navbar";
import { Footer } from "@/app/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cosmic Universe',
  description: 'Explore, Harvest, Mine, Build Settlements, Engage in PVP, Competitions and Events!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="pt-8">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        </body>
    </html>
  )
}
