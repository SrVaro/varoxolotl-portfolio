/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'text': '#d4e8f7',
			'background': '#2f4550',
			'primary': '#db5375',
			'secondary': '#102638',
			'accent': '#0597ff',
		},
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif']
			  },
			  keyframes: {
				"slide-in-blurred-bottom": {
					"0%": {
						transform: "translateX(-200%)",
						filter: "blur(5px)",
					  	opacity: "0"
					},
					"100%": {
						transform: "translateX(0)",
						filter: "blur(0)",
						opacity: "1",
					}
				  },
				"fade-in-down": {
					"0%": {
						opacity: "0", 
						transform: "translateY(-40%)"
					},
					"50%": {
						opacity: "1",
						transform: "translateY(0%)",
					},
					"100%": {
						opacity: "0", 
						transform: "translateY(40%)",
					}
				}
				},
				animation: {
				  "slide-in-blurred-bottom-0": "slide-in-blurred-bottom 0.7s cubic-bezier(.06,.18,.7,1.04) forwards",
				  "slide-in-blurred-bottom-1": "slide-in-blurred-bottom 0.9s cubic-bezier(.06,.18,.7,1.04) forwards",

				  "fade-in-down": "fade-in-down linear forwards",
				},
			  supports: {
				"no-scroll-driven-animations": "not(animation-timeline: scroll())"
			  }
		}
	},
	plugins: []
}


