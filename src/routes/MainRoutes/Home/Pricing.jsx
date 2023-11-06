import React from 'react'
import { SecondaryBtn, SecondaryBtn2 } from "../../../components/Button"
import Slider from "react-slick";
const Price = [
    {
        title: "Silver",
        price: "Rs. 45,000",
        desc: "Social Media Handles (Plan, Create, Manage)",
        description: [
            {
                label: "20 Creatives per month"
            },
            {
                label: "2 Dedicated Videos"
            },
            {
                label: "4 Generic Videos",
                time: "(30-60 Sec)"
            }, {
                label: "Reach 50,000"
            },
            {
                label: "1 Motion Graphics"
            }, {
                label: "Analytics-Based Report",
                time: "(Weekly & Monthly)"
            }, {
                label: "Data Behavioural Report"
            },
            {
                label: "Monthly status Meetings"
            }
        ]

    },
    {
        title: "Gold",
        price: "Rs. 71,000",
        desc: "Social Media Handles (Plan, Create, Manage)",
        description: [
            {
                label: "30 Creatives per month"
            },
            {
                label: "4 Dedicated Videos"
            },
            {
                label: "6 Generic Videos",
                time: "(30-60 Sec)"
            }, {
                label: "Reach 1,00,000"
            },
            {
                label: "2 Motion Graphics"
            },
            {
                label: "1 Promotional Ad"
            },
            { label: "1 App Store Optimization Services" },
            {
                label: "1 Flipkart and Amazon Promotions"
            },
            {
                label: "Analytics-Based Report",
                time: "(Weekly & Monthly)"
            }, {
                label: "Data Behavioural Report"
            },
            {
                label: "Monthly status Meetings"
            }
        ]

    },
    {
        title: "Platinum",
        price: "Rs. 1,05,000",
        desc: "Social Media Handles (Plan, Create & Manage)",
        description: [
            {
                label: "40 Creatives per month"
            },
            {
                label: "6 Dedicated Videos",
                time: "(30-60 Sec)"
            },
            {
                label: "8 Generic Videos",
                time: "(30-60 Sec)"
            }, {
                label: "Reach 2,00,000"
            },
            {
                label: "3 Motion Graphics"
            },
            {
                label: "2 Promotional Ad"
            },
            { label: "2 App Store Optimization Services" },
            {
                label: "2 Flipkart and Amazon Promotions"
            }, {
                label: "Analytics-Based Report",
                time: "(Weekly & Monthly)"
            }, {
                label: "Data Behavioural Report"
            },
            {
                label: "Fortnightly Status and Inputs Online Meetings "
            }
        ]

    },
    {
        title: "Platinum Premium",
        price: "Rs. 1,16,000",
        desc: "Social Media Handles (Plan, Create & Manage)",
        description: [
            {
                label: "50 Creatives per month"
            },
            {
                label: "8 Dedicated Videos",
                time: "(30-60 Sec)"
            },
            {
                label: "10 Generic Videos",
                time: "(30-60 Sec)"
            }, {
                label: "Reach 3,00,000"
            },
            {
                label: "4 Motion Graphics"
            },
            {
                label: "3 Promotional Ad"
            },
            { label: "3 App Store Optimization Services" },
            {
                label: "3Flipkart and Amazon Promotions"
            }, {
                label: "Analytics-Based Report",
                time: "(Weekly & Monthly)"
            }, {
                label: "1 Data Behavioural Report"
            },
            {
                label: "Fortnightly Status and Inputs Online Meetings "
            }
        ]

    },

]
export default function Pricing() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div className='mxa-w-screen-lg max-w-screen-xl mx-auto'>
            {/* <div className='text-center'>
                        <h6 className="text-lg mx-auto font-semibold w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#501E9C] via-[#A44CEE] to-[#FF847F]">Pricing Plans</h6>
                        <h2 className='text-4xl sm:text-6xl font-semibold mt-1 mb-4'>Packages for everyone</h2>
                    </div> */}

            {/* <div className='flex px-5'>
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
                            </div> */}
            {/* <div className='absolute h-10 w-w-1/2 bg-primaryBtn  -top-[18px] left-1/2 w-[24.16%]'>
                                </div> */}
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h6 className="text-lg mx-auto font-semibold w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#501E9C] via-[#A44CEE] to-[#FF847F]">Pricing Plans</h6>
                    <h2 className="mb-4 text-5xl leading-tight font-semibold">Packages for everyone</h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at GGCS we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
                {/* Pricing Card  */}
                <div className="space-y-8 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <Slider {...settings}>
                        {Price?.map((item, index) => (
                            <div key={index} className=" flex flex-col justify-center p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-700 dark:text-white cursor-pointer">
                                <div>
                                    <h3 className="mb-4 text-2xl font-semibold">{item?.title}</h3>
                                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{item?.desc}</p>
                                    <div className="flex justify-center items-baseline my-8">
                                        <span className="mr-1 text-4xl font-extrabold">{item?.price}</span>
                                        <span className="text-gray-500 dark:text-gray-400">/month</span>
                                    </div>
                                    {/* List  */}
                                    <ul role="list" className="mb-8 space-y-3 text-left">

                                        {
                                            item?.description?.map((desc, i) => (
                                                <li key={i} className="flex items-center space-x-3">
                                                    {/* Icon  */}
                                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                    <span>{desc?.label} <span className="font-semibold">{desc?.time}</span></span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-semibold rounded-lg text-lg px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 cursor-pointer hover:bg-white hover:text-blue-500">
                                    <a href="#" >Join this Plan</a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            {/* {Price?.map((d, i) => {
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
                                })} */}
            {/* <div className='flex '>
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
                                </div> */}

        </div>
    )
}

