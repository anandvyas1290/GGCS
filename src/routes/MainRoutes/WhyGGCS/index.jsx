import React, { useEffect } from 'react'
import { whyGGCS } from '../../../db/dummy'

function WhyGGCS() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className="max-w-screen-lg lg:max-w-screen-xl px-10 md:px-14 lg:mx-auto  lg:my-10">
            <div className='py-10'>
                <h2 className='text-4xl font-semibold'>{whyGGCS?.title}</h2>
                <ul className='py-5 list-disc'>
                    {
                        whyGGCS?.desc?.map((item, i) =>
                            <li key={i} className='text'>{item?.label}</li>)
                    }
                </ul>
            </div>
        </section>
    )
}

export default WhyGGCS