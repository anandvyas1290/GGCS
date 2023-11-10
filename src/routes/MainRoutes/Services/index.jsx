import React, { useEffect } from "react";

// import bgMain from "../../../assets/services/bgMain.webp";
// import design1 from "../../../assets/services/design1.webp";
// import design2 from "../../../assets/services/design2.webp";
// import design3 from "../../../assets/services/design3.webp";
// import design4 from "../../../assets/services/design4.webp";
// import design5 from "../../../assets/services/design5.webp";
// import design6 from "../../../assets/services/design6.webp";
// import banner from "../../../assets/services/banner.webp";
import socialTree from "../../../assets/services/socialTree.webp";
import list1 from "../../../assets/home/process/list1.svg";
import list2 from "../../../assets/home/process/list2.svg";
import list3 from "../../../assets/home/process/list3.svg";

import pinterest from "../../../assets/services/pinterest.webp";
import facebook from "../../../assets/services/facebook.webp";
import instagram from "../../../assets/services/instagram.webp";
import linkedin from "../../../assets/services/linkedin.webp";
import business1 from "../../../assets/services/business1.webp";
import business2 from "../../../assets/services/business2.webp";
import business3 from "../../../assets/services/business3.webp";
import videoBanner from "../../../assets/services/videoBanner.webp";
import play from "../../../assets/services/play.svg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import GradientBgImg from "../../../assets/SEO/optimize-bg.webp";
import ClientImg from "../../../assets/SEO/optimize-bg-2.webp";
import InputImg from "../../../assets/SEO/optimize-shape-2.webp";
import StatImg from "../../../assets/SEO/optimize-shape-1.webp";
// import { PrimaryBtn } from "../../../components/Button";

import { Line1, Line2 } from "../../../components/UI/ProcessDash";
import { Price, servicesData, serviceSocial } from "../../../db/dummy";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';

export default function Services(props) {
    const navigate = useNavigate()
    const processData = [
        {
            id: 1,
            icon: list1,
            label: "Creative Ideas",
            desc: "Keyword research and other market research under the SEO analytics umbrella.",
        },
        {
            id: 2,
            icon: list2,
            label: "Data Collection",
            desc: "Keyword research and other market research under the SEO analytics umbrella.",
        },
        {
            id: 3,
            icon: list3,
            label: "Targeting",
            desc: "Keyword research and other market research under the SEO analytics umbrella.",
        },
    ];

    const businessData = [
        {
            heading: "Growing your business",
            desc: "With GGCS, you get everything you need for a fast website",
            image: business1,
        },
        {
            heading: "Speed Optimization",
            desc: "With GGCS, you get everything you need for a fast website",
            image: business2,
        },
        {
            heading: "Testing Capabilities",
            desc: "With GGCS, you get everything you need for a fast website",
            image: business3,
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 625,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="font-jakarta">
            {/* <section className="pt-44 pb-80 relative bg-gradient-to-r from-[#4260FF] to-[#2346FF]">
                <div className="absolute top-0 left-0 w-full h-full mix-blend-overlay opacity-80 -z-[1px]">
                    <img
                        src={bgMain}
                        alt="social-marketing"
                        className="w-full h-full object-cover"
                    />
                    <div>
                        <img
                            src={design1}
                            alt="social-marketing"
                            className="absolute -top-[12%] right-[11%] animate-servicesSwing origin-bottom-left"
                        />
                        <img
                            src={design2}
                            alt="social-marketing"
                            className="absolute bottom-[2%] 1left-[2%] animate-servicesSwing origin-bottom-left"
                        />
                        <img
                            src={design3}
                            alt="social-marketing"
                            className="absolute bottom-[48%] left-[14%] animate-servicesStar1"
                        />
                        <img
                            src={design4}
                            alt="social-marketing"
                            className="absolute bottom-[42%] left-[15.5%] animate-servicesStar2"
                        />
                        <img
                            src={design5}
                            alt="social-marketing"
                            className="absolute bottom-[48%] left-[16.3%] animate-servicesStar3"
                        />
                        <img
                            src={design6}
                            alt="social-marketing"
                            className="absolute top-[14%] right-[15%] animate-servicesStar4"
                        />
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto px-3 sm:px-8 md:px-14">
                    <div className="lg:w-10/12">
                        <p className="text-lg font-medium text-white2 mb-4">
                            Social Media Marketing
                        </p>
                        <h1 className="text-7xl font-bold -space-[0.03em] text-white">
                            Enabling your brand’s Success via social media
                        </h1>
                    </div>
                </div>
            </section>
            <div className="max-w-screen-xl mx-auto flex justify-center">
                <div className="relative -mt-64 z-10">
                    <img
                        src={banner}
                        alt="social-media-marketing"
                        className="rounded-3xl"
                    />
                </div>
            </div> */}

            <section className="max-w-screen-xl mx-auto px-3 sm:px-8 md:px-12 pt-20 sm:pt-40 pb-20">
                <div className="grid md:grid-cols-2">
                    <div className="lg:pl-16">
                        <ul>
                            {processData?.map((item) => (
                                <li className="mb-8" key={item?.id}>
                                    <div
                                        className={`flex relative ${[
                                            "justify-start",
                                            "justify-center",
                                            "justify-end",
                                        ][item?.id - 1]
                                            }`}
                                    >
                                        <div className="mr-7">
                                            <div className="relative">
                                                <img
                                                    src={item?.icon}
                                                    alt={item?.label}
                                                />
                                                <b className="absolute left-0 right-0 top-1/2 font-medium text-white1 -translate-y-1/2 text-center">
                                                    0{item?.id}
                                                </b>
                                                <span className="absolute top-0 left-0 h-2 w-2 border rounded-full border-[#021d3580]" />
                                                <span className="absolute top-1 left-3 h-[2px] w-[2px] rounded-full bg-[#021d3580]" />
                                                <span className="absolute bottom-1.5 -right-1.5 h-1.5 w-1.5 rounded-full bg-[#021d3580]" />
                                                <span className="absolute bottom-0 right-0 h-[2px] w-[2px] rounded-full bg-[#021d3580]" />
                                            </div>
                                        </div>
                                        <div className="w-6/12">
                                            <h4 className="text-2xl font-semibold">
                                                {item?.label}
                                            </h4>
                                            <p className="text-grey4">
                                                {item?.desc}
                                            </p>
                                        </div>
                                        {item?.id < processData?.length ? (
                                            <>
                                                {item?.id === 1 ? (
                                                    <div className="absolute top-5 right-[10%] -rotate-[37deg]">
                                                        <Line1 />
                                                    </div>
                                                ) : (
                                                    <div className="absolute top-24 left-20 -rotate-[37deg]">
                                                        <Line2 />
                                                    </div>
                                                )}
                                            </>
                                        ) : null}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <img src={socialTree} alt="services" className="" />
                        <div className="">
                            <div className="absolute -top-5 -left-6 z-[1] animate-blinkTransform1"
                                onClick={() => window.open("https://www.facebook.com/people/Global-Garner-Consultancy-Services/61552984453919/",)}>
                                <img src={pinterest} alt="shape1" />
                            </div>
                            <div className="absolute top-[5%] left-[45%] z-[1] animate-blinkTransform2"
                                onClick={() => window.open("#", "_blank",
                                    "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes")}>
                                <img src={facebook} alt="shape2" />
                            </div>
                            <div className="absolute -top-[15%] right-[13%] z-[1] animate-blinkTransform1"
                                onClick={() => window.open("#", "_blank",
                                    "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes")}>
                                <img src={instagram} alt="shape3" />
                            </div>
                            <div className="absolute top-[19%] right-[1%] z-[1] animate-blinkTransform2"
                                onClick={() => window.open("#", "_blank",
                                    "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes")}>
                                <img src={linkedin} alt="shape3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 sm:py-20 bg-grey5">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-8 md:px-12">
                    <div className="flex md:justify-center mb-16">
                        <div className="md:w-8/12 text-center">
                            <h1 className="text-4xl sm:text-5xl sm:text-[54px] leading-tight font-semibold text-black2">
                                How can a perth social media help grow my
                                business?
                            </h1>
                        </div>
                    </div>
                    <div className="space-y-8 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <Slider {...settings}>
                            {Price?.map((item, index) => (
                                <div key={index} className=" flex flex-col justify-center p-6 mx-auto max-w-lg text-center text-gray-900 bg-[#F5F9FC] rounded-lg  shadow cursor-pointer">
                                    <div>
                                        <h3 className="mb-4 text-2xl font-semibold">{item?.title}</h3>
                                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{item?.desc}</p>
                                        <div className="flex justify-center items-baseline my-8">
                                            <span className="mr-1 text-4xl font-extrabold">{item?.price}</span>
                                            <span className="text-gray-500 dark:text-gray-400">/month</span>
                                        </div>
                                        {/* List  */}
                                        <ul role="list" className="mb-8 space-y-3 text-left h-[350px] overflow-y-scroll no-scrollbar">
                                            {
                                                item?.description?.map((desc, i) => (
                                                    <li key={i} className="flex items-center space-x-3">
                                                        {/* Icon  */}
                                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                        <span>{desc?.label} <span className="font-semibold">{desc?.time}</span></span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div
                                        onClick={() => {
                                            navigate("/contact")
                                        }}
                                        className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-semibold rounded-lg text-lg px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 cursor-pointer hover:bg-white hover:text-blue-500">
                                        Join this Plan
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    {/* </div> */}
                </div>
            </section>

            <section className="max-w-screen-xl mx-auto pb-0 sm:pb-14 md:pb-28 mt-10">
                <div className="md:flex py-10">
                    <div className="w-full md:w-1/2 sm:mx-3 px-10 py-10">
                        <div className="relative">
                            <div>
                                <img
                                    src={GradientBgImg}
                                    alt="GradientBgImg"
                                    className="-scale-x-[1]"
                                />
                            </div>
                            <div>
                                <img
                                    src={ClientImg}
                                    alt=""
                                    className="absolute bottom-0 right-0 -scale-x-[1]"
                                />
                                <img
                                    src={InputImg}
                                    alt=""
                                    className="absolute top-32 sm:-left-10"
                                />
                                <img
                                    src={StatImg}
                                    alt=""
                                    className="absolute top-20 sm:-right-10 shadow-2xl "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 sm:ms-20 sm:mx-3">
                        <div className="px-3 sm:px-0 my-10">
                            <p className="text-blue1 text-lg font-semibold mb-5">
                                Get the best
                            </p>
                            <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
                                Social Media is the
                                <br />
                                Fastest growing trend
                            </h2>

                            <div className="my-10">
                                <div>
                                    <h5 className="text-base mb-1">
                                        Market Research
                                    </h5>
                                    <div className="w-full md:w-2/3 border-2 border-gray-100 py-0.5 px-1 flex items-center rounded-full mb-4">
                                        <div
                                            className="bg-green-600 h-3 rounded-full dark:bg-green-500"
                                            style={{ width: "74%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-base  mb-1">
                                        SEO Consultancy
                                    </h5>
                                    <div className="w-full md:w-2/3 border-2 border-gray-100 py-0.5 px-1 flex items-center rounded-full mb-4">
                                        <div
                                            className="bg-yellow-600 h-3 rounded-full dark:bg-yellow-500"
                                            style={{ width: "92%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-base  mb-1">
                                        SEO Consultancy
                                    </h5>
                                    <div className="w-full md:w-2/3 border-2 border-gray-100 py-0.5 px-1 flex items-center rounded-full mb-4">
                                        <div
                                            className="bg-[#9666FE] h-3 rounded-full dark:bg-[#9666FE]"
                                            style={{ width: "54%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-screen-xl mx-auto px-3 sm:px-8 md:px-12">
                <div className="border-4 border-black2 relative shadow-serviceVideo">
                    <img
                        src={videoBanner}
                        alt="social-marketing"
                        className="w-full"
                    />
                    <div className="absolute left-4 sm:left-14 bottom-4 sm:bottom-10">
                        <h4 className="text-xl md:text-3xl font-bold text-white1">
                            Social <br />
                            Media Marketing
                        </h4>
                    </div>
                    <div className="absolute right-14 bottom-14 border-2 rounded-full p-2 ps-2.5 cursor-pointer">
                        <img src={play} alt="seo video" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-10 mt-14">
                    {servicesData?.map((item) => (
                        <div
                            className="group transition-all duration-300"
                            key={item?.id}
                        >
                            <div className="text-center">
                                <h4 className="text-2xl text-black2 font-semibold my-5">
                                    {item?.heading}
                                </h4>
                                <p className="text-grey1">{item?.desc}</p>
                            </div>
                            <div className=" flex justify-center my-5">
                                <span className="flex text-black2 cursor-pointer border-b-2 group-hover:border-b-blue1 group-hover:text-blue1 group-hover:animate-services">
                                    <p className="mr-3">Learn More</p>
                                    <span>
                                        <ArrowRightIcon className="w-4 h-4 font-extrabold " />
                                    </span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-screen-xl mx-auto px-3 sm:px-8 md:px-12 my-14 sm:my-28">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
                    {serviceSocial?.map((item) => (
                        <div
                            onClick={() => window.open(item?.link, "_blank",
                                "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes")}
                            key={item?.id}
                            className={`flex items-center justify-between group border p-7 rounded-xl cursor-pointer transition-all duration-[400ms] ${item?.class} hover:text-white1 hover:scale-110`}
                        >
                            <div className="flex items-center gap-3">
                                <span>
                                    <FontAwesomeIcon
                                        icon={item?.icon}
                                        size="2xl"
                                        color={item?.iconColor}
                                        className="group-hover:text-white1"
                                    />
                                </span>
                                <h4>{item?.label}</h4>
                            </div>
                            <div className="invisible group-hover:visible">
                                <ArrowRightIcon className="w-4 h-4 text-white" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
