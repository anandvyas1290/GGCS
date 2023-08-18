/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#775AFC",
                white1: "#ffffff",
                black1: "#271D3A",
                primaryBtn: "#775AFC",
            },
        },
    },
    plugins: [],
};
