import React, { useEffect } from "react";
import { whyGGCSData } from "../../../db/dummy";

function HeroSection() {
    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);
    return (
        // <section className="max-w-screen-lg lg:max-w-screen-xl px-10 md:px-14 lg:mx-auto  lg:my-10">
        <div className="py-10 ">
            <h1 className="text-4xl text-center font-bold">
                {whyGGCSData?.title}
            </h1>
            <div className="py-8 grid grid-clos-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {whyGGCSData?.desc?.map(
                    (item, i) => (
                        <div className="relative bg-gray-900 text-white px-10 text-center py-5 rounded-3xl overflow-hidden cursor-pointer group transition-all duration-[0.5s] ease-[ease]">
                            <div
                                className={`absolute -top-[70px] -right-[70px] rounded-full w-32 h-32 ${item?.bg} group-hover:scale-[10] z-[1] transition-all duration-[0.5s] ease-[ease]`}
                            />
                            <p className="relative text-lg text-gray-200 z-[2] transition-all duration-[0.5s] ease-[ease]">
                                {item?.label}
                            </p>
                        </div>
                    )

                    // <div key={i} className='bg-white rounded border p-5 shadow-sm transform overflow-hidden duration-200 hover:scale-105 hover:bg-slate-50 cursor-pointer'>
                    //     <div className='flex justify-center items-center mb-3'>
                    //         <span className={`flex justify-center items-center shadow-sm border-2 font-bold border-gray-500 h-10 w-10 rounded-full ${i === 0 ? " bg-blue-300" : i === 1 ? " bg-yellow-200" : i === 2 ? " bg-orange-300" : i === 3 ? "  bg-pink-300" : i === 4 ? " bg-blue-300" : ''}`}>{i + 1}</span>
                    //     </div>
                    //     <p className='text-base text-gray-500'>
                    //         {item?.label}
                    //     </p>
                    // </div>
                )}
            </div>
        </div>
        // </section>
    );
}

export default HeroSection;
