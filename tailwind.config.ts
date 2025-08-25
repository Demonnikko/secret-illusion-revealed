import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'cinzel': ['Cinzel', 'serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
				
				// Responsive font sizes
				'responsive-sm': ['clamp(0.875rem, 2vw, 1rem)', { lineHeight: '1.4' }],
				'responsive-base': ['clamp(1rem, 2.5vw, 1.125rem)', { lineHeight: '1.5' }],
				'responsive-lg': ['clamp(1.125rem, 3vw, 1.25rem)', { lineHeight: '1.6' }],
				'responsive-xl': ['clamp(1.25rem, 3.5vw, 1.5rem)', { lineHeight: '1.4' }],
				'responsive-2xl': ['clamp(1.5rem, 4vw, 2rem)', { lineHeight: '1.3' }],
				'responsive-3xl': ['clamp(1.875rem, 5vw, 3rem)', { lineHeight: '1.2' }],
				'responsive-4xl': ['clamp(2.25rem, 6vw, 4rem)', { lineHeight: '1.1' }],
				'responsive-5xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1' }],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				theater: {
					burgundy: 'hsl(var(--theater-burgundy))',
					gold: 'hsl(var(--theater-gold))',
					'light-gold': 'hsl(var(--theater-light-gold))',
					stage: 'hsl(var(--theater-stage))',
					curtain: 'hsl(var(--theater-curtain))',
					spotlight: 'hsl(var(--theater-spotlight))',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
		backgroundImage: {
			'gradient-stage': 'var(--gradient-stage)',
			'gradient-curtain': 'var(--gradient-curtain)',
			'gradient-gold': 'var(--gradient-gold)',
			'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
		},
		perspective: {
			'1000': '1000px',
		},
		transformStyle: {
			'preserve-3d': 'preserve-3d',
		},
		backfaceVisibility: {
			'hidden': 'hidden',
		},
		extend: {
			rotate: {
				'y-180': '180deg',
				'x-180': '180deg',
			},
		},
			boxShadow: {
				'mystical': 'var(--shadow-mystical)',
				'gold-glow': 'var(--shadow-gold-glow)',
				'stage': 'var(--shadow-stage)',
			},
			transitionTimingFunction: {
				'mystical': 'var(--transition-mystical)',
				'curtain': 'var(--transition-curtain)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'spin-gear': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'curtain-open': {
					'0%': { 
						transform: 'scaleX(1)',
						opacity: '1'
					},
					'100%': { 
						transform: 'scaleX(0)',
						opacity: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'mystical-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)',
						filter: 'brightness(1)'
					},
					'33%': { 
						transform: 'translateY(-15px) rotate(2deg)',
						filter: 'brightness(1.2)'
					},
					'66%': { 
						transform: 'translateY(-5px) rotate(-1deg)',
						filter: 'brightness(0.9)'
					}
				},
				'sparkle': {
					'0%, 100%': { 
						opacity: '0',
						transform: 'scale(0) rotate(0deg)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1) rotate(180deg)'
					}
				},
				'sparkle-float': {
					'0%': { transform: 'translateY(0px)' },
					'100%': { transform: 'translateY(-100px)' }
				},
				'typewriter': {
					'0%': { width: '0', opacity: '1' },
					'99%': { opacity: '1' },
					'100%': { width: '100%', opacity: '1' }
				},
				'confetti-fall': {
					'0%': {
						transform: 'translateY(-100vh) rotate(0deg)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(100vh) rotate(720deg)',
						opacity: '0'
					}
				},
				'spotlight-sweep': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'magic-pulse': {
					'0%, 100%': { 
						opacity: '0.6',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.1)'
					}
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.4)' 
					}
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%) skewX(-12deg)' },
					'100%': { transform: 'translateX(200%) skewX(-12deg)' }
				},
				'morph': {
					'0%': { 
						borderRadius: '0.75rem',
						transform: 'scale(1) rotate(0deg)'
					},
					'50%': { 
						borderRadius: '2rem',
						transform: 'scale(1.05) rotate(2deg)'
					},
					'100%': { 
						borderRadius: '0.75rem',
						transform: 'scale(1) rotate(0deg)'
					}
				},
				'parallax-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateX(0px) rotate(0deg)' 
					},
					'33%': { 
						transform: 'translateY(-10px) translateX(5px) rotate(1deg)' 
					},
					'66%': { 
						transform: 'translateY(5px) translateX(-3px) rotate(-0.5deg)' 
					}
				},
				'micro-bounce': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				},
				'micro-shake': {
					'0%, 100%': { transform: 'translateX(0)' },
					'25%': { transform: 'translateX(-2px)' },
					'75%': { transform: 'translateX(2px)' }
				},
				'micro-wiggle': {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(-3deg)' },
					'75%': { transform: 'rotate(3deg)' }
				},
				'micro-glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(255, 215, 0, 0.3)' },
					'50%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)' }
				},
				'flip-horizontal': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(180deg)' },
				},
				'flip-vertical': {
					'0%': { transform: 'rotateX(0deg)' },
					'100%': { transform: 'rotateX(180deg)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'spin-gear': 'spin-gear 3s linear infinite',
				'curtain-open': 'curtain-open 1.5s ease-in-out forwards',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'mystical-float': 'mystical-float 6s ease-in-out infinite',
				'sparkle': 'sparkle 3s ease-in-out infinite',
				'sparkle-float': 'sparkle-float 8s linear infinite',
				'typewriter': 'typewriter 4s steps(60) forwards',
				'confetti-fall': 'confetti-fall 4s ease-in forwards',
				'spotlight-sweep': 'spotlight-sweep 12s linear infinite',
				'magic-pulse': 'magic-pulse 2s ease-in-out infinite',
				'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float-slow': 'float-slow 8s ease-in-out infinite',
				'shimmer': 'shimmer 0.8s ease-out',
				'morph': 'morph 4s ease-in-out infinite',
				'parallax-float': 'parallax-float 10s ease-in-out infinite',
				'micro-bounce': 'micro-bounce 0.3s ease-out',
				'micro-shake': 'micro-shake 0.5s ease-in-out',
				'micro-wiggle': 'micro-wiggle 0.4s ease-in-out',
				'micro-glow': 'micro-glow 1s ease-in-out',
				'flip-horizontal': 'flip-horizontal 0.6s ease-in-out',
				'flip-vertical': 'flip-vertical 0.6s ease-in-out'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }: any) {
			addUtilities({
				'.perspective-1000': {
					perspective: '1000px',
				},
				'.transform-style-preserve-3d': {
					'transform-style': 'preserve-3d',
				},
				'.backface-hidden': {
					'backface-visibility': 'hidden',
				},
				'.rotate-y-180': {
					transform: 'rotateY(180deg)',
				},
				'.rotate-x-180': {
					transform: 'rotateX(180deg)',
				},
				'.rotate-y-0': {
					transform: 'rotateY(0deg)',
				},
				'.rotate-x-0': {
					transform: 'rotateX(0deg)',
				},
			})
		}
	],
} satisfies Config;
