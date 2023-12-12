import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { rocket, services, arrow } from "../../../db/assets";
import { ArrowRightIcon, ForwardIcon } from "@heroicons/react/24/outline";

import { servicesData } from "../../../db/dummy";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import {
    H1Animate,
    TextAnimate,
} from "../../../components/Animation/H1Animate";

export default function Services(props) {
    const navigate = useNavigate();
    return (
        <section className="bg-[#f5f5f5] md:py-14 py-8 ">
            <div className="max-w-screen-xl px-3 pb-10 mx-auto  sm:px-8 md:px-12">
                <div className="flex flex-col items-center justify-center">
                    <TextAnimate className="!text-3xl font-tangerine font-semibold text-transparent bg-gradient-to-r from-[#501e9c] via-[#A44CEE] to-[#FF847F] bg-clip-text">
                        Why services Us We are Digital Marketers.
                    </TextAnimate>
                    <H1Animate className="text-6xl font-semibold">
                        Our services
                    </H1Animate>
                </div>

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 my-8 sm:my-12"> */}
                <div className="mt-5 relative">
                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        // pagination={{
                        //     el: ".swiper-pagination",
                        //     clickable: true,
                        // }}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        speed={800}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                            clickable: true,
                        }}
                        modules={[
                            EffectCoverflow,
                            Pagination,
                            Navigation,
                            Autoplay,
                        ]}
                        className="swiper_container"
                    >
                        {servicesData?.map((item, i) => {
                            return (
                                <SwiperSlide
                                    key={i}
                                    onClick={() =>
                                        navigate(`/service/${item?.slug}`, {
                                            state: { slug: item?.slug },
                                        })
                                    }
                                    className="cursor-pointer"
                                >
                                    <div className="h-[60%] relative card-img rounded-xl flex gap-5 items-center justify-center bg-white shadow-lg bg-gradient-to-r from-[#501e9c] via-[#A44CEE] to-[#FF847F]">
                                        <img
                                            src={item?.icon}
                                            alt="slide_image"
                                            className="h-56 !object-contain mb-10 "
                                        />

                                        <h4 className="absolute bottom-0 text-2xl px-3 !text-center text-white font-medium mt-3 mb-2">
                                            {item?.heading}
                                        </h4>
                                    </div>
                                    <div className="h-[40%] card-desc m-3">
                                        <ul className="text-grey1 !list-none text-left ml-5 text-xl">
                                            {item?.list?.map((item, i) => {
                                                return (
                                                    <li
                                                        key={i}
                                                        className="flex gap-2 items-center mb-3"
                                                    >
                                                        <img
                                                            src={arrow}
                                                            alt="services"
                                                            className="w-5 h-5 !rotate-90 animate-flipArrow"
                                                        />
                                                        <p className="">
                                                            {item?.subHeading}
                                                        </p>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow">
                                <ion-icon name="arrow-back-outline" />
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                <ion-icon name="arrow-forward-outline" />
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </Swiper>
                </div>

                <div className="flex justify-center mt-5">
                    <div className="w-full p-3 text-center rounded-full md:w-1/2 shadow-contact bg-grey3">
                        <div className="flex justify-center gap-2">
                            <span>
                                <img
                                    src={rocket}
                                    className="flex w-4 h-4 align-middle animate-pulse"
                                />
                            </span>
                            <p className="flex">
                                You can also find our
                                <Link
                                    to={"services"}
                                    className="relative mx-2 text-primary "
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
        </section>
    );
}
