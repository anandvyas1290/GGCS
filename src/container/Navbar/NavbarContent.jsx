import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ppt from "../../assets/PDF/GGCS-PPT.pdf";
import logo from "../../assets/Navbar/GGCSNew.svg";
import Menu from "../../assets/Navbar/menu.svg";

import { navMenu } from "../../db/dummy";
import { PrimaryBtn, RadientBtn } from "../../components/Button";

export default function NavbarContent() {
    const location = useLocation();
    const [state, setState] = useState({
        showMenu: false,
    });
    let navigate = useNavigate();
    let scrollRef = useRef();
    const menuInfoBlockRef = useRef();
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.addEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const handleClickOutside = (event) => {
        if (!menuInfoBlockRef.current?.contains(event.target)) {
            setState((prev) => {
                return { ...prev, showMenu: false };
            });
        }
    };
    const onScroll = () => {
        // console.log(scrollRef.current);
        let ele = document.querySelector(".header");
        // console.log(ele.attributes);
        // fixed top-5 animate-fadeInDown
    };
    const handleOpenMenu = (data = true) => {
        setState((prev) => {
            return { ...prev, showMenu: data };
        });
    };
    const { showMenu } = state;
    return (
        <section
            className={`left-0 right-0 z-[1000] ${
                location?.pathname === "/"
                    ? "max-w-screen-xl mx-auto mt-1 "
                    : "fixed w-full"
            }`}
        >
            <div
                className={`header px-4 shadow-header !bg-white 
                ${
                    location?.pathname === "/"
                        ? "py-1 border rounded-full border-white bg-transparent backdrop-blur"
                        : "fixed w-full"
                }`}
                ref={scrollRef}
            >
                <div
                    className={`relative flex justify-between items-center 
                    ${
                        location?.pathname === "/"
                            ? "max-w-full"
                            : "max-w-screen-xl mx-auto"
                    }`}
                >
                    <div className="flex items-center h-[80px]">
                        <img
                            src={logo}
                            alt="ggcs"
                            className="cursor-pointer h-1/2"
                            onClick={() => navigate("/")}
                        />
                    </div>
                    <div className="flex">
                        <div className="items-center hidden lg:flex">
                            {navMenu?.map((item) => (
                                <div
                                    className={`relative flex items-center  mr-7 xl:!mr-12 p-1 cursor-pointer border-b-[3px] border-transparent text-xl !font-semibold text-black1 hover:text-primary transition-all duration-200 ${
                                        item?.slug === location?.pathname
                                            ? "text-primary !border-primary "
                                            : ""
                                    }`}
                                    key={item?.id}
                                    onClick={() => navigate(item?.slug)}
                                >
                                    <a>{item?.label}</a>
                                    {/* {item?.slug === location?.pathname ? (
                                        <figure className="absolute bottom-0 w-0 h-0 transition-all duration-200 border-b-[5px] border-l-[5px] border-transparent border-r-[5px] left-[45%] border-b-primary" />
                                    ) : null} */}
                                </div>
                            ))}
                        </div>
                        <div className="relative flex items-center justify-between">
                            <span className="hidden lg:block">
                                {/* <PrimaryBtn
                                    bgColor="bg-primaryBtn"
                                    className="border-primaryBtn"
                                    // onClick={() => navigate("/contact")}
                                    onClick={() => navigate("/hire-us")}
                                >
                                    Hire Us
                                </PrimaryBtn> */}

                                {location?.pathname === "/" ? (
                                    <RadientBtn
                                        className="!rounded-full !py-2.5"
                                        onClick={() => navigate("/hire-us")}
                                    >
                                        Hire Us
                                    </RadientBtn>
                                ) : (
                                    <PrimaryBtn
                                        bgColor="bg-primaryBtn"
                                        className="border-primaryBtn"
                                        // onClick={() => navigate("/contact")}
                                        onClick={() => navigate("/hire-us")}
                                    >
                                        Hire Us
                                    </PrimaryBtn>
                                )}
                            </span>

                            <span
                                ref={menuInfoBlockRef}
                                className="block w-10 h-10 lg:hidden sm:h-12 sm:w-12"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setState((prev) => {
                                        return {
                                            ...prev,
                                            showMenu: !state?.showMenu,
                                        };
                                    });
                                }}
                            >
                                <img
                                    src={Menu}
                                    alt=""
                                    className="w-full h-full"
                                />

                                <div
                                    className={`absolute top-10 right-0 md:top-20 lg:hidden lg:w-auto ${
                                        showMenu ? "w-64 !z-[250]" : "hidden"
                                    } `}
                                    id="navbar-default"
                                >
                                    <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:mt-0 md:border-0">
                                        {navMenu?.map((item) => (
                                            <li
                                                className="py-1 text-black"
                                                key={item?.id}
                                                onClick={() => {
                                                    setState((prev) => {
                                                        return {
                                                            ...prev,
                                                            showMenu: false,
                                                        };
                                                    });
                                                    if (
                                                        item?.label2 ===
                                                        "download"
                                                    ) {
                                                        return;
                                                    } else {
                                                        navigate(item?.slug);
                                                    }
                                                }}
                                            >
                                                {item.label2 === "download" ? (
                                                    <a
                                                        download
                                                        onClick={() => {
                                                            window.open(
                                                                ppt,
                                                                "_blank",
                                                                "fullscreen=yes"
                                                            );
                                                        }}
                                                        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                                        aria-current="page"
                                                    >
                                                        {item?.label}
                                                    </a>
                                                ) : (
                                                    <a>{item?.label}</a>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
