import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundSize: {
        noise: '64px', // Custom size (50% of the container)
      },
      fontFamily: {
        sfpro: ['var(--font-sf)'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        color: {
          bg: 'var(--color-bg)',
          card: 'var(--color-card)',
          stroke: 'var(--color-stroke)',
          title: 'var(--color-title)',
          subtitle: 'var(--color-subtitle)',
          emoji: 'var(--color-emoji)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        enter: 'fadeInbottom 400ms ease-out',
        leave: 'fadeOut 400ms ease-in forwards',
      },
      keyframes: {
        fadeInbottom: {
          '0%': {
            opacity: '0',
            transform: 'translateY(5rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeOut: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      screens: {
        'sm-max': { max: '640px' },
        // => @media (max-width: 640px) { ... }

        'md-max': { max: '768px' },
        // => @media (max-width: 768px) { ... }

        'lg-max': { max: '1024px' },
        // => @media (max-width: 1024px) { ... }

        'xl-max': { max: '1280px' },
        // => @media (max-width: 1280px) { ... }

        '2xl-max': { max: '1536px' },
        // => @media (max-width: 1536px) { ... }
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
