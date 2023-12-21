import React from "react";
import Review1 from "../../../assets/Review&Testimonial/review-logo-1.webp";

export default function Review() {
    return (
        <div>
            <div className="max-w-screen-md pt-20 pb-20 mx-auto lg:max-w-screen-xl">
                <div className="flex-wrap block md:flex ">
                    {[1, 1, 1]?.map((d, i) => {
                        return (
                            // lg:[&:nth-child(2)]:after:border lg:[&:nth-child(2)]:before:border
                            <div
                                key={i}
                                className="justify-center h-full mb-12 md:w-1/3 md:mb-0flex "
                            >
                                <div className="">
                                    <img
                                        src={Review1}
                                        alt={"icon"}
                                        className="mx-auto"
                                    />
                                    <div>
                                        <p className="mt-4 mb-1 text-base text-center text-grey1">
                                            4.58 out of 5 stars from 1,045
                                            reviews
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
