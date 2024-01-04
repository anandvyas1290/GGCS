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
                mainLight: "#94d2bd",
                mainDark: "#0a9396",
                main3: "#2d6a4f",
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
                grey8: "#544D4F",
                blue1: "#4260FF",
                blue2: "#1A9FBD",
                blue3: "#3470E4",
                primaryBtn: "#775AFC",
                darkBlue: "#1E2B8A",
                card1: "#4c49ea",
                card2: "#3ecd5e",
                card3: "#e44002",
                card4: "#952aff",
                card5: "#cd3e94",
                g1: "#501E9C",
                g2: "#A44CEE",
                g3: "#FF847F",
                course1: "#B7B8E5",
                course2: "#E5C9B7",
                course3: "#B7DEE6",
                course4: "#B7E6CF",
                course5: "#AEC6F4",
                skin1: "#CC926E",
                skin2: "#FFDB66",
                purple1: "#6E71CC",
                green1: "#6FCD9E",
                color1: "#ededed",
                color2: "#64c1cf",
                color3: "#b1c3c1",
                color4: "#bd9ac8",
                color5: "#6d87b5",
                color6: "#00acb5",
                color7: "#dbd3b1",
                color8: "#ffffff",
                color9: "#edf2f2",
                color10: "#4d5972",
                silverPlan: "",
            },
            fontFamily: {
                axiforma: "Axiforma",
                primary: "axiformaRegular",
                secondary: "axiformaSemiBold",
                tertiary: "axiformaBold",
                fourth: "proximaRegular",
                fifth: "proximaSemiBold",
                sixth: "proximaBold",
                poet: "poet",
                // jakarta: "Plus Jakarta Sans, sans-serif",
                // serif: "DM Serif Display, serif",
                // sans: '"DM Sans",sans-serif',
                // agbalumo: "Agbalumo, serif",
                // tangerine: "Tangerine, cursive",
                // neuton: '"Neuton", serif',
                // roboto: '"Roboto", sans-serif',
                // Ubuntu: "'Ubuntu', sans-serif",
            },
            backgroundImage: (theme) => ({
                silverPlan: "linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%)",
                goldPlan: "linear-gradient(315deg, #fec84e 0%, #ffdea8 74%)",
                platinumPlan: "",
                blogBanner: "url('assets/blog/banner.webp')",
                grad: `linear-gradient(to right, 90deg ${theme(
                    "colors.g1"
                )},${theme("colors.g2")} 43.75%, ${theme("colors.g3")} 100%)`,
            }),
            borderRadius: { processImg: "51% 49% 77% 23%/65% 50% 50% 35%" },
            boxShadow: {
                header: "0px 10px 30px rgba(1,15,28,0.1)",
                services: "0 -1px 0 rgba(110, 56, 255, 0.3)",
                contact:
                    "linear-gradient(69.83deg, #501E9C -8.16%, #A44CEE 49.19%, #FF847F 102.99%)",
                shadow1: "rgba(1, 15, 28, 0.14)",
                business1: "0px 1px 1px rgba(1, 15, 28, 0.2)",
                business2: "0px 20px 30px rgba(1, 15, 28, 0.1)",
                shadow2: "0px 25px 70px rgba(8, 10, 55, 0.1)",
                serviceVideo: "30px 30px 40px rgba(1, 15, 28, 0.2)",
                blogCard: "0px 1px 1px rgba(12, 19, 56, 0.06)",
            },
            animation: {
                gradientBg: "gradientBg 2s ease-in-out infinite",
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
                whyGGCSCard: "all .5s ease-in-out",
                flipArrow: "flipArrow 2s linear 0s infinite",
                animation: "fadeIn 3s",
                arrowFadeIn: "arrowFadeIn 0.4s",
                heroBgChange: "heroBgChange 2.5s ease-in-out infinite",
            },
            keyframes: {
                gradientBg: {
                    "0%": {
                        "background-position": "0% 50%",
                    },
                    "50%": {
                        "background-position": "100% 50%",
                    },
                    "100%": {
                        "background-position": "0% 50%",
                    },
                },
                arrowFadeIn: {
                    "0%": {
                        // "padding-left": "-20px",
                        transform: "translateX(-50%)",
                        opacity: 0,
                    },
                    "100%": {
                        // "padding-left": "0px",
                        transform: "translateX(0%)",
                        opacity: 1,
                    },
                },
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
                flipArrow: {
                    "0%": {
                        transform: "rotateZ(90deg) rotateY(0deg)",
                    },
                    "50%": {
                        transform: "rotateZ(90deg) rotateY(90deg)",
                    },
                    "100%": {
                        transform: "rotateZ(90deg) rotateY(0deg)",
                    },
                },
                fadeIn: {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
                heroBgChange: {
                    "0%": {
                        "background-image":
                            "linear-gradient(315deg, #005f73, #94d2bd, rgb(224,210,199,0.3) )",
                    },
                    "25%": {
                        "background-image":
                            "linear-gradient(315deg, #44b09e 0%, #e0d2c7 74%)",
                    },
                    "50%": {
                        "background-image":
                            "linear-gradient(315deg, #44b09e 0%, #e0d2c7 74%)",
                    },
                    "100%": {
                        "background-image":
                            "linear-gradient(315deg, #44b09e 0%, #e0d2c7 74%)",
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

// linear-gradient(to bottom, #4b90a3, #305966)
