import React from 'react'
import { minCriteria } from '../../../db/dummy'

function MinCriteria() {
    return (
        <section className='max-w-screen-lg mx-auto my-14'>
            <div className='text-center mb-10'>
                <h2 className='text-3xl '>{minCriteria?.title}</h2>
                <p className='mt-3'>{minCriteria?.desc}</p>
            </div>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
                {minCriteria?.list?.map((item) =>
                (
                    <div key={item?.id} className='border rounded-xl text-center px-3 py-5'>
                        <div className=' flex justify-center bg-gary-100 p-1 '>
                            <img src={item?.icon} alt={item?.title} className='w-8 h-8' />
                        </div>
                        <h5 className='my-2'>{item?.title}</h5>
                        <p className=''>{item?.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MinCriteria