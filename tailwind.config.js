/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#775AFC",
                white1: "#ffffff",
                black1: "#271D3A",
                black2:'#010F1C',
                primaryBtn: "#775AFC",
                light1:"rgba(119, 90, 252, 0.1)",
                grey1:'#55585B',
                grey2:'#9A9B9C'

                
            },
        },
    },
    plugins: [],
};
