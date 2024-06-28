/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				"auto-fit-300": "repeat(auto-fit, minmax(300px, 1fr))",
			},
		},
		// colors: {},
	},
	plugins: [],
}
