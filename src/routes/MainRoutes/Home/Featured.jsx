import React from "react";
import brand1 from "../../../assets/home/featured/gg.png";
import brand2 from "../../../assets/home/featured/ibn.png";
import brand3 from "../../../assets/home/featured/samachar.png";
import brand4 from "../../../assets/home/featured/GGCS-logo1.svg";
// import brand5 from "../../../assets/home/featured/brand5.webp";

import Slider from "react-slick";
import Waves from "../../../components/Waves";

export default function Featured(props) {
    const featuredData = [
        { image: brand1 },
        { image: brand4 },
        { image: brand3 },
        { image: brand4 },
        { image: brand2 },
        { image: brand3 },
        // { image: brand5 },
        // { image: brand1 },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div className="bg-gradient-to-r from-[#501E9C] via-[#A44CEE] to-[#FF847F] relative mb-36">
            <div className="max-w-screen-xl mx-auto px-12">
                <div className="text-center">
                    <h4 className="text-2xl font-bold text-white1 pt-20 pb-12">
                        As Featured On:
                    </h4>
                </div>
                <div className="pb-10">
                    <Slider {...settings}>
                        {featuredData?.map((item, i) => (
                            <div key={i} className="!flex justify-center">
                                <img
                                    src={item?.image}
                                    alt="brand"
                                    className="object-contain object-center w-full max-h-12 transition-all duration-300 hover:opacity-100"
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
