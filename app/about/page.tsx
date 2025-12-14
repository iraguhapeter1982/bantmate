// About page component
// In App Router, this file represents the route "/about"
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Page header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">About Bentmate</h1>
        <p className="text-xl text-gray-600">
          Learn more about our mission and what makes us unique
        </p>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Bentmate was created as a learning project to demonstrate modern web development 
              practices using Next.js and Tailwind CSS. This project showcases the power of 
              the App Router and component-based architecture.
            </p>
            <p>
              Our goal is to provide a clean, well-documented codebase that serves as a 
              foundation for building amazing web applications. Every component is crafted 
              with care and includes helpful comments for learning.
            </p>
            <p>
              Whether you're just starting your web development journey or looking to 
              explore Next.js 13+ features, Bentmate provides a solid starting point 
              with best practices built in.
            </p>
          </div>
        </div>

        {/* Image/visual element placeholder */}
        <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg h-64 flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="text-6xl">🎯</div>
            <p className="text-primary-700 font-medium">Your Vision, Our Code</p>
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">🎓 Learning First</h3>
            <p className="text-gray-600">
              We believe in code that teaches. Every file includes detailed comments 
              to help you understand what's happening and why.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">⚡ Performance Focused</h3>
            <p className="text-gray-600">
              Built with modern tools and best practices to ensure your app is 
              fast, efficient, and scalable.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">🎨 Design Excellence</h3>
            <p className="text-gray-600">
              Beautiful, responsive designs that work great on all devices, 
              powered by Tailwind CSS.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">🚀 Future Ready</h3>
            <p className="text-gray-600">
              Using the latest Next.js features like the App Router to prepare 
              you for the future of web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}