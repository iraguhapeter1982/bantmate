// Home page component (this is the main landing page)
// In App Router, this file represents the route "/"
export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to <span className="text-primary-600">Bantmate</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your journey into modern web development starts here. 
          This is a Next.js application built with the App Router and styled with Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4">
          <button className="btn-primary">
            Get Started
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
            Learn More
          </button>
        </div>
      </section>

      {/* Features section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-primary-600 text-xl font-bold">🚀</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Performance</h3>
          <p className="text-gray-600">
            Built with Next.js for optimal performance and developer experience.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-primary-600 text-xl font-bold">🎨</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Beautiful Design</h3>
          <p className="text-gray-600">
            Styled with Tailwind CSS for modern and responsive designs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-primary-600 text-xl font-bold">⚡</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy to Use</h3>
          <p className="text-gray-600">
            Simple and intuitive interface that's perfect for beginners.
          </p>
        </div>
      </section>
    </div>
  )
}