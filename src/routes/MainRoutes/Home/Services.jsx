import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";

import rocket from "../../../assets/Navbar/rocket.webp";
import services from "../../../assets/home/services/services.svg";
import { ArrowRightIcon, ForwardIcon } from "@heroicons/react/24/outline";

import { servicesData } from "../../../db/dummy";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../../assets/home/services/img_1.jpg';
import slide_image_2 from '../../../assets/home/services/img_2.jpg';
import slide_image_3 from '../../../assets/home/services/img_3.jpg';
import slide_image_4 from '../../../assets/home/services/img_4.jpg';
import slide_image_5 from '../../../assets/home/services/img_5.jpg';
import slide_image_6 from '../../../assets/home/services/img_6.jpg';
import slide_image_7 from '../../../assets/home/services/img_7.jpg';


export default function Services(props) {
    const navigate = useNavigate()
    // const settings = {
    //     // dots: true,
    //     autoplay: false,
    //     centerMode: true,
    //     autoplaySpeed: 5000,
    //     centerPadding: "60px",
    //     infinite: true,
    //     slidesToShow: 3,
    //     // slidesToScroll: 1,
    //     speed: 500,
    //     arrows: true,
    //     className: "center",

    //     // adaptiveHeight: true,
    //     responsive: [
    //         {
    //             breakpoint: 1920,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 2,
    //             },
    //         },
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //             },
    //         },
    //         {
    //             breakpoint: 625,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             },
    //         },
    //     ],
    // };
    return (
        <section className="bg-[#f5f5f5] md:py-14 py-8 ">
            <div className=" max-w-screen-xl mx-auto px-3 sm:px-8 md:px-12 pb-10">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-lg font-semibold text-transparent bg-gradient-to-r from-[#501e9c] via-[#A44CEE] to-[#FF847F] bg-clip-text">
                        Why services Us We are Digital Marketers.
                    </p>
                    <h5 className="text-6xl font-semibold">Our services</h5>
                </div>

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 my-8 sm:my-12"> */}
                <div className="mt-5 ">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container"
                    >
                        {servicesData?.map((item, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div className="card-img rounded-xl bg-white shadow-lg">
                                        <img src={slide_image_5} alt="slide_image" className="w-full !h-64" />
                                    </div>
                                    <div className="card-desc">
                                        <h4 className="text-2xl text-black2 font-semibold mt-3 mb-2">
                                            {item?.heading}
                                        </h4>
                                        <p className="text-grey1">{item?.desc}</p>
                                    </div>

                                </SwiperSlide>
                            )
                        })}
                        {/* <SwiperSlide>
                            <img src={slide_image_2} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide_image_3} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide_image_4} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide_image_5} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide_image_6} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slide_image_7} alt="slide_image" />
                        </SwiperSlide> */}

                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow">
                                <ion-icon name="arrow-back-outline"></ion-icon>
                            </div>
                            <div className="swiper-button-next slider-arrow">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>

                    {/* <Slider {...settings}>
                        {servicesData?.map((item) => {
                            return (
                                <div className="card w-full h-[300px] my-6 bg-gray-50  rounded-2xl !mx-auto group animate-services p-2 " key={item.id}
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
                                        <p className="text-grey1">{item?.desc}</p>
                                    </div>
                                    {/* <div className=" flex justify-center my-5">
                                        <span className="group flex justify-center items-center cursor-pointer" onClick={() => {
                                            navigate("services");
                                        }}>

                                            <p className=" group-hover:text-primary   group-hover:animate-services">
                                                Read More
                                            </p>
                                            <span>
                                                <ArrowRightIcon className="w-6 h-5 group-hover:!text-primary" />
                                            </span>
                                        </span>
                                    </div> 
                </div>
                )
                        })}
            </Slider> */}
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
                                <Link to={"services"} className="mx-2 relative text-primary ">
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
