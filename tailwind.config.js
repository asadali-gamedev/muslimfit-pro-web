/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          main: '#0D7C66',
          dark: '#0A5C4F',
          light: '#E8F5F1',
          DEFAULT: '#0D7C66',
        },
        // Accent Gold
        accent: {
          gold: '#D4AF37',
          'gold-dark': '#A38750',
          'gold-light': '#F5F0E6',
          cream: '#D4B574',
          DEFAULT: '#D4AF37',
        },
        // Background Colors
        background: {
          main: '#FFFFFF',
          card: '#F8F9FA',
          dark: '#0D4A3F',
          secondary: '#0F3D35',
          light: '#F5F5F5',
        },
        // Text Colors
        text: {
          primary: '#1A1A1A',
          secondary: '#666666',
          tertiary: '#999999',
          gold: '#C7A569',
        },
        // Status Colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
        // Ramadan Theme
        ramadan: {
          primary: '#0D7C66',
          dark: '#083D32',
          gold: '#D4AF37',
          cream: '#D4B574',
        },
        // Prayer Time Colors
        prayer: {
          fajr: '#667eea',
          dhuhr: '#4facfe',
          asr: '#fa709a',
          maghrib: '#f57f17',
          isha: '#2c3e50',
        },
      },
      fontFamily: {
        arabic: ['Amiri', 'serif'],
        urdu: ['Noto Nastaliq Urdu', 'serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #083D32, #0D5C4C, #137563)',
        'gradient-gold': 'linear-gradient(135deg, #C7A04D, #E5C568, #C7A04D)',
        'gradient-ramadan': 'linear-gradient(135deg, #083D32, #0D5C4C)',
        'gradient-dark': 'linear-gradient(135deg, #0D4A3F, #1A5C4F, #0F3D35)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.3)',
      },
      backdropBlur: {
        'glass': '10px',
      },
    },
  },
  plugins: [],
}
