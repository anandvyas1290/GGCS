import React, { useState } from "react";
import cs1 from "../../../assets/home/caseStudies/cs1.webp";
import cs2 from "../../../assets/home/caseStudies/cs2.webp";
import cs3 from "../../../assets/home/caseStudies/cs3.webp";
import csbg from "../../../assets/home/caseStudies/csbg.webp";

import Slider from "react-slick";

export default function CaseStudies(props) {
    const [state, setState] = useState({ currentCategory: "" });
    const categoryData = [
        { id: 0, label: "All Work", value: "all" },
        { id: 1, label: "Marketing", value: "marketing" },
        { id: 2, label: "Web Design", value: "webDesign" },
        { id: 3, label: "Branding", value: "branding" },
    ];
    const csData = [{ image: cs1 }, { image: cs2 }, { image: cs3 }];
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1.7,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="w-full pb-36 mb-28 relative">
            <div className="absolute bottom-0 -z-10">
                <img src={csbg} alt="portfolio" />
            </div>
            <div className="container ps-44 flex">
                <div className="w-4/12">
                    <div className="mb-6">
                        <p className="text-lg max-w-fit font-semibold text-transparent bg-gradient-to-r from-[#501e9c] via-[#A44CEE] to-[#FF847F] bg-clip-text mb-2">
                            Our Case Studies
                        </p>
                        <h5 className="text-[50px] leading-tight font-semibold">
                            Creative <br />
                            Works we done
                        </h5>
                    </div>
                    <div className="">
                        {categoryData?.map((item) => (
                            <h5
                                key={item?.id}
                                className={`${state.currentCategory === item?.value
                                        ? "text-primary border-l-4  border-primary bg-gradient-to-r from-[#775afc1a] to-[#775afc00]"
                                        : "text-grey2 border-l-4 border-white1"
                                    } font-medium ps-5 py-2 max-w-fit cursor-pointer`}
                                onClick={() =>
                                    setState((prev) => {
                                        return {
                                            ...prev,
                                            currentCategory: item?.value,
                                        };
                                    })
                                }
                            >
                                {item?.label}
                            </h5>
                        ))}
                    </div>
                </div>

                <div className="w-8/12">
                    <Slider {...settings}>
                        {csData?.map((item, i) => (
                            <div key={i} className="!flex justify-center pb-10">
                                <img
                                    src={item?.image}
                                    alt="cs"
                                    className="rounded-3xl cursor-pointer"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
