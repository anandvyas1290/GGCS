import React from "react";

import { Desc, H1Animate, H4 } from "../../../../components/Typography";
import { industryImpact } from "../../../../db/dummy";

export default function IndustryImpact(props) {
    return (
        <div className="max-w-screen-xl mx-auto mb-10 sm:px-6 lg:px-0 px-3">
            <section className="flex flex-col items-center justify-center mb-10 text-center">
                <H1Animate>Industry Impact</H1Animate>
                <Desc className="sm:w-[750px] mt-3">
                    Our skilled team delivers top-notch IT services to diverse
                    industries, tailored to their unique challenges and
                    requirements. Industries we proudly work with include.
                </Desc>
            </section>
            <section className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
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
