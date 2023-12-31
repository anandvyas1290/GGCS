import React from "react";
import innerHand from "../../../assets/about/home/inner-hand-1.webp";
import innerShape1 from "../../../assets/about/home/about-inner-shape-1.webp";
import innerShape2 from "../../../assets/about/home/about-inner-shape-2.webp";
import aboutInner from "../../../assets/about/home/about-inner-1.webp";
import switchIcon from "../../../assets/about/home/switch.svg";
import brand1 from "../../../assets/about/home/gg-log.svg";
import brand2 from "../../../assets/about/home/ibn.png";
import brand3 from "../../../assets/about/home/samachar.png";
import brand4 from "../../../assets/about/home/quikcraker.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import Container from "../../../components/Layout/Layout";
import { H1Animate, TextAnimate } from "../../../components/Animation/H1Animate";
const brandWrapper = [
    { image: brand1 },
    { image: brand2 },
    { image: brand3 },
    { image: brand4 },
    { image: brand1 },
    { image: brand2 },
    { image: brand1 },
    { image: brand2 },
];

function AboutHero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
    let dotStyle =
        "before:bg-blue1 before:h-2 before:w-2 before:inline-block before:rounded-full before:mr-3";
    return (
        <div className="relative mt-40 mb-10 sm:my-40">
            <div className="absolute left-24 -top-40">
                <img src={innerShape1} alt="" />
            </div>
            <div className="absolute right-96 -top-20">
                <img src={innerShape2} alt="" />
            </div>
            <div className="absolute right-0 -top-40">
                <img src={innerHand} alt="" />
            </div>
            <Container>
                <div className="flex md:justify-center items-center relative">
                    <div className="md:w-1/2 -mt-72">
                        <div className="relative">
                            <div className="absolute -left-10 right-40 object-cover">
                                <img
                                    src={aboutInner}
                                    alt=""
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div>
                            <TextAnimate
                                className={`!text-4xl font-tangerine font-bold text-blue1 ${dotStyle}  `}
                            >
                                Welcome
                            </TextAnimate>
                            <H1Animate className="text-5xl font-bold mb-3">
                                Working Hard to Make <br />
                                Digital Marketing Easy. Together
                            </H1Animate>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur
                                    <br />adipiscing elit.</p> */}
                            <p className="my-3 md:my-0">
                                Welcome to GGCS, where digital meets
                                intelligence to achieve market excellence.
                                <br />
                                We are digital marketers.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="flex">
                <div className="w-1/5 xl:ml-[32rem]">
                    <div className=" relative z-20">
                        <div className="bg-blue1 rounded-r-lg px-2 py-5 sm:p-6">
                            <h5 className="text-white">
                                Scroll down <br /> to explore more
                            </h5>
                            <Link>
                                <img src={switchIcon} alt="switch" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* react slick slider */}
                <div className="w-full overflow-hidden">
                    <div className="">
                        <Slider {...settings}>
                            {brandWrapper?.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex justify-center py-10"
                                >
                                    <img
                                        src={item?.image}
                                        alt="brand"
                                        className="object-contain object-center w-full max-h-12 transition-all duration-300 hover:opacity-100 !text-300 ml-5"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutHero;
