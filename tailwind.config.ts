import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        main: '#FF5500',
        bgSecondary: '#130600',
        label: '#7D7D7D',
        grayDark: '#1d1d1d',
        gray: '#393939',

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
      },
      backgroundImage: {
        ourPlansCard: 'url("/card-our-plans.png")',
        'degrade-green':
          'linear-gradient(180deg, rgba(10,32,29,1) 0%, rgba(26,32,31,1) 100%)',
        'degrade-blue':
          'linear-gradient(180deg, rgba(10,25,32,1) 0%, rgba(3,8,10,1) 100%)',
        'degrade-purple':
          'linear-gradient(180deg, rgba(23,9,33,1) 0%, rgba(30,26,34,1) 100%)',
        'degrade-red':
          'linear-gradient(180deg, rgba(29,14,24,1) 0%, rgba(32,27,30,1) 100%)',
        'degrade-gray':
          'linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(0,0,0,1) 100%)',
        'degrade-green-dark':
          'linear-gradient(180deg, rgba(10, 32, 29,1) 0%, rgba(10, 32, 29,.3) 100%)',
        'degrade-green-dark-hover':
          'linear-gradient(180deg, rgba(15, 47, 41,1) 0%, rgba(15, 47, 41,.3) 100%)',
      },
      borderColor: {
        'degrade-green-dark':
          'linear-gradient(180deg, rgba(10, 32, 29,1) 0%, rgba(10, 32, 29,.3) 100%)',
        'degrade-gray-light':
          'linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(57,57,57,1) 51%, rgba(255,255,255,0.6) 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - var(--gap)))',
          },
        },
        'marquee-vertical': {
          from: {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(calc(-100% - var(--gap)))',
          },
        },
        'shiny-text': {
          '0%, 90%, 100%': {
            'background-position': 'calc(-100% - var(--shiny-width)) 0',
          },
          '30%, 60%': {
            'background-position': 'calc(100% + var(--shiny-width)) 0',
          },
        },
        'shimmer-slide': {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0)',
          },
          '15%, 35%': {
            transform: 'translateZ(0) rotate(90deg)',
          },
          '65%, 85%': {
            transform: 'translateZ(0) rotate(270deg)',
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)',
          },
        },
        'reveal-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(80%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'reveal-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-80%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'content-blur': {
          '0%': {
            filter: 'blur(0.3rem)',
          },
          '100%': {
            filter: 'blur(0)',
          },
        },
        meteor: {
          '0%': {
            transform: 'rotate(var(--angle)) translateX(0)',
            opacity: '1',
          },
          '70%': {
            opacity: '1',
          },
          '100%': {
            transform: 'rotate(var(--angle)) translateX(-500px)',
            opacity: '0',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        'shiny-text': 'shiny-text 8s infinite',
        'shimmer-slide':
          'shimmer-slide var(--speed) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        meteor: 'meteor 5s linear infinite',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      fontFamily: {
        hankenGrotesk: ['var(--font-hankenGrotesk)'],
        sourceSans3: ['var(--font-sourceSans3)'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        sm: '16px', // fig16
        xl: '22px', // fig22
        '2xl': '24px', // fig24
        '3xl': '32px', // fig32
        '4xl': '43px', // fig43
        '5xl': '48px', // fig48
        '6xl': '56px', // fig56
        '7xl': '60px', // fig60
        '8xl': '64px', // fig64
      },
      gap: {
        '3': '12px', // fig12
        '6': '24px', // fig24
        '8': '32px', // fig32
        '12': '48px', // fig48
        '18': '72px', // fig72
      },
      margin: {
        '3': '12px', // fig12
        '6': '24px', // fig24
        '12': '48px', // fig48
        '13': '52px', // fig52
        '16': '64px', // fig64
        '18': '72px', // fig72
        '20': '80px', // fig80
      },
      padding: {
        '6': '24px', // fig24
        '20': '80px', // fig80
      },
      width: {
        figFull: 'calc(100% - 120px)',
      },
      height: {
        navMobile: 'calc(100vh - 16px - 86px)',
      },
      maxHeight:{
        accordionNav: 'calc(100vh - 16px - 176px - 50px)',
      },
      transitionTimingFunction: {
        'minor-spring': 'cubic-bezier(0.18,0.89,0.82,1.04)',
      },
      aspectRatio: {
        thumbnail: '632/361',
        grid: '32/30',
      },
    },
  },

  plugins: [tailwindcssAnimate],
};
export default config;
