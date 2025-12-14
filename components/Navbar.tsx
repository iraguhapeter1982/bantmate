'use client' // This makes it a Client Component (needed for interactivity)

import Link from 'next/link'
import { useState } from 'react'

// Navigation bar component that appears on all pages
export default function Navbar() {
  // State to handle mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
            Bentmate
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              About
            </Link>
            {/* You can add more navigation links here */}
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Toggle mobile menu"
          >
            {/* Hamburger icon */}
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`h-0.5 bg-gray-600 transition-all duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`h-0.5 bg-gray-600 transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 bg-gray-600 transition-all duration-200 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <button className="btn-primary mt-4 w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}