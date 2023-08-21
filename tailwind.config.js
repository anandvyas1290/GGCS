/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#775AFC",
                white1: "#ffffff",
                black1: "#271D3A",
                black2: "#010F1C",
                primaryBtn: "#775AFC",
                light1: "rgba(119, 90, 252, 0.1)",
                grey1: "#55585B",
                grey2: "#9A9B9C",
                grey3: "#F9F9F9",
                primaryBtn: "#775AFC",
                // heroHeading: 'linear-gradient(90deg, #501E9C 0%, #A44CEE 43.75%, #FF847F 100%)',
                
            },
            fontFamily: {
                jakarta: " Plus Jakarta Sans, sans-serif",
            },
            animation: {
                upslide: "upslide 4s forwards infinite alternate",
                shape2: "shape2 6s infinite linear",
                shape3: "shape2 8s infinite linear",
                shape4: "shape2 7s infinite linear",
                services: "all 0.3s ease-in-out 0s",
            },
            keyframes: {
                upslide: {
                    "0%, 20%, 50%, 80%, 100%": {
                        transform: "translateY(0)",
                    },
                    "40%": {
                        transform: "translateY(-20px)",
                    },
                    " 60%": {
                        transform: "translateY(-10px)",
                    },
                },
                shape2: {
                    "0%": {
                        transform: "translate(0px, 0px)",
                    },

                    "20%": {
                        transform: "translate(20px, -5px)",
                    },
                    "40%": {
                        transform: "translate(50px, 20px)",
                    },
                    "60%": {
                        transform: "translate(20px, 50px)",
                    },
                    "80%": {
                        transform: "translate(-20px, 30px)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px)",
                    },
                },
            },
        },
    },
    plugins: [],
};
