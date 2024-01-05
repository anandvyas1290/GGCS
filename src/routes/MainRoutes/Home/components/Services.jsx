import React from "react";
import { Link } from "react-router-dom";
import lines from "../../../../assets/services/3 Lines.svg";
import dots from "../../../../assets/services/hero-3lines.svg";

import { servicesData } from "../../../../db/dummy";
import { rocket, services } from "../../../../db/assets";

import SwiperCarousel from "../../../../components/Carousel/Swiper";
import {
    H1Animate,
    SubHeading,
    TextAnimate,
} from "../../../../components/Typography";

export default function Services(props) {
    return (
        <section className="relative py-8 bg-white md:py-20">
            <img src={lines} alt="dot-svg" className="absolute left-10" />
            <img
                src={dots}
                alt="dot-svg"
                className="absolute bottom-0 right-0"
            />
            <div className="max-w-screen-xl px-3 mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center">
                    <SubHeading>Smart Solutions for your business</SubHeading>
                    <H1Animate>Our Services</H1Animate>
                </div>

                {/* <div className="grid grid-cols-1 gap-5 my-8 sm:grid-cols-2 md:grid-cols-3 md:gap-8 sm:my-12"> */}
                <SwiperCarousel carouselData={servicesData} />

                <div className="flex justify-center mt-5">
                    <div className="w-full p-3 text-center rounded-full shadow-xl lg:w-1/2 bg-grey3 ">
                        <div className="flex justify-center gap-2">
                            <span>
                                <img
                                    src={rocket}
                                    className="flex w-4 h-4 align-middle animate-pulse"
                                />
                            </span>
                            <p className="sm:flex">
                                <span className="block">
                                    You can also find our
                                </span>
                                <Link
                                    to={"services"}
                                    className="relative block mx-2 text-primary"
                                >
                                    Services
                                    <img
                                        src={services}
                                        alt="services"
                                        className="w-full h-full absolute left-0 right-0 -bottom-2.5"
                                    />
                                </Link>
                                <span className="block">
                                    to contact for the consulting.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
