import React from "react";

import { Price } from "../../../db/dummy";

import Pricing from "../../../components/Pricing";

export default function PricingSection() {
    return (
        <div className="max-w-screen-xl pb-5 mx-auto mxa-w-screen-lg">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                    <h6 className="text-lg mx-auto font-semibold w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#501E9C] via-[#A44CEE] to-[#FF847F]">
                        Pricing Plans
                    </h6>
                    <h2 className="mb-4 text-5xl font-semibold leading-tight">
                        Packages for everyone
                    </h2>
                    <p className="mb-5 font-medium text-gray-500 sm:text-xl">
                        Here at GGCS we focus on markets where technology,
                        innovation, and capital can unlock long-term value and
                        drive economic growth.
                    </p>
                </div>
                {/* Pricing Card  */}
                <div className="space-y-8 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {/* reusable */}
                    <Pricing Price={Price} />
                </div>
            </div>
            {/* {Price?.map((d, i) => {
                                    return (
                                        <div className='flex' key={i}>
                                            <div className='flex w-3/12 px-2 py-2 text-center '>
                                                <div className='flex justify-center py-3 border-b' >
                                                    <p>{d?.label}</p>
                                                </div>
                                            </div>
                                            <div className={`w-9/12 bg-white  ${i === 0 ? "rounded-t-xl" : ""}`}>
                                                <div className='flex'>
                                                    <div className='flex justify-center w-1/3 px-2 py-2 text-center '>
                                                        <div className='flex justify-center w-1/2 py-3 border-b' >
                                                            <p>{d?.essential}</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-center w-1/3 px-2 py-2 text-white bg-primaryBtn '>
                                                        <div className='flex justify-center w-1/2 py-3 border-b' >
                                                            <p>{d?.pro}</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-center w-1/3 px-2 py-2 text-center '>
                                                        <div className='flex justify-center w-1/2 py-3 border-b' >
                                                            <p>{d?.business}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })} */}
            {/* <div className='flex '>
                                    <div className='w-3/12'></div>
                                    <div className='w-9/12 '>
                                        <div className='flex '>
                                            <div className='w-1/3 px-2 py-5 text-center bg-white'>
                                                <div className='flex justify-center py-3 ' >
                                                    <SecondaryBtn>Join this Plan</SecondaryBtn>
                                                </div>
                                            </div>
                                            <div className='w-1/3 py-5 text-center text-white bg-primaryBtn '>
                                                <div className='flex justify-center py-3 ' >
                                                    <SecondaryBtn2>Join this Plan</SecondaryBtn2>
                                                </div>
                                            </div>
                                            <div className='w-1/3 px-2 py-5 text-center bg-white'>
                                                <div className='flex justify-center py-3 ' >
                                                    <SecondaryBtn>Join this Plan</SecondaryBtn>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
        </div>
    );
}
