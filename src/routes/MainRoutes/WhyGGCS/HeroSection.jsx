import React, { useEffect } from 'react'
import { whyGGCS } from '../../../db/dummy'

function HeroSection() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        // <section className="max-w-screen-lg lg:max-w-screen-xl px-10 md:px-14 lg:mx-auto  lg:my-10">
        <div className='py-10'>
            <h2 className='text-4xl text-center font-bold'>{whyGGCS?.title}</h2>
            <div className='py-8 grid grid-clos-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    whyGGCS?.desc?.map((item, i) =>
                        <div key={i} className=' rounded border p-5 shadow-sm'>
                            <div className='flex justify-center items-center mb-3'>
                                <span className='flex justify-center items-center shadow-sm border-2 border-gray-500 h-8 w-8 rounded-full'>{i + 1}</span>
                            </div>
                            <p className='text-base text-gray-500'>
                                {item?.label}
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
        // </section>
    )
}

export default HeroSection