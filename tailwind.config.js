/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tell Tailwind to look for classes in these files
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // You can customize your theme here
      colors: {
        // Add custom colors for your Bentmate brand
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
    },
  },
  plugins: [
    // Add Tailwind plugins here if needed
  ],
}