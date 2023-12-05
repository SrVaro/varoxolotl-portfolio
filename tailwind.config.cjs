/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	mode: 'jit',
	theme: {
		extend: {
			backgroundImage: {
				'hero': "url('/public/hero-bg.svg')",
				'hero-rotated': "url('/public/hero-rotated-bg.svg')",
				'remote-work': "url('/src/assets/remote_work.png')"
			},
			colors: {
				'darkGrey': '#4110C9',
				'Heliotrope':'#FB87FD',
				'Byzantine':'#9E99FF',
				'Veronica':'#973EE1',
				'Thistle':'#B476FB',
				'background':'#E7CCFD',
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif']
			  },
			  keyframes: {
				"scroll-indicator": {
					"0%": {
						opacity: "0",
					},
					"50%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					}
				},
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
				
				},
				"cursor-blink": {
					"0%": {
						opacity: "0"
					}
				},
				"openclose": {
					"0%": {
					  top: "-0.1rem",
					  width: "0"
					},
					"5%": {
					  width: "0"
					},
					"15%": {
					  width: "600px"
					},
					"30%": {
					  top: "-0.1rem",
					  width: "600px"
					},
					"33%": {
					  top: "-0.1rem",
					  width: "0"
					},
					"35%": {
					  top: "-0.1rem",
					  width: "0"
					},
					"36%": {
					  top: "-3rem"
					},
					"48%": {
					  top: "-3rem",
					  width: "475px"
					},
					"62%": {
					  top: "-3rem",
					  width: "475px"
					},
					"66%": {
					  top: "-3rem",
					  width: "0",
					},
					"71%": {
					  top: "-5.9rem",
					  width: "0"
					},
					"86%": {
					  top: "-5.9rem",
					  width: "485px"
					},
					"95%": {
					  top: "-5.9rem",
					  width: "485px"
					},
					"98%": {
					  top: "-5.9rem",
					  width: "0",
					},
					"100%": {
					  top: "-0.1rem",
					  width: "0"
					}
				  }
				},
				animation: {
					"slide-in-blurred-bottom-0": "slide-in-blurred-bottom 0.7s cubic-bezier(.06,.18,.7,1.04) forwards",
					"slide-in-blurred-bottom-1": "slide-in-blurred-bottom 0.9s cubic-bezier(.06,.18,.7,1.04) forwards",
					"scroll-indicator": "scroll-indicator 0.5s linear forwards",
					"fade-in-down": "fade-in-down linear forwards",
					"cursor-blink": "cursor-blink 1s steps(2) infinite",
					"openclose": "openclose 10s steps(30) infinite;"
				},
			  supports: {
				"no-scroll-driven-animations": "not(animation-timeline: scroll())"
			  }
		}
	},
	plugins: [ 
		plugin(function({ addUtilities }) {
		addUtilities({
			'.no-scrollbar::-webkit-scrollbar': {
				'display': 'none',
			},
			'.no-scrollbar': {
				'-ms-overflow-style': 'none', 
				'scrollbar-width': 'none'
			}
		})
	  })]
}


