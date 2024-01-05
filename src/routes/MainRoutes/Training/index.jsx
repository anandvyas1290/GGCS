import React, { useEffect } from "react";
import tick from "../../../assets/training/courses/tick.jpg";

import { useNavigate } from "react-router-dom";

import { courses } from "./dummyData";
import { PrimaryBtn } from "../../../components/Button";
import { H1Animate, H4, SubHeading } from "../../../components/Typography";

const otherFeatures = [
    { id: 1, name: "100% offline learning with expert instructors." },
    { id: 2, name: "100%  Placement" },
];

export default function Training(props) {
    let navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="max-w-screen-xl py-4 mx-auto !font-roboto">
            <section className="text-center">
                <H1Animate className="text-4xl sm:text-5xl sm:text-[54px] mb-4 leading-tight text-black2">
                    Our Courses
                </H1Animate>

                <SubHeading className="mb-10">
                    Become a Software Developer, Testing Engineer or a Data
                    Analyst at ZERO upfront fees.
                </SubHeading>

                <div className="grid grid-cols-3 gap-10">
                    {courses?.map((item) => (
                        <div
                            key={item?.id}
                            className="overflow-hidden border-2 border-gray-300 group rounded-xl"
                        >
                            <figure
                                className={`flex items-center justify-center w-full p-10 ${item?.cardBg}`}
                            >
                                <img
                                    src={item?.icon}
                                    className="w-40 transition-all duration-700 h-36 group-hover:scale-125"
                                />
                            </figure>
                            <div className="p-4 text-left">
                                <H4>{item?.name}</H4>
                                <p className="mb-3 text-base text-grey8">
                                    {item?.desc}
                                </p>
                                <hr />
                                <div className="py-4 text-[15px]">
                                    <span className="flex items-center gap-3">
                                        <img
                                            src={tick}
                                            alt="tick"
                                            className="w-10 h-10 rounded-lg"
                                        />
                                        <p>
                                            <b className="mr-2 text-base">
                                                Opportunities:
                                            </b>
                                            {item?.features}
                                        </p>
                                    </span>
                                    {otherFeatures?.map((item) => (
                                        <p
                                            key={item?.id}
                                            className="flex items-center gap-3"
                                        >
                                            <img
                                                src={tick}
                                                alt="tick"
                                                className="w-10 h-10 rounded-lg"
                                            />
                                            {item?.name}
                                        </p>
                                    ))}

                                    <PrimaryBtn
                                        className="w-full mt-5 rounded-lg"
                                        onClick={() =>
                                            navigate(
                                                `/training/${item?.slug}`,
                                                {
                                                    state: {
                                                        course: item?.slug,
                                                    },
                                                }
                                            )
                                        }
                                    >
                                        View Details
                                    </PrimaryBtn>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
