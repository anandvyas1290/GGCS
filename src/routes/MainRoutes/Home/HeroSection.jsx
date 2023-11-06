import React from "react";
import hero1 from "../../../assets/home/heroSection/hero1.webp";
import banner1 from "../../../assets/home/heroSection/banner1.webp";
import banner2 from "../../../assets/home/heroSection/banner2.webp";
import banner3 from "../../../assets/home/heroSection/banner3.webp";
import shape1 from "../../../assets/home/heroSection/shape1.webp";
import shape2 from "../../../assets/home/heroSection/shape2.webp";
import shape3 from "../../../assets/home/heroSection/shape3.webp";
import shape4 from "../../../assets/home/heroSection/shape4.webp";

import { PhoneArrowUpRightIcon } from "@heroicons/react/24/outline";

import { PrimaryBtn } from "../../../components/Button";

export default function HeroSection() {
    return (
        <div className="max-w-screen-xl mx-auto px-12 pt-[150px] pb-[150px]">
            <div className="container">
                <div className="w-4/6">
                    <div className="">
                        <div className="text-8xl font-bold">
                            {/* SEO
                            <br /> */}
                            Digital Marketing
                            <br />
                            <div className="">
                                <div className="text-animate">
                                    <div >
                                        <h4>agency</h4>
                                    </div>
                                    <div >
                                        <h4>analysis</h4>
                                    </div>
                                    <div>
                                        <h4>value</h4>
                                    </div>
                                    <div >
                                        <h4>Services</h4>
                                    </div>
                                </div>
                                <h5>from India</h5>
                            </div>
                        </div>
                        <p className="text-base mb-4 text-grey2 tracking-[1.2px] ">
                            Igniting Digital Growth
                        </p>
                        <div className="mb-7 mt-3">
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
                                <p className="text-base text-grey1 font-semibold">
                                    Contact Us Today!
                                </p>
                                <h4 className="text-xl font-semibold">
                                    +91 6354917511
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
