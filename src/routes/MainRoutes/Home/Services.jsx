import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";

import rocket from "../../../assets/Navbar/rocket.webp";
import services from "../../../assets/home/services/services.svg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { servicesData } from "../../../db/dummy";

export default function Services(props) {
    const navigate = useNavigate();
    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: true,
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
        <div className="max-w-screen-xl mx-auto px-3 sm:px-8 md:px-12 pb-10">
            <div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-lg font-semibold text-transparent bg-gradient-to-r from-[#501e9c] via-[#A44CEE] to-[#FF847F] bg-clip-text">
                        Why services Us We are Digital Marketers.
                    </p>
                    <h5 className="text-6xl font-semibold">Our services</h5>
                </div>

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 my-8 sm:my-12"> */}
                <div className="mt-5">
                    <Slider {...settings}>
                        {servicesData?.map((item) => {
                            return (
                                <div
                                    className=" group animate-services p-2 w-full"
                                    key={item.id}
                                >
                                    <div className="flex justify-center">
                                        <div className="relative flex justify-center">
                                            <img
                                                src={item?.shape}
                                                alt={item?.heading}
                                                className="relative"
                                            />
                                            <img
                                                src={item?.icon}
                                                alt={item?.heading}
                                                className={`absolute   top-1/2 text-center -translate-y-1/2 `}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid text-center">
                                        <h4 className="text-2xl text-black2 font-semibold my-5">
                                            {item?.heading}
                                        </h4>
                                        <p className="text-grey1">
                                            {item?.desc}
                                        </p>
                                    </div>
                                    <div className=" flex justify-center my-5">
                                        <span
                                            className="group flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                navigate("services");
                                            }}
                                        >
                                            {/* invisible  group-hover:ease-in group-hover:duration-1000  group-hover:visible group-hover:animate-services */}
                                            <p className=" group-hover:text-primary   group-hover:animate-services">
                                                Read More
                                            </p>
                                            <span>
                                                <ArrowRightIcon className="w-6 h-5 group-hover:!text-primary" />
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
                {/* </div> */}

                <div className="flex justify-center mt-5">
                    <div className="w-full md:w-1/2 rounded-full shadow-contact bg-grey3 p-3 text-center">
                        <div className="flex justify-center gap-2">
                            <span>
                                <img
                                    src={rocket}
                                    className="h-4 w-4 flex align-middle animate-pulse"
                                />
                            </span>
                            <p className="flex">
                                You can also find our
                                <Link
                                    to={"services"}
                                    className="mx-2 relative text-primary "
                                >
                                    Services
                                    <img
                                        src={services}
                                        alt="services"
                                        className="w-full h-full absolute left-0 right-0 -bottom-2.5"
                                    />
                                </Link>
                                to contact for the consulting.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
