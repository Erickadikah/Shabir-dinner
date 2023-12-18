/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        green: '0 4px 6px -1px rgba(0, 255, 0, 0.1), 0 2px 4px -1px rgba(0, 255, 0, 0.06)',
        blue: '0 4px 6px -1px rgba(0, 0, 255, 0.1), 0 2px 4px -1px rgba(0, 0, 255, 0.06)',
        pink: '0 4px 6px -1px rgba(255, 0, 255, 0.1), 0 2px 4px -1px rgba(255, 0, 255, 0.06)',
      },
      colors: {
        customWhite:'#FFFFFF',
        customYellow: '#FFF3DA',
      },
    },
  },
  plugins: [],
}
