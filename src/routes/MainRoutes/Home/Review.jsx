import React from "react";
import Review1 from "../../../assets/Review&Testimonial/review-logo-1.webp";

export default function Review() {
    return (
        <div>
            <div className="max-w-screen-md lg:max-w-screen-xl mx-auto pt-20 pb-20">
                <div className="block md:flex flex-wrap ">
                    {[1, 1, 1]?.map((d, i) => {
                        return (
                            // lg:[&:nth-child(2)]:after:border lg:[&:nth-child(2)]:before:border
                            <div
                                key={i}
                                className="md:w-1/3 h-full mb-12 md:mb-0flex justify-center   "
                            >
                                <div className="">
                                    <img
                                        src={Review1}
                                        alt={"icon"}
                                        className="mx-auto"
                                    />
                                    <div>
                                        <p className="text-base text-center mt-4 mb-1 text-grey1">
                                            4.58 out of 5 stars from 1,045 reviews
                                        </p>
                                        <h6 className="text-center">
                                            Best Apps - Apple
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
