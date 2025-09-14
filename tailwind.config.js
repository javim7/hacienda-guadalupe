// tailwind.config.js
module.exports = {
    content: [
      './src/pages/**/*.{js,jsx,ts,tsx}',
      './src/components/**/*.{js,jsx,ts,tsx}',
      './src/features/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        screens: {
          'mobile': '480px',    // Custom breakpoint for mobile
          'tablet': '950px',    // Custom breakpoint for tablet
        },
      },
    },
    plugins: [],
  }
  