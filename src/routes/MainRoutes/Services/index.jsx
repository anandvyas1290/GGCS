import React from "react";

import bgMain from "../../../assets/services/bgMain.webp";
import design1 from "../../../assets/services/design1.webp";
import design2 from "../../../assets/services/design2.webp";
import design3 from "../../../assets/services/design3.webp";
import design4 from "../../../assets/services/design4.webp";
import design5 from "../../../assets/services/design5.webp";
import design6 from "../../../assets/services/design6.webp";
import banner from "../../../assets/services/banner.webp";
import socialTree from "../../../assets/services/socialTree.webp";
import list1 from "../../../assets/home/process/list1.svg";
import list2 from "../../../assets/home/process/list2.svg";
import list3 from "../../../assets/home/process/list3.svg";

import pinterest from "../../../assets/services/pinterest.webp";
import facebook from "../../../assets/services/facebook.webp";
import instagram from "../../../assets/services/instagram.webp";
import linkedin from "../../../assets/services/linkedin.webp";
import business1 from "../../../assets/services/business1.webp";
import business2 from "../../../assets/services/business2.webp";
import business3 from "../../../assets/services/business3.webp";

import { Line1, Line2 } from "../../../components/UI/ProcessDash";

export default function Services(props) {
    const processData = [
        {
            id: 1,
            icon: list1,
            label: "Creative Ideas",
            desc: "Keyword research and other market research under the SEO analytics umbrella.",
        },
        {
            id: 2,
            icon: list2,
            label: "Data Collection",
            desc: "Keyword research and other market research under the SEO analytics umbrella.",
        },
        {
            id: 3,
            icon: list3,
            label: "Targeting",
            desc: "Keyword research and other market research under the SEO analytics umbrella.",
        },
    ];

    const businessData = [
        {
            heading: "Growing your business",
            desc: "With SEOMY, you get everything you need for a fast website",
            image: business1,
        },
        {
            heading: "Speed Optimization",
            desc: "With SEOMY, you get everything you need for a fast website",
            image: business2,
        },
        {
            heading: "Testing Capabilities",
            desc: "With SEOMY, you get everything you need for a fast website",
            image: business3,
        },
    ];

    return (
        <div className="font-jakarta">
            <section className="pt-44 pb-80 relative bg-gradient-to-r from-[#4260FF] to-[#2346FF]">
                <div className="absolute top-0 left-0 w-full h-full mix-blend-overlay opacity-80 -z-[1px]">
                    <img
                        src={bgMain}
                        alt="social-marketing"
                        className="w-full h-full object-cover"
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
                <div className="max-w-screen-xl mx-auto px-14">
                    <div className="lg:w-10/12">
                        <p className="text-lg font-medium text-white2 mb-4">
                            Social Media Marketing
                        </p>
                        <h1 className="text-7xl font-bold -space-[0.03em] text-white">
                            Enabling your brand’s Success via social media
                        </h1>
                    </div>
                </div>
            </section>
            <div className="max-w-screen-xl mx-auto flex justify-center">
                <div className="relative -mt-64 z-10">
                    <img
                        src={banner}
                        alt="social-media-marketing"
                        className="rounded-3xl"
                    />
                </div>
            </div>

            <section className="max-w-screen-xl mx-auto px-12 pt-40 pb-20">
                <div className="grid grid-cols-2">
                    <div className="pl-16">
                        <ul>
                            {processData?.map((item) => (
                                <li className="mb-8">
                                    <div
                                        className={`flex relative ${
                                            [
                                                "justify-start",
                                                "justify-center",
                                                "justify-end",
                                            ][item?.id - 1]
                                        }`}
                                    >
                                        <div className="mr-7">
                                            <div className="relative">
                                                <img
                                                    src={item?.icon}
                                                    alt={item?.label}
                                                />
                                                <b className="absolute left-0 right-0 top-1/2 font-medium text-white1 -translate-y-1/2 text-center">
                                                    0{item?.id}
                                                </b>
                                                <span className="absolute top-0 left-0 h-2 w-2 border rounded-full border-[#021d3580]" />
                                                <span className="absolute top-1 left-3 h-[2px] w-[2px] rounded-full bg-[#021d3580]" />
                                                <span className="absolute bottom-1.5 -right-1.5 h-1.5 w-1.5 rounded-full bg-[#021d3580]" />
                                                <span className="absolute bottom-0 right-0 h-[2px] w-[2px] rounded-full bg-[#021d3580]" />
                                            </div>
                                        </div>
                                        <div className="w-6/12">
                                            <h4 className="text-2xl font-semibold">
                                                {item?.label}
                                            </h4>
                                            <p className="text-grey4">
                                                {item?.desc}
                                            </p>
                                        </div>
                                        {item?.id < processData?.length ? (
                                            <>
                                                {item?.id === 1 ? (
                                                    <div className="absolute top-5 right-[10%] -rotate-[37deg]">
                                                        <Line1 />
                                                    </div>
                                                ) : (
                                                    <div className="absolute top-24 left-20 -rotate-[37deg]">
                                                        <Line2 />
                                                    </div>
                                                )}
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
                            <div className="absolute -top-5 -left-6 z-[1] animate-blinkTransform1">
                                <img src={pinterest} alt="shape1" />
                            </div>
                            <div className="absolute top-[5%] left-[45%] z-[1] animate-blinkTransform2">
                                <img src={facebook} alt="shape2" />
                            </div>
                            <div className="absolute -top-[15%] right-[13%] z-[1] animate-blinkTransform1">
                                <img src={instagram} alt="shape3" />
                            </div>
                            <div className="absolute top-[19%] right-[1%] z-[1] animate-blinkTransform2">
                                <img src={linkedin} alt="shape3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-grey5">
                <div className="max-w-screen-xl mx-auto px-12">
                    <div className="flex justify-center mb-16">
                        <div className="w-8/12 text-center">
                            <h1 className="text-[54px] leading-tight font-semibold text-black2">
                                How can a perth social media help grow my
                                business?
                            </h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-7">
                        {businessData?.map((item, i) => (
                            <div
                                className="group px-8 pt-10 shadow-business1 rounded-xl hover:shadow-business2 bg-white1 transition-all duration-500"
                                key={i}
                            >
                                <div className="mb-20">
                                    <h4 className="text-[28px] leading-[36px] font-semibold w-8/12 duration-500 cursor-pointer mb-5 group-hover:text-blue1">
                                        {item?.heading}
                                    </h4>
                                    <p className=" text-grey1">{item?.desc}</p>
                                </div>
                                <div>
                                    <img
                                        src={item?.image}
                                        alt={item?.heading}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
