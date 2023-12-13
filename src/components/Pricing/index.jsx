import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import Tabs from "../UI/Tabs";
import { pricingServices } from "../../db/dummy";
import { PrimaryBtn } from "../Button";

function Pricing({ Price }) {
    const [state, setState] = useState({
        currentTab: "social_media",
    });
    const navigate = useNavigate();
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: true,
        adaptiveHeight: true,
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

    const currentTabHandler = (tab) => {
        setState((prev) => {
            return { ...prev, currentTab: tab };
        });
    };

    return (
        <div>
            <Tabs
                options={pricingServices}
                currentTab={state?.currentTab}
                currentTabHandler={currentTabHandler}
            />
            <Slider {...settings}>
                {Price?.map((item, index) => (
                    <div
                        key={index}
                        className=" flex flex-col justify-center p-6 mx-auto max-w-lg text-center text-gray-900 bg-[#F5F9FC] rounded-lg shadow cursor-pointer"
                    >
                        <div>
                            <h3 className="mb-1 text-2xl font-semibold">
                                {item?.title}
                            </h3>
                            <p className="font-light text-gray-500 ">
                                {item?.desc}
                            </p>
                            <div className="flex items-baseline justify-center my-8">
                                <span className="mr-1 text-4xl font-extrabold">
                                    {item?.price}
                                </span>
                                <span className="font-medium text-gray-500">
                                    /month
                                </span>
                            </div>
                            <ul
                                role="list"
                                className="mb-8 space-y-3 text-left h-[350px] overflow-y-scroll no-scrollbar"
                            >
                                {item?.description?.map((desc, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center space-x-3"
                                    >
                                        {/* Icon  */}
                                        <svg
                                            className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <span>
                                            {desc?.label}
                                            <span className="font-semibold">
                                                {desc?.time}
                                            </span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <PrimaryBtn
                            onClick={() => {
                                navigate("/plans");
                            }}
                            size="px-8 py-2"
                            bgColor="bg-card2"
                            className="mb-4 w-full !rounded-xl !bg-card2 !border-2 hover:!border-card2 text-white"
                        >
                            View Details
                        </PrimaryBtn>
                        <PrimaryBtn
                            onClick={() => {
                                navigate("/contact");
                            }}
                            size="px-8 py-2"
                            // bgColor="bg-primaryBtn"
                            className="w-full rounded-xl bg-white  !text-primary border-0 hover:!text-white hover:bg-gradient-to-r from-g1 via-g2 to-g3 hover:bg-[length:200%] hover:animate-gradientBg"
                        >
                            Join this Plan
                        </PrimaryBtn>
                        {/* <div

                            className="text-white bg-gradient-to-r from-[#501e9c] via-[#A44CEE] to-[#FF847F] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-semibold rounded-lg text-lg px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 cursor-pointer hover:bg-white hover:text-blue-500"
                        >
                            Join this Plan
                        </div> */}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Pricing;
