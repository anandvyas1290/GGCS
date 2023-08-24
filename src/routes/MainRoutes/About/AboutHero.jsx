import React from 'react'
import innerHand from "../../../assets/about/home/inner-hand-1.webp"
import innerShape1 from "../../../assets/about/home/about-inner-shape-1.webp"
import innerShape2 from "../../../assets/about/home/about-inner-shape-2.webp"
import aboutInner from "../../../assets/about/home/about-inner-1.webp"
import switchIcon from "../../../assets/about/home/switch.svg"
import brand1 from "../../../assets/about/home/brand7.webp";
import brand2 from "../../../assets/about/home/brand2.webp";
import brand3 from "../../../assets/about/home/brand3.webp";
import brand4 from "../../../assets/about/home/brand4.webp";
import brand5 from "../../../assets/about/home/brand5.webp";
import { Link } from 'react-router-dom'
import Slider from "react-slick";

import Container from '../../../components/Layout/Layout'
const brandWrapper = [
    { image: brand1 },
    { image: brand2 },
    { image: brand3 },
    { image: brand4 },
    { image: brand5 },
    { image: brand1 },
];

function AboutHero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    };
    let dotStyle = "before:bg-blue1 before:h-2 before:w-2 before:inline-block before:rounded-full before:mr-3"
    return (
        <div>
            <div className='relative my-40'>
                <div className='absolute left-24 -top-40'>
                    <img src={innerShape1} alt="" />
                </div>
                <div className='absolute right-96 -top-20'>
                    <img src={innerShape2} alt="" />
                </div>
                <div className='absolute right-0 -top-40'>
                    <img src={innerHand} alt="" />
                </div>
                <Container>
                    <div className='flex justify-center items-center relative'>

                        <div className='w-1/2 -mt-72'>
                            <div className='relative'>
                                <div className='absolute -left-10 right-40 object-cover'>
                                    <img src={aboutInner} alt="" className='rounded-xl' />
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div>
                                <span className={`text-blue1 ${dotStyle}  `}>
                                    Welcome
                                </span>
                                <h4 className='text-5xl font-bold mb-3'>Working Hard to Make <br />SEO Easy. Together</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    <br />adipiscing elit.</p>
                            </div>
                        </div>
                    </div>


                </Container>
                <div className='flex'>
                    <div className='w-1/5 ml-[32rem]'>
                        <div className=' relative z-20'>
                            <div className='bg-blue1 rounded-r-lg p-6'>
                                <h5 className='text-white'>
                                    Scroll down <br /> to explore more
                                </h5>
                                <Link>
                                    <img src={switchIcon} alt="switch" />
                                </Link>
                            </div>
                        </div>

                    </div>
                    {/* react slick slider */}
                    <div className='w-full overflow-hidden'>
                        <div className='' >
                            <Slider {...settings}>
                                {brandWrapper?.map((item, i) => (
                                    <div key={i} className="flex justify-center py-10">
                                        <img
                                            src={item?.image}
                                            alt="brand"
                                            className="ml-10 mr-12 opacity-60 transition-all duration-300 hover:opacity-100"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default AboutHero