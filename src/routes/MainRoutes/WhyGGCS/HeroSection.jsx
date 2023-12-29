import React, { useEffect } from "react";

import { whyGGCSData } from "../../../db/dummy";
import { H1Animate, TextAnimate } from "../../../components/Typography";

function HeroSection() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        // <section className="max-w-screen-lg px-10 lg:max-w-screen-xl md:px-14 lg:mx-auto lg:my-10">
        <div className="py-10 ">
            <H1Animate className="text-center">{whyGGCSData?.title}</H1Animate>
            <div className="grid grid-cols-1 gap-16 py-8">
                {whyGGCSData?.desc?.map((item, i) => (
                    <div
                        key={item?.id}
                        className={`grid grid-cols-[1fr_0.7fr] items-center gap-9`}
                        dir={item?.id % 2 ? "ltr" : "rtl"}
                    >
                        <section className="text-left p-5">
                            <h3
                                className={`!text-3xl font-bold ${item?.bg} text-transparent bg-clip-text`}
                            >
                                {item?.label}
                            </h3>
                            {/* <hr className={` ${item?.bg}`} /> */}
                            <p className="text-xl">{item?.desc}</p>
                        </section>
                        <section className="bg-blue-200">ds</section>
                    </div>
                ))}
            </div>
        </div>
        // </section>
    );
}

export default HeroSection;

// {whyGGCSData?.desc?.map(
//     (item, i) => (
//         <div className="relative bg-gray-900 text-white px-10 text-center py-5 rounded-3xl overflow-hidden cursor-pointer group transition-all duration-[0.5s] ease-[ease]">
//             <div
//                 className={`absolute -top-[70px] -right-[70px] rounded-full w-32 h-32 ${item?.bg} group-hover:scale-[10] z-[1] transition-all duration-[0.5s] ease-[ease]`}
//             />
//             <p className="relative text-lg text-gray-200 z-[2] transition-all duration-[0.5s] ease-[ease]">
//                 {item?.label}
//             </p>
//         </div>
//     )
// )}
