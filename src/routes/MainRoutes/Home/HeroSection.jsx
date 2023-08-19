import React from "react";
import hero1 from "../../../assets/home/hero1.webp";
import banner1 from "../../../assets/home/banner1.webp";
import banner2 from "../../../assets/home/banner2.webp";
import banner3 from "../../../assets/home/banner3.webp";
import shape1 from "../../../assets/home/shape1.webp";
import shape2 from "../../../assets/home/shape2.webp";
import shape3 from "../../../assets/home/shape3.webp";
import shape4 from "../../../assets/home/shape4.webp";

import { PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";

import PrimaryBtn from "../../../components/Button";

export default function HeroSection() {
    return (
        <div className="max-w-screen-xl mx-auto px-12 pt-[150px] pb-[200px]">
            <div className="container">
                <div className="w-4/6">
                    <div className="">
                        <h4 className="text-8xl font-bold">
                            SEO
                            <br />
                            marketing
                            <br />
                            <span> value</span> in India
                        </h4>
                        <p className="text-xl text-grey1 mt-5 mb-10">
                            All in one SEO for your business to give real impact
                            <br />
                            consultancy and analysis.!
                        </p>
                        <div className="mb-7">
                            <PrimaryBtn
                                size="px-8 py-3"
                                bgColor="bg-primaryBtn"
                                className="border-2 rounded-full border-primaryBtn"
                            >
                                Get Started Now
                            </PrimaryBtn>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="">
                                <PhoneArrowUpRightIcon className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                                <p className="text-base text-grey1">
                                    Got Questions?
                                </p>
                                <h4 className="text-xl font-semibold">
                                    +91 7888478435
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="absolute top-0 right-0 -z-[1]">
                        <img src={hero1} alt="hero" className="w-[700px]" />
                    </div>
                    <div className="absolute top-0 right-0 -z-[2]">
                        <img src={banner1} alt="" className="w-[700px]" />
                    </div>
                    <div className="absolute top-0 right-0 -z-[3]">
                        <img src={banner2} alt="" className="w-[700px]" />
                    </div>
                    <div className="absolute top-0 left-0 -z-[1]">
                        <img src={banner3} alt="" />
                    </div>
                    <div className="absolute left-40 bottom-9 -z-[1] animate-upslide">
                        <img src={shape1} alt="" />
                    </div>
                    <div className="absolute left-[660px] top-[345px] -z-[1] animate-shape2">
                        <img src={shape2} alt="" />
                    </div>
                    <div className="absolute left-[750px] bottom-[280px] -z-[1] animate-shape3">
                        <img src={shape3} alt="" />
                    </div>
                    <div className="absolute right-[610px] bottom-[90px] animate-shape4">
                        <img src={shape4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
