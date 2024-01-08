import React, { useEffect } from "react";

import { whyGGCSData } from "../../../../db/dummy";
import Container from "../../../../components/Layout/Layout";
import { Desc, H1Animate, H2 } from "../../../../components/Typography";

export default function WhyGGCS() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="md:mb-20 bg-blue-50">
            <Container>
                <div className="py-20">
                    <H1Animate className="text-center">
                        {whyGGCSData?.title}
                    </H1Animate>
                    <div className="grid grid-cols-1 gap-5 py-8">
                        {whyGGCSData?.desc?.map((item, i) => (
                            <div
                                key={item?.id}
                                className={`grid md:grid-cols-[1fr_0.7fr] grid-cols-1 items-center sm:gap-5`}
                                dir={item?.id % 2 ? "ltr" : "rtl"}
                            >
                                <section className="sm:p-5 text-left">
                                    <H2
                                        className={`lg:!text-[38px] mb-5 font-bold text-transparent bg-clip-text ${item?.bg}`}
                                    >
                                        {item?.label}
                                    </H2>
                                    <Desc className="lg:!text-[22px]">
                                        {item?.desc}
                                    </Desc>
                                </section>
                                <section className="relative">
                                    <img
                                        src={item?.image}
                                        className={`relative lg:h-[400px] md:h-350px] h-[300px] aspect-video object-contain rounded-full  border-gray-200 z-10`}
                                    />
                                </section>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
