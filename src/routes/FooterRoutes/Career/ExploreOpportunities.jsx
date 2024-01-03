import React from 'react'
import uber from "../../../assets/Footer/uber-logo.svg"
import ibn from "../../../assets/about/home/ibn.png"
import ggcs from "../../../assets/Navbar/GGCSNew.svg"
import gg from "../../../assets/GG_logo.png"

import { H3, H5 } from '../../../components/Typography'
const ExploreOpportunities = () => {

    const arr = [
        { id: 1, Icon: gg, title: "lorem ipsum", price: "10000 ", address: "San Francisco, CA" },
        { id: 2, Icon: ibn, title: "lorem ipsum", price: "21000 ", address: "San Francisco, CA" },
        { id: 3, Icon: uber, title: "lorem ipsum", price: "8000 ", address: "San Francisco, CA" },
        { id: 4, Icon: ggcs, title: "lorem ipsum", price: "11000 ", address: "San Francisco, CA" },
        { id: 5, Icon: gg, title: "lorem ipsum", price: "51000 ", address: "San Francisco, CA" },
    ]
    return (
        <div className='bg-[#eaf4f4] md:py-20 py-10'>
            <div className='max-w-screen-xl mx-auto xl:px-0 px-3'>
                <div>
                    <H3 className='text-center mb-10'>Explore The Opportunities</H3>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-5'>
                        {arr?.map((item) => (
                            <div key={item?.id} className='group lg:text-left text-center bg-white shadow-xl rounded-xl lg:pb-8 py-5 lg:px-10 px-3 transform transition duration-500 hover:scale-110'>
                                <div className='h-20 w-28 lg:ml-0 mx-auto'>
                                    <img src={item?.Icon} alt={item?.title} className='h-full w-full' />
                                </div>
                                <H5 className='pb-2 '> {item?.title}</H5>
                                <p className='font-bold text-lg text-[#023e8a]'>Rs.{item?.price} <span className='text-base text-gray-400 !font-medium '>of Hiring reward</span></p>
                                <address className='font-medium'> {item?.address}</address>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreOpportunities