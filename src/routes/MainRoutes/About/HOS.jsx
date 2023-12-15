import React from "react";
import textBg from "../../../assets/about/hoc/text-bg.svg";
import Container from "../../../components/Layout/Layout";
import { DashedLine } from "../../../components/UI/ProcessDash";
import {
    H1Animate,
    TextAnimate,
} from "../../../components/Animation/H1Animate";

const hosData = [
    {
        id: 0,
        label: (
            <h6 className="text-lg">
                Brainstorming and Creative <br />
                ideas & Research
            </h6>
        ),
    },
    {
        id: 1,
        label: (
            <h6 className="text-lg">
                Fully-Automated Keyword <br />
                Grouping
            </h6>
        ),
    },
    {
        id: 2,
        label: (
            <h6 className="text-lg">
                Building the strategy to <br /> boost Your Sales
            </h6>
        ),
    },
    {
        id: 3,
        label: (
            <h6 className="text-lg">
                Helping to achieve <br />
                more People
            </h6>
        ),
    },
];
function HOS() {
    return (
        <div>
            <Container>
                <div className="flex items-center justify-center">
                    <div className="mb-10 md:mb-20">
                        <div className="relative flex justify-center mb-2">
                            <TextAnimate className="!text-4xl font-tangerine font-bold text-blue-500 absolute top-2">
                                How we do it
                            </TextAnimate>
                            <img src={textBg} alt="bg" />
                        </div>
                        <div>
                            <H1Animate className="text-5xl font-bold">
                                Helping others Succeed
                            </H1Animate>
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
            </Container>
        </div>
    );
}

export default HOS;
