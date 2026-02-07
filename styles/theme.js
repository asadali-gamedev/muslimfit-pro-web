/**
 * MuslimFit Pro - Web Version Theme
 * Complete color system matching the mobile app
 */

export const theme = {
  // Primary Colors
  primary: {
    main: '#0D7C66',
    dark: '#0A5C4F',
    light: '#E8F5F1',
    gradient: ['#083D32', '#0D5C4C', '#137563'],
    deepGradient: ['#0D4A3F', '#1A6B5A'],
    splashGradient: ['#1A6B5A', '#0D4A3F', '#083D32'],
  },

  // Accent Colors
  accent: {
    gold: '#D4AF37',
    goldGradient: ['#C7A04D', '#E5C568', '#C7A04D'],
    goldDark: '#A38750',
    goldLight: '#F5F0E6',
    cream: '#D4B574',
  },

  // Neutral Colors
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    offWhite: '#F8F9FA',
    background: '#F5F5F5',
    border: '#E5E5E5',
  },

  // Text Colors
  text: {
    primary: '#1A1A1A',
    secondary: '#666666',
    tertiary: '#999999',
    white: '#FFFFFF',
    gold: '#C7A569',
  },

  // Background Variants
  background: {
    main: '#FFFFFF',
    card: '#F8F9FA',
    dark: '#0D4A3F',
    secondary: '#0F3D35',
    darkGradient: ['#0D4A3F', '#1A5C4F', '#0F3D35'],
    light: '#F5F5F5',
    lightCard: '#FFFFFF',
    primaryLight: 'rgba(13, 124, 102, 0.08)',
    goldLight: 'rgba(212, 175, 55, 0.08)',
    infoLight: 'rgba(59, 130, 246, 0.08)',
    successLight: 'rgba(16, 185, 129, 0.08)',
  },

  // Border Colors
  border: {
    light: '#E5E5E5',
    main: '#D1D5DB',
    dark: '#9CA3AF',
  },

  // Status Colors
  status: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    errorLight: 'rgba(239, 68, 68, 0.2)',
    info: '#3B82F6',
  },

  // Dhikr Card Gradient
  dhikr: {
    gradient: ['#0F2027', '#203A43', '#2C5364'],
    textLight: '#8AB4F8',
  },

  // Logo & Splash
  logo: {
    backgroundGradient: ['#1D3D52', '#102331'],
    goldStroke: '#D4AF37',
  },

  // Splash Screen
  splash: {
    background: '#347C56',
    patternColor: '#F5ECD7',
  },

  // Qibla Compass Gradient
  qibla: {
    gradient: ['#1F5F45', '#164344', '#0E2943'],
  },

  // Hajj Guide
  hajj: {
    gradient: ['#0D7C66', '#0A5C4F'],
  },

  // Umrah Guide
  umrah: {
    gradient: ['#1ABC9C', '#16A085'],
  },

  // Kalmas
  kalmas: {
    primary: '#0D7C66',
    gradient: ['#1A6B5A', '#0D4A3F'],
    glassLight: 'rgba(255, 255, 255, 0.1)',
    glassBorder: 'rgba(255, 255, 255, 0.15)',
    glassOverlay: 'rgba(255, 255, 255, 0.2)',
    textLight: 'rgba(255, 255, 255, 0.7)',
  },

  // Prayer Time Gradients
  prayerGradients: {
    fajr: ['#667eea', '#764ba2'],
    sunrise: ['#f093fb', '#f5576c'],
    dhuhr: ['#4facfe', '#00f2fe'],
    asr: ['#fa709a', '#fee140'],
    maghrib: ['#f57f17', '#ff6f00'],
    isha: ['#2c3e50', '#34495e'],
  },

  // Glass/Overlay Effects
  overlay: {
    dark: 'rgba(0, 0, 0, 0.5)',
    light: 'rgba(255, 255, 255, 0.1)',
    card: 'rgba(255, 255, 255, 0.95)',
  },

  // Islamic Pattern
  pattern: {
    overlay: 'rgba(13, 74, 63, 0.1)',
    stroke: '#D4AF37',
    fill: '#FFFFFF',
    dark: '#0D4A3F',
    light: '#FFFFFF',
    opacity: {
      subtle: 0.05,
      medium: 0.08,
      visible: 0.6,
    },
  },

  // Ramadan Special Theme
  ramadan: {
    primary: '#0D7C66',
    dark: '#083D32',
    darker: '#052520',
    light: '#E8F5F1',
    gold: '#D4AF37',
    richGold: '#C7A04D',
    paleGold: '#F5F0E6',
    teal: '#0A8967',
    deepTeal: '#0A5C4F',
    cream: '#D4B574',
    pureWhite: '#FFFFFF',
    softWhite: '#F3F4F6',
    lightGray: '#9CA3AF',
    nightGradient: ['#083D32', '#0D5C4C'],
    goldenGradient: ['#C7A04D', '#D4AF37'],
    spiritualGradient: ['#052520', '#083D32', '#0D4A3F'],
    moonGradient: ['#0D7C66', '#0FA968'],
    dawnGradient: ['#0A5C4F', '#0D7C66'],
    cardGradient: ['rgba(212, 175, 55, 0.15)', 'rgba(199, 160, 77, 0.08)'],
    glassLight: 'rgba(255, 255, 255, 0.1)',
    glassBorder: 'rgba(255, 255, 255, 0.15)',
    glassOverlay: 'rgba(255, 255, 255, 0.2)',
    goldBackground: 'rgba(212, 175, 55, 0.19)',
    iconBg: 'rgba(212, 175, 55, 0.2)',
    iconBorder: 'rgba(212, 175, 55, 0.3)',
    modalOverlay: 'rgba(0, 0, 0, 0.8)',
    textLight: 'rgba(255, 255, 255, 0.7)',
    textMedium: 'rgba(255, 255, 255, 0.8)',
    textDim: 'rgba(255, 255, 255, 0.6)',
    textSemiDim: 'rgba(255, 255, 255, 0.5)',
    textBright: 'rgba(255, 255, 255, 0.9)',
    borderLight: 'rgba(255, 255, 255, 0.3)',
    borderMedium: 'rgba(255, 255, 255, 0.2)',
    goldPale: 'rgba(212, 175, 55, 0.1)',
    goldMedium: 'rgba(212, 175, 55, 0.2)',
    goldBorder: 'rgba(212, 175, 55, 0.3)',
  },

  // Dua Categories
  duaCategories: {
    morning: '#F59E0B',
    evening: '#8B5CF6',
    sleep: '#6366F1',
    food: '#10B981',
    travel: '#3B82F6',
    ramadan: '#D4AF37',
    default: '#0D7C66',
  },
};

export default theme;
