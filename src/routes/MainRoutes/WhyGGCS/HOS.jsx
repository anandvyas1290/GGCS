import React from "react";
import textBg from "../../../assets/about/hoc/text-bg.svg";

import { H1Animate, H6 } from "../../../components/Typography";
import { DashedLine } from "../../../components/UI/ProcessDash";

const hosData = [
    {
        id: 0,
        label: (
            <H6>
                Brainstorming and Creative <br />
                ideas & Research
            </H6>
        ),
    },
    {
        id: 1,
        label: (
            <H6>
                Fully-Automated Keyword <br />
                Grouping
            </H6>
        ),
    },
    {
        id: 2,
        label: (
            <H6>
                Building the strategy to <br /> boost Your Sales
            </H6>
        ),
    },
    {
        id: 3,
        label: (
            <H6>
                Helping to achieve <br />
                more People
            </H6>
        ),
    },
];
function HOS() {
    return (
        <div className="mt-14 sm:my-14">
            <div className="flex items-center justify-center">
                <div className="mb-10 md:mb-20">
                    <div className="relative flex justify-center mb-2">
                        <p className="!text-4xl font-tangerine font-semibold text-blue-500 absolute top-2">
                            How we do it
                        </p>
                        <img src={textBg} alt="bg" />
                    </div>
                    <div>
                        <H1Animate>Helping others Succeed</H1Animate>
                    </div>
                </div>
            </div>
            <div className="sm:mb-12">
                <div className="relative pb-12 border-b-2 border-gray-100">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {hosData?.map((d, i) => {
                            return (
                                <div key={i} className="relative w-full ">
                                    <div
                                        className={` ${
                                            i === 0
                                                ? "text-center lg:text-left"
                                                : i === 1
                                                ? "text-center"
                                                : i === 2
                                                ? "text-center lg:text-right"
                                                : i === 3
                                                ? "text-center lg:text-right"
                                                : " text-center"
                                        }`}
                                    >
                                        <div
                                            div
                                            className="inline-block text-center"
                                        >
                                            <span
                                                className={` text-white relative text-xl  rounded-full h-12 w-12 leading-[3rem] mb-6 inline-block text-center before:border before:rounded-full before:h-16 before:w-16 before:absolute before:-top-4 before:-left-2 before:border-blue-1 ${
                                                    i === 0
                                                        ? " bg-blue-300"
                                                        : i === 1
                                                        ? " bg-yellow-200"
                                                        : i === 2
                                                        ? " bg-orange-300"
                                                        : i === 3
                                                        ? "  bg-pink-300"
                                                        : ""
                                                }`}
                                            >
                                                {d?.id + 1}
                                            </span>
                                            {d?.label}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="absolute hidden rotate-0 lg:block -top-4 left-56">
                        <DashedLine />
                    </div>
                    <div className="hidden lg:block absolute -top-4  left-[48%]	rotate-180">
                        <DashedLine />
                    </div>
                    <div className="absolute hidden rotate-0 lg:block -top-4 right-48">
                        <DashedLine />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HOS;
