import React, { useEffect, useState } from "react";
import shape1 from "../../../../assets/home/heroSection/shape1.webp";
import shape2 from "../../../../assets/home/heroSection/shape2.webp";
import shape3 from "../../../../assets/home/heroSection/shape3.webp";
import shape4 from "../../../../assets/home/heroSection/shape4.webp";
import banner1 from "../../../../assets/home/heroSection/banner1.webp";
import banner2 from "../../../../assets/home/heroSection/banner2.webp";
import banner3 from "../../../../assets/home/heroSection/banner3.webp";
import ITBanner from "../../../../assets/home/heroSection/ITBanner.png";
import socialMediaBanner from "../../../../assets/home/heroSection/socialMediaBanner.png";
import digitalMarketingBanner from "../../../../assets/home/heroSection/digitalMarketingBanner.png";

import Slider from "react-slick";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";

import { H4, H5 } from "../../../../components/Typography";
import { PrimaryBtn } from "../../../../components/Button";

const services = ["Digital Marketing", "Social Media", "IT Service"];

export default function HeroSection() {
    const [state, setState] = useState({ service: services[0], currentTab: 0 });
    const navigate = useNavigate();

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 3000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    useEffect(() => {
        let interval = setInterval(() => {
            setState((prev) => {
                return {
                    ...prev,
                    service: services[prev?.currentTab],
                    currentTab:
                        prev?.currentTab >= 2 ? 0 : prev?.currentTab + 1,
                };
            });
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [state?.currentTab]);

    return (
        <div className="!max-h-fit !bg-gradient-to-b from-g1 via-g2 to-white bg-white !text-black">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-12 sm:pt-[250px] pt-[200px] pb-[40px] sm:pb-[60px] md:pb-[100px] lg:pb-[150px]">
                {/* <div className="container"> */}
                <div className="sm:w-4/6 relative z-[200]">
                    <div className="">
                        <motion.div
                            className="text-5xl font-bold md:text-7xl"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {/* <Slider {...settings}>
                                {[
                                    "Digital Marketing",
                                    "Social Media",
                                    "IT Service",
                                ]?.map((item, i) => (
                                    <p key={i}>{item}</p>
                                ))}
                            </Slider> */}
                            {services[state?.currentTab]}
                            <br />
                            <div className="">
                                <div className="text-animate">
                                    <div>
                                        <h4>agency</h4>
                                    </div>
                                    <div>
                                        <h4>analysis</h4>
                                    </div>
                                    <div>
                                        <h4>value</h4>
                                    </div>
                                    <div>
                                        <h4>Services</h4>
                                    </div>
                                </div>
                                <h5>from India</h5>
                            </div>
                        </motion.div>
                        {/* <p className="text-base mb-4 text-grey2 tracking-[1.2px] ">
                            Igniting Digital Growth
                        </p> */}
                        <div className="mt-5">
                            <PrimaryBtn
                                size="px-8 py-3"
                                bgColor="bg-primaryBtn"
                                className="border-2 rounded-full border-primaryBtn"
                                onClick={() => {
                                    navigate("/services");
                                }}
                            >
                                Get Started Now
                            </PrimaryBtn>
                        </div>
                        {/* <div className="flex items-center gap-4">
                            <div className="">
                                <PhoneArrowUpRightIcon className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                                <p className="text-base font-semibold text-grey1">
                                    Contact Us Today!
                                </p>
                                <H5>+91 6354917511</H5>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="">
                    <div className="lg:block hidden absolute top-0 right-0 w-[700px] z-[5]">
                        <Slider {...settings}>
                            {[
                                digitalMarketingBanner,
                                socialMediaBanner,
                                ITBanner,
                            ]?.map((item, i) => (
                                <img
                                    key={i}
                                    src={item}
                                    alt="hero"
                                    className="w-[700px] opacity-100"
                                />
                            ))}
                        </Slider>
                    </div>
                    <div className="lg:flex hidden absolute top-0 right-0 z-[4]">
                        <img src={banner1} alt="" className="w-[700px]" />
                    </div>
                    <div className="lg:flex hidden absolute top-0 right-0 z-[3]">
                        <img src={banner2} alt="" className="w-[700px]" />
                    </div>
                    <div className="lg:flex hidden absolute top-0 left-0 z-[1]">
                        <img src={banner3} alt="" />
                    </div>
                    <div className="absolute left-40 bottom-9 z-[1] animate-upslide">
                        <img src={shape1} alt="" />
                    </div>
                    <div className="absolute md:left-[660px] top-[345px] z-[1] animate-shape2">
                        <img src={shape2} alt="" />
                    </div>
                    <div className="absolute lg:left-[750px] bottom-[280px] z-[1] animate-shape3">
                        <img src={shape3} alt="" />
                    </div>
                    <div className="absolute lg:right-[610px] bottom-[90px] animate-shape4">
                        <img src={shape4} alt="" />
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
}
