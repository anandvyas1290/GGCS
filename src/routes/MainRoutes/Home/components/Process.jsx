import React from "react";

import list1 from "../../../../assets/home/process/list1.svg";
import list2 from "../../../../assets/home/process/list2.svg";
import list3 from "../../../../assets/home/process/list3.svg";
import image1 from "../../../../assets/home/process/image1.webp";
import shape1 from "../../../../assets/home/process/shape1.webp";
import shape2 from "../../../../assets/home/process/shape2.webp";
import shape3 from "../../../../assets/home/process/shape3.webp";

import { Line1, Line2 } from "../../../../components/UI/ProcessDash";
import { H1Animate, SubHeading, H4 } from "../../../../components/Typography";

export default function Process(props) {
    const processData = [
        {
            id: 1,
            icon: list1,
            label: "Creative Ideas",
            desc: "At GGCS, our approach hinges on creativity that transcends boundaries. We believe in the power of innovative thinking to shape compelling strategies and deliver impactful results.",
        },
        {
            id: 2,
            icon: list2,
            label: "Data Collection",
            desc: "We understand the power of data in steering successful campaigns. Our meticulous approach to data collection empowers us to harness actionable insights, enabling us to drive strategies that resonate and deliver results.",
        },
        {
            id: 3,
            icon: list3,
            label: "Targeting",
            desc: "We specialize in crafting targeted strategies that ensure your message resonates with the right audience at the right time. Our approach to targeting combines sophisticated techniques with deep insights, allowing us to create campaigns that drive engagement and conversions.",
        },
    ];

    return (
        <div className="max-w-screen-xl px-3 pt-10 pb-5 mx-auto sm:px-8 lg:px-12 sm:pb-40">
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
                    <div className="flex flex-col mb-10 items-left">
                        <SubHeading className="text-center">
                            Let us do the work
                        </SubHeading>
                        <H1Animate className="text-center">
                            How we do It
                        </H1Animate>
                    </div>

                    <ul>
                        {processData?.map((item) => (
                            <li className="mb-8" key={item?.id}>
                                <div
                                    className={`flex relative ${
                                        item?.id % 2 === 0
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
                                            <b className="absolute left-0 right-0 font-medium text-center -translate-y-1/2 top-1/2 text-white1">
                                                0{item?.id}
                                            </b>
                                            <span className="absolute top-0 left-0 h-2 w-2 border rounded-full border-[#021d3580]" />
                                            <span className="absolute top-1 left-3 h-[2px] w-[2px] rounded-full bg-[#021d3580]" />
                                            <span className="absolute bottom-1.5 -right-1.5 h-1.5 w-1.5 rounded-full bg-[#021d3580]" />
                                            <span className="absolute bottom-0 right-0 h-[2px] w-[2px] rounded-full bg-[#021d3580]" />
                                        </div>
                                    </div>
                                    <div className="w-8/12">
                                        <H4 className="text-2xl font-semibold">
                                            {item?.label}
                                        </H4>
                                        <p className="text-grey4">
                                            {item?.desc}
                                        </p>
                                    </div>
                                    {item?.id < processData?.length ? (
                                        <>
                                            {item?.id === 1 ? (
                                                <div className="absolute right-0 top-14">
                                                    <Line1 />
                                                    {/* <img
                                                        src={line1}
                                                        alt="dash-shape"
                                                    /> */}
                                                </div>
                                            ) : (
                                                <div className="absolute top-7 -left-16">
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
