'use client' // Client component for password input and session management

import { useState, useEffect } from 'react'

interface PasswordProtectionProps {
  children: React.ReactNode
}

// Password protection component that wraps the entire app
// Blocks access until correct password is entered and remembers authentication
export default function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null) // null = loading
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Check if user is already authenticated on component mount
  useEffect(() => {
    const launchPassword = process.env.NEXT_PUBLIC_LAUNCH_PASSWORD
    
    // If no password is configured, allow access immediately
    if (!launchPassword) {
      setIsAuthenticated(true)
      return
    }
    
    // Otherwise check localStorage for existing authentication
    const storedAuth = localStorage.getItem('bantmate_authenticated')
    setIsAuthenticated(storedAuth === 'true')
  }, [])

  // Handle password form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Get the launch password from environment variable
    const launchPassword = process.env.NEXT_PUBLIC_LAUNCH_PASSWORD

    // If no password is configured, allow access (fallback for development)
    if (!launchPassword) {
      setIsAuthenticated(true)
      setIsLoading(false)
      return
    }

    // Check if entered password matches
    if (password === launchPassword) {
      // Store authentication in localStorage
      localStorage.setItem('bantmate_authenticated', 'true')
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password. Please try again.')
    }

    setIsLoading(false)
    setPassword('') // Clear password field
  }

  // Show loading state while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
        </div>
      </div>
    )
  }

  // If authenticated, show the actual app
  if (isAuthenticated) {
    return <>{children}</>
  }

  // Show password protection screen
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-primary-600">Bantmate</h1>
          <p className="text-gray-600">Coming Soon</p>
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-gray-700">
            We're putting the finishing touches on something amazing. 
            Enter the access code to preview the site.
          </p>
        </div>

        {/* Password form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Access Code
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter access code"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
              disabled={isLoading}
            />
          </div>

          {/* Error message */}
          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`btn-primary w-full ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Checking...' : 'Access Site'}
          </button>
        </form>

        {/* Footer note */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Don't have access? Contact us for early access.
          </p>
        </div>
      </div>
    </div>
  )
}