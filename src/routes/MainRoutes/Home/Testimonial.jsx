import React from 'react'
import Img1 from "./../../../assets/Review&Testimonial/testimonial-4-shape-5.webp"
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import GradientText from '../../../components/Button/GradientText';
function Testimonial() {
    return (
        <div>
            <div className="max-w-screen-md lg:max-w-screen-xl mx-auto pt-20 pb-20">
                <div className="block md:flex flex-wrap ">
                    <div className='w-1/2'>
                        <div className='relative'>
                            <div className='relative'>
                                <div className='absolute top-56 left-20 right-0 transform-'>
                                    <div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                            {/* top right */}
                            <div className='absolute left-1/2'>
                                <img src={Img1} alt="img" className='h-32' />
                            </div>
                            {/* bottom left */}
                            <div className='absolute top-64 left-4'>
                                <img src={Img1} alt="img" className='h-16' />
                            </div>
                            <div className='absolute top-1/2 left-5'>
                                <img src={Img1} alt="img" />
                            </div>
                            {/* right center */}
                            <div className='absolute top-48 right-40'>
                                <img src={Img1} alt="img" className='h-16' />
                            </div>
                            {/*bottom center */}
                            <div className='absolute top-80 left-48'>
                                <img src={Img1} alt="img" className='h-16' />
                            </div>
                            <div className='absolute top-32 left-48'>
                                <img src={Img1} alt="img" />
                            </div>


                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="my-10">
                            <span>
                                <p className="flex text-lg font-semibold w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#501E9C] via-[#A44CEE] to-[#FF847F]">
                                    Testimonials
                                </p>
                            </span>
                            <h2 className='text-4xl sm:text-5xl font-semibold mt-1 mb-4'>What Client Say</h2>
                            <div>
                                <h5 className="text-3xl text-red-500 mb-1">GGCS </h5>
                                <h6 className="text-grey2">info@company.com</h6>
                            </div>
                            <div className="my-5">
                                <p className="text-grey2 text-lg tracking-wide mb-5">
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                </p>
                                <h6 className="text-grey1 font-bold text-lg" >Global Garner</h6>
                                <h6 className="text-grey2 ">CEO Of Advisor Fuel</h6>
                            </div>
                            <div className='flex'>
                                <button>
                                    <ArrowRightIcon className="w-12 h-6 text-grey1" />
                                </button>
                                <button>
                                    <ArrowLeftIcon className="w-12 h-6 text-grey1" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Testimonial