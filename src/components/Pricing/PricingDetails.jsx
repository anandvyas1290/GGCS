import React from "react";
// import UpdatingPage from "../Layout/UpdatingPage";
import BackNavigate from "../UI/BackNavigate";
import { Desc, H1Animate, H3, H5 } from "../../components/Typography";
import { useLocation } from "react-router-dom";

export default function PricingDetails(props) {
    const location = useLocation()
    window.scrollTo(0, 0);
    const { title, description, price, desc } = location?.state
    return (
        <>
            <BackNavigate backLabel="Plan Details" backLink="/" />
            {/* <UpdatingPage /> */}
            <section className="max-w-screen-xl mx-auto lg:py-10 md:py-10 py-5 lg:px-0 sm:px-6 px-3">
                <div className="!bg-mainDark py-10 rounded">
                    <H1Animate className="uppercase !text-white ">{title}</H1Animate>
                    <Desc className="text-center !text-gray-200">{desc}</Desc>
                    <H3 className="text-center mt-5 text-yellow-200">{price}</H3>
                </div>
                <div>
                    <H3 className="my-10 ml-5 text-center">Benefits</H3>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-12 max-w-screen-lg mx-auto py-10">
                        {description?.map((item, i) => (
                            <div className="relative" key={i}>
                                <div className="relative shadow-xl border-2 border-mainLight transform -skew-x-12 h-28 rounded-lg ">
                                </div>
                                <H5 className="absolute top-10 left-6">{item?.label}</H5>
                                <div className="absolute -top-8 right-0 bg-mainDark h-24 w-24 -skew-x-12 rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
