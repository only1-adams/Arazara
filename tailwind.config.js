/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				main: "#FBD507",
				customBlack: "#242424",
				lightMain: "#FFFDEF",
			},
			fontFamily: {
				custom: "DM Sans, sans-serif",
			},
			boxShadow: {
				playbtn: "0px 4px 25px 4px rgba(0, 0, 0, 0.15)",
			},
		},
	},
	plugins: [],
};
