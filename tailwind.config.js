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
                grey4: "#6F7276",
                primaryBtn: "#775AFC",
                // heroHeading: 'linear-gradient(90deg, #501E9C 0%, #A44CEE 43.75%, #FF847F 100%)',
            },
            fontFamily: {
                jakarta: " Plus Jakarta Sans, sans-serif",
            },
            borderRadius: { processImg: "51% 49% 77% 23%/65% 50% 50% 35%" },
            boxShadow: {
                header: "0px 10px 30px rgba(1,15,28,0.1)",
                services: "0 -1px 0 rgba(110, 56, 255, 0.3)",
                contact:'linear-gradient(69.83deg, #501E9C -8.16%, #A44CEE 49.19%, #FF847F 102.99%);'
            },
            animation: {
                fadeInDown:
                    "fadeInDown 500ms ease-in-out 0s normal none 1 running",
                upslide: "upslide 4s forwards infinite alternate",
                shape2: "shape2 6s infinite linear",
                shape3: "shape2 8s infinite linear",
                shape4: "shape2 7s infinite linear",
                services: "all 0.3s ease-in-out 0s",
                imgBorder: "imgBorder 5s linear infinite alternate",
                dashShape: "dashShape 30s linear forwards infinite",
            },
            keyframes: {
                fadeInDown: {
                    "0%": {
                        opacity: 0,
                        "-webkit-transform": "translateY(-20px)",
                        "-ms-transform": "translateY(-20px)",
                        transform: "translateY(-20px)",
                    },
                    "100%": {
                        opacity: 1,
                        "-webkit-transform": "translateY(0)",
                        "-ms-transform": "translateY(0)",
                        transform: " translateY(0)",
                    },
                },
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
                imgBorder: {
                    "0%": {
                        "-webkit-border-radius":
                            "51% 49% 77% 23%/65% 50% 50% 35%",
                        "-moz-border-radius": "51% 49% 77% 23%/65% 50% 50% 35%",
                        "border-radius": "51% 49% 77% 23%/65% 50% 50% 35%",
                    },
                    "100%": {
                        "-webkit-border-radius":
                            "30% 70% 28% 72%/53% 69% 31% 47%",
                        "-moz-border-radius": "30% 70% 28% 72%/53% 69% 31% 47%",
                        "border-radius": "30% 70% 28% 72%/53% 69% 31% 47%",
                    },
                },
                dashShape: {
                    "100%": {
                        "stroke-dashoffset": 0,
                    },
                },
            },
        },
    },
    plugins: [],
};
