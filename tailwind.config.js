/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		screens: {
			md: "560px",
			lg: "768px",
			xl: "1024px",
		},
		extend: {
			fontFamily: {
				nunito: ["Nunito Sans", "sans-serif"],
			},
			aspectRatio: {
				"4/3": "4 / 3",
			},
		},
		colors: {
			darkModeElements: "hsl(209, 23%, 22%)",
			darkModeBackground: "hsl(207, 26%, 17%)",
			lightModeText: "hsl(200, 15%, 8%)",
			lightModeInput: "hsl(0, 0%, 52%)",
			lightModeBackground: "hsl(0, 0%, 98%)",
			lightWhite: "hsl(0, 0%, 100%)",
		},
	},
	plugins: [],
};
