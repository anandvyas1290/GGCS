import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { colors } from "./dummyData";
import BackNavigate from "../UI/BackNavigate";
import { Desc, H1Animate, H2, H3, H5 } from "../../components/Typography";

export default function PricingDetails(props) {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { title, description, price, desc } = location?.state;
    return (
        <>
            <div className="!bg-mainDark">
                <BackNavigate
                    backLabel="Plan Details"
                    backLink="/services"
                    className="!text-white"
                />
                <section className="py-5 md:py-20">
                    <H1Animate className="uppercase !text-white">
                        {title}
                    </H1Animate>
                    <Desc className="text-center !text-gray-200">{desc}</Desc>
                    <H3 className="mt-5 text-center text-yellow-200">
                        {price}
                    </H3>
                </section>
            </div>
            <div className="max-w-screen-xl px-3 py-5 mx-auto md:py-10 lg:px-0 sm:px-6">
                <H2 className="my-10 ml-5 text-center">Benefits</H2>
                <div className="grid grid-cols-1 gap-12 py-10 mx-auto sm:grid-cols-3">
                    {description?.map((item, i) => (
                        <div
                            className="relative group hover:scale-110 transition-all duration-500 grid grid-cols-[1fr_0.4fr] items-center transform -skew-x-12 border-2 rounded-lg shadow-xl border-mainLight h-28 "
                            key={i}
                        >
                            <H5 className="w-full h-full flex items-center justify-center text-center !transform-none ">
                                {item?.label}
                            </H5>
                            <div
                                className={`absolute w-24 h-24 rounded right-2 -top-8 group-hover:scale-[.80] transition-all duration-500  ${colors[i]}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
