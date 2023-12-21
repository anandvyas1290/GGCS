import React from "react";
import img1 from "../../../assets/home/awards/award-shape-1.webp";

export default function Awards() {
    return (
        <div>
            <div className="max-w-screen-md pt-20 pb-20 mx-auto lg:max-w-screen-xl">
                <div className="flex-wrap block md:flex ">
                    {[1, 1, 1]?.map((d, i) => {
                        return (
                            // lg:[&:nth-child(2)]:after:border lg:[&:nth-child(2)]:before:border
                            <div
                                key={i}
                                className="flex justify-center h-full mb-12 md:w-1/3 md:mb-0"
                            >
                                <div className="">
                                    <img
                                        src={img1}
                                        alt={"icon"}
                                        className="mx-auto"
                                    />
                                    <div>
                                        <h4 className="mt-4 mb-1 text-2xl text-center">
                                            Best of the Year
                                        </h4>
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
