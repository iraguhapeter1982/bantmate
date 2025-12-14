# Bantmate

A modern Next.js application built with TypeScript, Tailwind CSS, and the App Router. This project serves as a great starting point for learning Next.js development.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** that works on all devices
- **Modern Architecture** with clean code structure
- **SEO Optimized** with proper metadata

## 📁 Project Structure

```
Bantmate/
├── app/                  # App Router pages and layouts
│   ├── about/           # About page
│   │   └── page.tsx
│   ├── globals.css      # Global CSS with Tailwind directives
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page
├── components/          # Reusable UI components
│   └── Navbar.tsx       # Navigation component
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## 🛠️ Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration includes:

- Custom color palette for the Bantmate brand
- Responsive design utilities
- Custom component classes in `globals.css`

## 📱 Components

### Navbar

A responsive navigation component with:

- Desktop and mobile layouts
- Animated hamburger menu
- Smooth transitions
- Accessibility features

## 🎯 Learning Points

This project demonstrates:

1. **App Router**: Modern Next.js routing with `app/` directory
2. **Server Components**: Default server-side rendering
3. **Client Components**: Interactive components with `'use client'`
4. **TypeScript Integration**: Full type safety throughout
5. **Tailwind CSS**: Utility-first styling approach
6. **Component Architecture**: Reusable and maintainable components

## 🔧 Customization

Feel free to customize:

- Brand colors in `tailwind.config.js`
- Component styles in `globals.css`
- Layout structure in `app/layout.tsx`
- Add new pages in the `app/` directory

## 📚 Next Steps

To extend this project, consider adding:

- More pages and routes
- API routes for backend functionality
- Database integration
- Authentication
- State management
- Testing setup

## 🤝 Contributing

This is a learning project, but feel free to suggest improvements or use it as a template for your own projects!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🎉**

Built with ❤️ using Next.js and Tailwind CSS
