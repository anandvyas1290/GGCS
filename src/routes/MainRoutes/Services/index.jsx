import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Modal } from "flowbite-react";

import {
    socialTree,
    serFB,
    serLinkedin,
    serInsta,
    serPint,
    videoBanner,
    play,
    GradientBgImg,
    ClientImg,
    InputImg,
    StatImg,
} from "../../../db/assets";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Line1, Line2 } from "../../../components/UI/ProcessDash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    Price,
    servicesData,
    serviceSocial,
    processData,
    businessData,
} from "../../../db/dummy";

import Pricing from "../../../components/Pricing";

export default function Services(props) {
    const [activeItem, setActiveItem] = useState({
        0: false,
        openDialog: false,
        dialogData: {},
    });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        className="object-cover w-full h-full"
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
                <div className="max-w-screen-xl px-3 mx-auto sm:px-8 md:px-14">
                    <div className="lg:w-10/12">
                        <p className="mb-4 text-lg font-medium text-white2">
                            Social Media Marketing
                        </p>
                        <h1 className="text-7xl font-bold -space-[0.03em] text-white">
                            Enabling your brand’s Success via social media
                        </h1>
                    </div>
                </div>
            </section>
            <div className="flex justify-center max-w-screen-xl mx-auto">
                <div className="relative z-10 -mt-64">
                    <img
                        src={banner}
                        alt="social-media-marketing"
                        className="rounded-3xl"
                    />
                </div>
            </div> */}

            <section className="py-10 sm:py-20 bg-grey5">
                <div className="max-w-screen-xl px-3 mx-auto sm:px-8 md:px-12">
                    <div className="flex mb-16 md:justify-center">
                        <div className="text-center md:w-8/12">
                            <h1 className="text-4xl sm:text-5xl sm:text-[54px] leading-tight font-semibold text-black2">
                                How can a perth social media help grow my
                                business?
                            </h1>
                        </div>
                    </div>
                    <div className="space-y-8 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <Pricing Price={Price} />
                    </div>
                </div>
            </section>

            <section className="max-w-screen-xl px-3 pt-20 pb-20 mx-auto sm:px-8 md:px-12 sm:pt-40">
                <div className="grid md:grid-cols-2">
                    <div className="lg:pl-16">
                        <ul>
                            {processData?.map((item) => (
                                <li className="mb-8" key={item?.id}>
                                    <div
                                        className={`flex relative ${
                                            [
                                                "justify-start",
                                                "justify-center",
                                                "justify-end",
                                                "justify-center",
                                                "justify-start",
                                            ][item?.id - 1]
                                        }`}
                                    >
                                        <div className="mr-7">
                                            <div className="relative">
                                                <img
                                                    src={item?.icon}
                                                    alt={item?.label}
                                                />
                                                <b className="absolute left-0 right-0 font-medium text-center -translate-y-1/2 top-1/2 text-white1">
                                                    0{item?.id}
                                                </b>
                                                <span className="absolute top-0 left-0 h-2 w-2 border rounded-full border-[#021d3580]" />
                                                <span className="absolute top-1 left-3 h-[2px] w-[2px] rounded-full bg-[#021d3580]" />
                                                <span className="absolute bottom-1.5 -right-1.5 h-1.5 w-1.5 rounded-full bg-[#021d3580]" />
                                                <span className="absolute bottom-0 right-0 h-[2px] w-[2px] rounded-full bg-[#021d3580]" />
                                            </div>
                                        </div>
                                        <div className="w-6/12">
                                            <h4 className="text-xl font-semibold">
                                                {item?.label}
                                            </h4>
                                            <p className="text-grey4">
                                                {item?.desc?.slice(0, 60)}...
                                            </p>
                                            <p
                                                className="font-semibold text-pink-500 cursor-pointer"
                                                onClick={() =>
                                                    readMoreModal(
                                                        item?.label,
                                                        item?.desc
                                                    )
                                                }
                                            >
                                                {"Read More ->"}
                                            </p>
                                        </div>
                                        {item?.id < processData?.length ? (
                                            <>
                                                <div
                                                    className={`absolute ${
                                                        [
                                                            "top-5 right-[10%] -rotate-[37deg]",
                                                            "top-24 left-20 -rotate-[37deg]",
                                                            "top-48 -right-10 rotate-[15deg]",
                                                            "top-6 left-0 rotate-[20deg]",
                                                        ][item?.id - 1]
                                                    } `}
                                                >
                                                    {item?.id % 2 !== 0 ? (
                                                        <Line1 />
                                                    ) : (
                                                        <Line2 />
                                                    )}
                                                </div>
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
                            <div
                                className="absolute -top-5 -left-6 z-[1] animate-blinkTransform1"
                                onClick={() =>
                                    window.open(
                                        "https://www.facebook.com/people/Global-Garner-Consultancy-Services/61552984453919/"
                                    )
                                }
                            >
                                <img src={serPint} alt="shape1" />
                            </div>
                            <div
                                className="absolute top-[5%] left-[45%] z-[1] animate-blinkTransform2"
                                onClick={() =>
                                    window.open(
                                        "#",
                                        "_blank",
                                        "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes"
                                    )
                                }
                            >
                                <img src={serFB} alt="shape2" />
                            </div>
                            <div
                                className="absolute -top-[15%] right-[13%] z-[1] animate-blinkTransform1"
                                onClick={() =>
                                    window.open(
                                        "#",
                                        "_blank",
                                        "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes"
                                    )
                                }
                            >
                                <img src={serInsta} alt="shape3" />
                            </div>
                            <div
                                className="absolute top-[19%] right-[1%] z-[1] animate-blinkTransform2"
                                onClick={() =>
                                    window.open(
                                        "#",
                                        "_blank",
                                        "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes"
                                    )
                                }
                            >
                                <img src={serLinkedin} alt="shape3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-screen-xl pb-0 mx-auto mt-10 sm:pb-14 md:pb-28">
                <div className="py-10 md:flex">
                    <div className="w-full px-10 py-10 md:w-1/2 sm:mx-3">
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
                                    className="absolute shadow-2xl top-20 sm:-right-10 "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 sm:ms-20 sm:mx-3">
                        <div className="px-3 my-10 sm:px-0">
                            <p className="mb-5 text-lg font-semibold text-blue1">
                                Get the best
                            </p>
                            <h2 className="mb-4 text-4xl font-semibold sm:text-5xl">
                                Social Media is the
                                <br />
                                Fastest growing trend
                            </h2>

                            <div className="my-10">
                                <div>
                                    <h5 className="mb-1 text-base">
                                        Market Research
                                    </h5>
                                    <div className="w-full md:w-2/3 border-2 border-gray-100 py-0.5 px-1 flex items-center rounded-full mb-4">
                                        <div
                                            className="h-3 bg-green-600 rounded-full dark:bg-green-500"
                                            style={{ width: "74%" }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="mb-1 text-base">
                                        SEO Consultancy
                                    </h5>
                                    <div className="w-full md:w-2/3 border-2 border-gray-100 py-0.5 px-1 flex items-center rounded-full mb-4">
                                        <div
                                            className="h-3 bg-yellow-600 rounded-full dark:bg-yellow-500"
                                            style={{ width: "92%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="mb-1 text-base">
                                        SEO Consultancy
                                    </h5>
                                    <div className="w-full md:w-2/3 border-2 border-gray-100 py-0.5 px-1 flex items-center rounded-full mb-4">
                                        <div
                                            className="bg-[#9666FE] h-3 rounded-full dark:bg-[#9666FE]"
                                            style={{ width: "54%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-screen-xl px-3 mx-auto sm:px-8 md:px-12">
                <div className="relative border-4 border-black2 shadow-serviceVideo">
                    <img
                        src={videoBanner}
                        alt="social-marketing"
                        className="w-full"
                    />
                    <div className="absolute left-4 sm:left-14 bottom-4 sm:bottom-10">
                        <h4 className="text-xl font-bold md:text-3xl text-white1">
                            Social <br />
                            Media Marketing
                        </h4>
                    </div>
                    <div className="absolute right-14 bottom-14 border-2 rounded-full p-2 ps-2.5 cursor-pointer">
                        <img src={play} alt="seo video" />
                    </div>
                </div>

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-5 mt-14"> */}
                <div className="mt-14">
                    <Slider {...settings}>
                        {servicesData?.map((item) => (
                            <div
                                className={`group transition-all duration-300 bg-white px-3 ${
                                    activeItem[item?.id]
                                        ? "bg-slate-100 rounded-lg"
                                        : ""
                                }`}
                                key={item?.id}
                            >
                                <div className="text-center">
                                    <h4 className="mt-5 mb-3 text-2xl font-semibold text-black2">
                                        {item?.heading}
                                    </h4>
                                    <p className="mb-1 text-grey1">
                                        {item?.desc}
                                    </p>
                                    {
                                        <p
                                            className={`text-left mt-1 text-grey1 ${
                                                activeItem[item?.id]
                                                    ? "h-fit"
                                                    : ""
                                            }`}
                                        >
                                            {activeItem[item?.id] &&
                                                item?.desc2}
                                        </p>
                                    }
                                </div>
                                <div className="flex justify-center my-5">
                                    <span
                                        onClick={() => {
                                            setActiveItem({
                                                [item?.id]:
                                                    !activeItem[item?.id],
                                            });
                                        }}
                                        className="flex items-center justify-center border-b-2 cursor-pointer text-black2 group-hover:border-b-blue1 group-hover:text-blue1 group-hover:animate-services"
                                    >
                                        <p
                                            className={`${
                                                activeItem[item?.id]
                                            } ?"!mr-3":""`}
                                        >
                                            {activeItem[item?.id]
                                                ? "View Less"
                                                : "Learn More"}
                                        </p>
                                        {activeItem[item?.id] ? null : (
                                            <span>
                                                <ArrowRightIcon className="w-4 h-4 font-extrabold " />
                                            </span>
                                        )}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            <section className="max-w-screen-xl px-3 mx-auto sm:px-8 md:px-12 my-14 sm:my-28">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10">
                    {serviceSocial?.map((item) => (
                        <div
                            onClick={() =>
                                window.open(
                                    item?.link,
                                    "_blank",
                                    "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes"
                                )
                            }
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
