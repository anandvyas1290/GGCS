import React from 'react'
import uber from "../../../assets/Footer/uber-logo.svg"
const ExploreOpportunities = () => {

    const arr = [
        { id: 1, Icon: uber, title: "lorem ipsum", price: "1,240 ", address: "San Francisco, CA" },
        { id: 1, Icon: uber, title: "lorem ipsum", price: "1,240 ", address: "San Francisco, CA" },
        { id: 1, Icon: uber, title: "lorem ipsum", price: "1,240 ", address: "San Francisco, CA" },
        { id: 1, Icon: uber, title: "lorem ipsum", price: "1,240 ", address: "San Francisco, CA" },
        { id: 1, Icon: uber, title: "lorem ipsum", price: "1,240 ", address: "San Francisco, CA" },
    ]
    return (
        <div className='bg-[#eaf4f4] md:py-20 py-10'>
            <div className='max-w-screen-xl mx-auto xl:px-0 px-3'>
                <div>
                    <h3 className='text-center font-semibold text-3xl mb-10'>Explore The Opportunities</h3>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-5'>
                        {arr?.map((item) => (
                            <div key={item?.id} className='group bg-white shadow-xl rounded-xl lg:pb-8 py-5 lg:px-10 px-3 hover:bg-[#94d2bd] '>
                                <img src={item?.Icon} alt={item?.title} className='h-24' />
                                <h6 className='text-xl font-semibold pb-1 group-hover:text-white'> {item?.title}</h6>
                                <p className='font-bold text-lg text-[#034078]'>$ {item?.price} <span className='text-base text-gray-400 !font-normal group-hover:text-white'>of Hiring reward</span></p>
                                <p className='font-semibold text-[#003049] group-hover:text-white'> {item?.address}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreOpportunities