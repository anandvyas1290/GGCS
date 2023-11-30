import React from "react";

import image1 from "../../../assets/home/process/image1.webp";
import shape1 from "../../../assets/home/process/shape1.webp";
import shape2 from "../../../assets/home/process/shape2.webp";
import shape3 from "../../../assets/home/process/shape3.webp";
import list1 from "../../../assets/home/process/list1.svg";
import list2 from "../../../assets/home/process/list2.svg";
import list3 from "../../../assets/home/process/list3.svg";

import { Line1, Line2 } from "../../../components/UI/ProcessDash";

export default function Process(props) {
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
    return (
        <div className="max-w-screen-xl mx-auto px-3 sm:px-8 lg:px-12 pt-10 pb-5 sm:pb-20">
            <div className="grid md:grid-cols-2">
                <div className="relative">
                    <img
                        src={image1}
                        alt="process"
                        className="opacity-1 animate-imgBorder rounded-processImg"
                    />
                    <div className="">
                        <div className="absolute bottom-14 -left-10 -z-[1]">
                            <img src={shape1} alt="shape1" />
                        </div>
                        <div className="absolute bottom-14 right-10 -z-[1]">
                            <img src={shape2} alt="shape2" />
                        </div>
                        <div className="absolute top-9 left-9 -z-[1]">
                            <img src={shape3} alt="shape3" />
                        </div>
                    </div>
                </div>
                <div className="md:pl-16">
                    <div className="flex flex-col items-left mb-10">
                        <p className="text-lg max-w-fit font-semibold text-transparent bg-gradient-to-r from-[#501e9c] via-[#A44CEE] to-[#FF847F] bg-clip-text">
                            Let us do the work
                        </p>
                        <h5 className="text-[50px] font-semibold">
                            How we do It
                        </h5>
                    </div>

                    <ul>
                        {processData?.map((item) => (
                            <li className="mb-8" key={item?.id}>
                                <div
                                    className={`flex relative ${item?.id % 2 === 0
                                        ? "justify-center"
                                        : "justify-start"
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
                                                <div className="absolute top-5 right-0">
                                                    <Line1 />
                                                    {/* <img
                                                        src={line1}
                                                        alt="dash-shape"
                                                    /> */}
                                                </div>
                                            ) : (
                                                <div className="absolute top-2 -left-16">
                                                    <Line2 />
                                                    {/* <img
                                                        src={line2}
                                                        alt="dash-shape"
                                                        // className="animate-dashShape"
                                                    /> */}
                                                </div>
                                            )}
                                        </>
                                    ) : null}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
