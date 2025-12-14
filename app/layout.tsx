import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

// Configure the Inter font from Google Fonts
const inter = Inter({ subsets: ['latin'] })

// Metadata for SEO (Search Engine Optimization)
export const metadata = {
  title: 'Bantmate - Welcome',
  description: 'Welcome to Bantmate - Your awesome web application',
  keywords: 'bantmate, web app, nextjs',
}

// Root layout component that wraps all pages
// This layout will be applied to every page in your app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        {/* Navigation bar appears on all pages */}
        <Navbar />
        
        {/* Main content area where page content will be rendered */}
        <main className="container py-8">
          {children}
        </main>
        
        {/* Footer appears on all pages */}
        <footer className="bg-gray-800 text-white py-6 mt-auto">
          <div className="container text-center">
            <p>&copy; 2025 Bantmate. Built with Next.js and Tailwind CSS.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}