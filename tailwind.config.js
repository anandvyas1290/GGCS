/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/lib/esm/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#775AFC",
                white1: "#ffffff",
                white2: "#DDE2FF",
                black1: "#271D3A",
                black2: "#010F1C",
                light1: "rgba(119, 90, 252, 0.1)",
                light2: "#989899",
                grey1: "#55585B",
                grey2: "#9A9B9C",
                grey3: "#F9F9F9",
                grey4: "#6F7276",
                grey5: "#F5F5F5",
                grey6: "#565764",
                grey7: "#F1F2F6",
                blue1: "#4260FF",
                primaryBtn: "#775AFC",
                darkBlue: "#1E2B8A",
                // heroHeading: 'linear-gradient(90deg, #501E9C 0%, #A44CEE 43.75%, #FF847F 100%)',
            },
            fontFamily: {
                jakarta: " Plus Jakarta Sans, sans-serif",
            },
            backgroundImage: {
                blogBanner: "url('assets/blog/banner.webp')",
            },
            borderRadius: { processImg: "51% 49% 77% 23%/65% 50% 50% 35%" },
            boxShadow: {
                header: "0px 10px 30px rgba(1,15,28,0.1)",
                services: "0 -1px 0 rgba(110, 56, 255, 0.3)",
                contact:
                    "linear-gradient(69.83deg, #501E9C -8.16%, #A44CEE 49.19%, #FF847F 102.99%);",
                shadow1: "rgba(1, 15, 28, 0.14)",
                business1: "0px 1px 1px rgba(1, 15, 28, 0.2)",
                business2: "0px 20px 30px rgba(1, 15, 28, 0.1)",
                shadow2: "0px 25px 70px rgba(8, 10, 55, 0.1)",
                serviceVideo: "30px 30px 40px rgba(1, 15, 28, 0.2)",
                blogCard: "0px 1px 1px rgba(12, 19, 56, 0.06)",
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
                servicesSwing:
                    "servicesSwing 3s ease-in-out 0.1s forwards infinite alternate",
                servicesStar1: "servicesStar 1.5s forwards infinite alternate",
                servicesStar2: "servicesStar 2s forwards infinite alternate",
                servicesStar3: "servicesStar 2.2s forwards infinite alternate",
                servicesStar4: "servicesStar 1s forwards infinite alternate",
                blinkTransform1:
                    "blinkTransform 4s ease-in-out forwards infinite alternate",
                blinkTransform2:
                    "blinkTransform 5s ease-in-out forwards infinite alternate",
                blogShape: "blogShape 2.5s linear 0s infinite alternate",
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
                        transform: "translateY(0)",
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
                servicesSwing: {
                    "0%": {
                        transform: "rotate(3deg)",
                    },
                    "100%": {
                        transform: "rotate(-3deg)",
                    },
                },
                servicesStar: {
                    "0%": {
                        transform: "scale(0.5)",
                    },
                    "100%": {
                        transform: "scale(1)",
                    },
                },
                blinkTransform: {
                    "0%": {
                        transform: "scale(0.7)",
                        opacity: 0.8,
                    },
                    "50%": {
                        transform: "scale(1)",
                        opacity: 1,
                    },
                },
                blogShape: {
                    "0%": {
                        transform: "translateY(-20px)",
                    },
                    "100%": {
                        transform: "translateY(0px)",
                    },
                },
            },
            backgroundImage: {
                darkBg: 'url("/funfact1.webp")',
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
