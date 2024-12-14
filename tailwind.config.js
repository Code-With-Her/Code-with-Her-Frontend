/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonGreen: '#0C821F',
        bgColor: '#FCFCFC',
        textColor: '#21242A',
        orange: '#fcaa06', // Added orange color
      },
      backgroundImage: {
        'footer-gradient': 'linear-gradient(to right, #869499, #E0F7FF)', // Footer gradient
        'hero': 'url(/path/to/your/hero-image.jpg)', // Example: Add a custom background for the hero section
      },
      fontSize: {
        'header-1': '48px',       // Header 1 / Semibold
        'header-2': '40px',       // Header 2 / Bold
        'header-3': '36px',       // Header 3 / Bold
        'header-4': '36px',       // Header 4 / Regular
        'body-1': '36px',         // Body 1 / Semibold
        'body-2': '36px',         // Body 2 / Bold
        'body-3': '32px',         // Body 3 / Regular
        'caption-1': '32px',      // Caption 1 / Semibold
        'caption-2': '32px',      // Caption 2 / Semibold
        'button-1': '40px',       // Button 1 / Bold
        'button-2': '32px',       // Button 2 / Medium
      },
      fontWeight: {
        'semibold': 600,          // Semibold weight
        'bold': 700,              // Bold weight
        'regular': 400,           // Regular weight
        'medium': 500,            // Medium weight
      },
      spacing: {
        '18': '4.5rem',           // Add custom spacing like '18' for 4.5rem
        '72': '18rem',            // Example: Add a custom large spacing value
      },
      borderRadius: {
        'xl': '1.5rem',           // Custom border-radius value
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)', // Light shadow
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.3)',  // Dark shadow
      },
      animation: {
        'slide-slow': 'slide 60s linear infinite', // Slow sliding animation for the category slider
      },
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
    },
  },
  plugins: [],
}
