import React from "react";
import brand1 from "../../../../assets/home/featured/gg.png";
import brand2 from "../../../../assets/home/featured/ibn.png";
import brand4 from "../../../../assets/about/home/quikcraker.png";
import brand3 from "../../../../assets/home/featured/samachar.png";
// import brand5 from "../../../../assets/home/featured/brand5.webp";

import Slider from "react-slick";
import Waves from "../../../../../components/Waves";
import { H4 } from "../../../../../components/Typography";

export default function Featured(props) {
    const featuredData = [
        { image: brand3 },
        { image: brand2 },
        // { image: brand4 },
        { image: brand3 },
        { image: brand4 },
        { image: brand1 },
        { image: brand2 },
        // { image: brand5 },
        // { image: brand1 },
    ];
    const settings = {
        // slidesToShow: 5,
        // slidesToScroll: 1,

        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 625,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="bg-gradient-to-r from-[#501E9C] via-[#A44CEE] to-[#FF847F] relative md:mb-36">
            <div className="max-w-screen-xl px-12 mx-auto">
                <div className="text-center">
                    <H4 className="pt-20 pb-12 text-white1">As Featured On:</H4>
                </div>
                <div className="pb-10">
                    <Slider {...settings}>
                        {featuredData?.map((item, i) => (
                            <div key={i} className="!flex justify-center">
                                <img
                                    src={item?.image}
                                    alt="brand"
                                    className="object-contain object-center w-full transition-all duration-300 max-h-12 hover:opacity-100"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="relative h-32">
                <div className="left-0 h-30 bottom-10">
                    <Waves />
                </div>
            </div>
        </div>
    );
}
