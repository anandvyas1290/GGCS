import React, { useEffect } from "react";

import { whyGGCSData } from "../../../../db/dummy";
import Container from "../../../../components/Layout/Layout";
import { H1Animate, TextAnimate } from "../../../../components/Typography";

export default function WhyGGCS() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-slate-50">
            <Container>
                <div className="py-20">
                    <H1Animate className="text-center">
                        {whyGGCSData?.title}
                    </H1Animate>
                    <div className="grid grid-cols-1 gap-16 py-8">
                        {whyGGCSData?.desc?.map((item, i) => (
                            <div
                                key={item?.id}
                                className={`grid md:grid-cols-[1fr_0.7fr] grid-cols-1 items-center gap-9`}
                                dir={item?.id % 2 ? "ltr" : "rtl"}
                            >
                                <section className="p-5 text-left">
                                    <h3
                                        className={`!text-3xl font-bold ${item?.bg} text-transparent bg-clip-text`}
                                    >
                                        {item?.label}
                                    </h3>
                                    {/* <hr className={` ${item?.bg}`} /> */}
                                    <p className="text-lg">{item?.desc}</p>
                                </section>
                                <section className="bg-blue-200">ds</section>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
