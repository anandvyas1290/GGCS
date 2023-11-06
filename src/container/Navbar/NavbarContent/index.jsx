import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// import logo from "../../../assets/Navbar/logo.svg";
// import logo from "../../../assets/Navbar/logo.png";
import logo from "../../../assets/Navbar/GGCS-Logo.svg"

import { PrimaryBtn } from "../../../components/Button";

const navMenu = [
    { id: 0, label: "Home", slug: "/" },
    { id: 1, label: "About", slug: "/about" },
    { id: 2, label: "Services", slug: "/services" },
    { id: 3, label: "Why GGCS", slug: "/why-ggcs" },
    { id: 4, label: "Blog", slug: "/blog" },
    { id: 5, label: "Contact", slug: "/contact" },
];
export default function NavbarContent(props) {
    let scrollRef = useRef();
    let navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
    });

    const onScroll = () => {
        // console.log(scrollRef.current);
        let ele = document.querySelector(".header");
        // console.log(ele.attributes);
        // fixed top-5 animate-fadeInDown
    };

    return (
        <div
            className="header px-4 mt-1 border rounded-full border-white bg-transparent backdrop-blur shadow-header"
            ref={scrollRef}
        >
            <div className="max-w-full flex justify-between items-center">
                <div className="flex items-center h-[80px]">
                    <img
                        src={logo}
                        alt="ggcs"
                        className="h-full w-full cursor-pointer"
                        onClick={() => navigate("/")}
                    />
                </div>
                <div className="flex items-center">
                    {navMenu?.map((item) => (
                        <div
                            className="flex items-center !mr-12 cursor-pointer text-lg !font-medium text-black1 hover:text-primary transition-all duration-200"
                            key={item?.id}
                            onClick={() => navigate(item?.slug)}
                        >
                            <p>{item?.label}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <PrimaryBtn
                        bgColor="bg-primaryBtn"
                        className="border-primaryBtn"
                    >
                        Contact Us
                    </PrimaryBtn>
                </div>
            </div>
        </div>
    );
}

// resolve: {
//     alias: {
//         src: "/src",
//         components: "/src/components",
//     },
// },

// colors: {
//     "tp-common-white": "#ffffff",
//     "tp-common-black": "#000",
//     "tp-common-1": "#3eb9ff",
//     "tp-common-2": "#abbf78",
//     "tp-common-3": "#ffb876",
//     "tp-common-4": "#ffa0c9",
//     "tp-common-5": "#e4f7ff",
//     "tp-common-6": "#fff2d6",
//     "tp-common-7": "#e3e8ff",
//     "tp-common-8": "#ffe4e4",
//     "tp-common-9": "#d2f8ec",
//     "tp-common-10": "#ffe4f3",
//     "tp-common-11": "#010f1c",
//     "tp-heading-primary": "#0c1338",
//     "tp-heading-secondary": "#0f1123",
//     "tp-grey-1": "#6c6e76",
//     "tp-grey-2": "#93959f",
//     "tp-grey-3": "#565764",
//     "tp-grey-4": "#666666",
//     "tp-grey-5": "#8a8a8d",
//     "tp-grey-6": "#c3c4cd",
//     "tp-grey-7": "#414250",
//     "tp-grey-8": "#55585b",
//     "tp-text-body": "#565764",
//     "tp-text-1": "#271d3a",
//     "tp-theme-primary": "#4260ff",
//     "tp-theme-secondary": "#131683",
//     "tp-theme-3": "#05003b",
//     "tp-theme-green": "#59ba41",
//     "tp-theme-apple": "#f5f1eb",
//     "tp-theme-dark-blue": "#1e2b8a",
//     "tp-theme-blue": "#775afc",
//     "tp-border-1": "#f0f1f4",
//     "tp-border-5": "#000",
// },
