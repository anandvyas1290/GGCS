import React from 'react'

import reactIcon from "../../../assets/HireUs/react.jpg";
import bdm from "../../../assets/footer/career/bdm.jpg";
import dme from "../../../assets/Footer/career/dme.png";
import laravel from "../../../assets/Footer/career/laravel.png";
import fullstack from "../../../assets/Footer/career/fullstack.png";
import sme from "../../../assets/Footer/career/sme.png";

import { Desc, H3, H5 } from '../../../components/Typography'

const ExploreOpportunities = () => {

    const arr = [
        { id: 1, icon: sme, designation: "Social Media Executive", package: "3 - 3.5 ", openings: 3 },
        { id: 2, icon: reactIcon, designation: "React Js Developer", package: "4 - 6 ", openings: 4 },
        { id: 3, icon: bdm, designation: "Business Development management", package: "3.2 - 4.5 ", openings: 3 },
        { id: 4, icon: laravel, designation: "Laravel Developer", package: "5 - 8 ", openings: 2 },
        { id: 5, icon: dme, designation: "Digital Marketing Executive", package: "3 - 3.5 ", openings: 1 },
        { id: 6, icon: fullstack, designation: "Fullstack Developer", package: "10 - 12 ", openings: 2 },
    ]
    return (
        <div className='bg-[#eaf4f4] md:py-20 py-10'>
            <div className='max-w-screen-xl mx-auto xl:px-0 px-3'>
                <div>
                    <H3 className='text-center mb-10'>Explore The Opportunities</H3>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-5'>
                        {arr?.map((item) => (
                            <div key={item?.id} className='group flex items-center justify-between text-left bg-white shadow-xl rounded-xl lg:pb-8 py-8 lg:px-8 px-3 transform transition duration-500 hover:scale-110'>
                                <div>
                                    <div className='lg:ml-0 mx-auto mb-3'>
                                        <img src={item?.icon} alt={item?.designation} className='h-16 w-26' />
                                    </div>
                                    <H5 className='pb-1 text-xl !font-bold '> {item?.designation}</H5>
                                    <Desc className='font-semibold text-lg text-[#023e8a]'>{item?.package}lpa</Desc>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span
                                        className="text-white font-bold relative text-2xl rounded-full h-12 w-12 leading-[3rem] inline-block text-center before:border before:rounded-full before:h-16 before:w-16 before:absolute before:-top-4 before:-left-2 before:border-[#94d2bd] bg-[#0a9396]"

                                    >
                                        {item?.openings}
                                    </span>
                                    <Desc className="text-sm">Openings</Desc>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreOpportunities