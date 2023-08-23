import React from 'react'
import { SecondaryBtn, SecondaryBtn2 } from "../../../components/Button"
const Price = [
    {
        label: "keyword Research",
        essential: '100',
        pro: "200",
        business: "300"
    },
    {
        label: "On-page and SERP analysis",
        essential: '10',
        pro: "20",
        business: "30"
    },
    {
        label: "Tools for Agencies",
        essential: 'Limited',
        pro: "Limited",
        business: "Limited"
    },
    {
        label: "Сontent Marketing",
        essential: '15 articles',
        pro: "30 articles",
        business: "20 articles"
    },
    {
        label: "Additional Features",
        essential: '5 ',
        pro: "10 ",
        business: "15"
    }
]
export default function Pricing() {
    return (
        <div>
            <div className='mxa-w-screen-lg max-w-screen-xl mx-auto pt-20 pb-20'>
                <div>
                    <div className='text-center'>
                        <h6 className="text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-700 to-pink-800">Pricing Plans</h6>
                        <h2 className='text-4xl sm:text-6xl font-semibold mt-1 mb-4'>Packages for everyone</h2>
                    </div>

                    <div className='px-10 py-10'>
                        <div>
                            <div className='flex px-5'>
                                <div className='w-3/12'></div>
                                <div className='w-9/12 '>
                                    <div className='flex '>
                                        <div className='w-1/3 text-center px-2 py-10 '>
                                            <p>Essential</p>
                                            <h4 className='text-5xl font-semibold'>$36.00</h4>
                                        </div>
                                        <div className='w-1/3 text-white rounded-t-xl bg-primaryBtn text-center px-2 py-10'>
                                            <p>Pro</p>
                                            <h4 className='text-5xl font-semibold '>$54.00</h4></div>
                                        <div className='w-1/3 text-center  px-2 py-10'>
                                            <p>Business</p>
                                            <h4 className='text-5xl font-semibold'>$89.00</h4></div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-gray-100 rounded-xl px-5 py-5 relative'>
                                <div className='absolute h-10 w-w-1/2 bg-primaryBtn  -top-[18px] left-1/2 w-[24.16%]'>
                                </div>
                                {Price?.map((d, i) => {
                                    return (
                                        <div className='flex' key={i}>
                                            <div className='w-3/12 text-center  px-2 py-2 flex  '>
                                                <div className='border-b flex justify-center py-3' >
                                                    <p>{d?.label}</p>
                                                </div>
                                            </div>
                                            <div className={`w-9/12 bg-white  ${i === 0 ? "rounded-t-xl" : ""}`}>
                                                <div className='flex'>
                                                    <div className='w-1/3 text-center  px-2 py-2 flex justify-center  '>
                                                        <div className='border-b w-1/2 flex justify-center py-3' >
                                                            <p>{d?.essential}</p>
                                                        </div>
                                                    </div>
                                                    <div className='w-1/3 px-2 py-2 bg-primaryBtn  text-white flex justify-center  '>
                                                        <div className='border-b w-1/2 flex justify-center py-3' >
                                                            <p>{d?.pro}</p>
                                                        </div>
                                                    </div>
                                                    <div className='w-1/3 text-center  px-2 py-2 flex justify-center  '>
                                                        <div className='border-b w-1/2 flex justify-center py-3' >
                                                            <p>{d?.business}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className='flex '>
                                    <div className='w-3/12'></div>
                                    <div className='w-9/12 '>
                                        <div className='flex '>
                                            <div className='w-1/3 text-center  px-2 py-5  bg-white'>
                                                <div className=' flex justify-center py-3' >
                                                    <SecondaryBtn>Join this Plan</SecondaryBtn>
                                                </div>
                                            </div>
                                            <div className='w-1/3 text-white  bg-primaryBtn text-center  py-5 '>
                                                <div className=' flex justify-center py-3' >
                                                    <SecondaryBtn2>Join this Plan</SecondaryBtn2>
                                                </div>
                                            </div>
                                            <div className='w-1/3 text-center  px-2 py-5 bg-white'>
                                                <div className=' flex justify-center py-3' >
                                                    <SecondaryBtn>Join this Plan</SecondaryBtn>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

