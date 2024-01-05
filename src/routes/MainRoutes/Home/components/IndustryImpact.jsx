import React from "react";

import {
    Desc,
    H1Animate,
    H4,
    H5,
    SubHeading,
} from "../../../../components/Typography";
import { industryImpact } from "../../../../db/dummy";

export default function IndustryImpact(props) {
    return (
        <div className="max-w-screen-xl mx-auto mb-10">
            <section className="flex flex-col items-center justify-center mb-16 text-center">
                <H1Animate>Industry Impact</H1Animate>
                <SubHeading className="mt-4 w-[900px]">
                    Our skilled team delivers top-notch IT services to diverse
                    industries, tailored to their unique challenges and
                    requirements. Industries we proudly work with include.
                </SubHeading>
            </section>
            <section className="grid grid-cols-1 gap-8 px-3 sm:grid-cols-2 lg:grid-cols-3 sm:px-6 lg:px-0">
                {industryImpact?.map((item) => (
                    <div
                        key={item?.id}
                        className="p-4 transition-all bg-[rgba(229_231_235_0.5)] duration-100 g-transparent shadow-header cursor-pointer rounded-xl hover:shadow-2xl hover:scale-105  bg-gray-50 "
                    >
                        <img
                            src={item?.icon}
                            alt={item?.label}
                            className="w-12 h-12 mb-4"
                        />
                        <H5 className="mb-2">{item?.label}</H5>
                        <Desc className="!text-lg">{item?.desc}</Desc>
                    </div>
                ))}
            </section>
        </div>
    );
}
