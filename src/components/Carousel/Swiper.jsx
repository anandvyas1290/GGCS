import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { arrow } from "../../db/assets";

import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

import { ArrowRightIcon, ForwardIcon } from "@heroicons/react/24/outline";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const SwiperCarousel = ({ carouselData }) => {
    const navigate = useNavigate();
    return (
        <div className="relative mt-5">
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
                // autoplay={{ delay: 3500, disableOnInteraction: false }}
                speed={800}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="swiper_container"
            >
                {carouselData?.map((item, i) => {
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
                                    className="slide_image  sm:h-56 !object-contain mb-10 "
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
                                                className="flex items-center gap-2 mb-3"
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
    );
};

export default SwiperCarousel;
