export const content = [
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}',
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  colors: {
    'blue': '#1fb6ff',
    'purple': '#9c27b0',
    'pink': '#ff49db',
    'orange': '#ff7849',
    'green': '#13ce66',
    'yellow': '#ffc82c',
    'gray-dark': '#273444',
    'gray': '#141416',
    'gray-light': '#d3dce6',
    'custom-blue': '#273A5C',
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  extend: {
    spacing: {
      '40': '36rem',
      'icon': '1000px',
      'iconwidth': '70px'
    },
    // borderRadius: {
    //   '4xl': '2rem',
    // }
  }
};