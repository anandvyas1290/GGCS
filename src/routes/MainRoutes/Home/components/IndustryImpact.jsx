import React from "react";

import { Desc, H1Animate, H4 } from "../../../../components/Typography";
import { industryImpact } from "../../../../db/dummy";

export default function IndustryImpact(props) {
    return (
        <div className="max-w-screen-xl mx-auto mb-10">
            <section className="flex flex-col items-center justify-center mb-10 text-center">
                <H1Animate className="flex gap-4">
                    Industry Impact
                    {/* <p className="text-[#4ade80]">Impact</p> */}
                </H1Animate>
                <Desc className="w-[750px]">
                    Our skilled team delivers top-notch IT services to diverse
                    industries, tailored to their unique challenges and
                    requirements. Industries we proudly work with include.
                </Desc>
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
                        <H4 className="text-[22px] mb-2">{item?.label}</H4>
                        <Desc className="!text-[17px]">{item?.desc}</Desc>
                    </div>
                ))}
            </section>
        </div>
    );
}
