import React from 'react'
import careerHero from "../../../assets/Footer/career-hero.svg"
import Dots from "../../../assets/services/Dot's1.svg"
import Lines from "../../../assets/services/3 Lines.svg"
const Hero = () => {
    return (
        <section className='relative bg-white'>
            <div className='lg:absolute lg:flex none justify-center items-center right-0 lg:w-[55%]  lg:h-full bg-[#94d2bd] lg:rounded-bl-full'>
                <img src={careerHero} alt="career" className='lg:h-[500px] h-96 w-full lg:pt-0 lg:pb-0 pb-10 pt-20' />
            </div>
            <div className='absolute right-10 top-0  lg:h-full lg:rounded-bl-full'>
                <img src={Lines} alt="career" className='lg:h-64 h-64 ' />
            </div>
            <div className='absolute  left-0 bottom-0  '>
                <img src={Dots} alt="career" className='lg:h-64 h-64 ' />
            </div>
            <div className='absolute left-0 w-32 h-32 bg-[#0a9396] rounded-br-full'></div>
            <div className='relative max-w-screen-xl mx-auto xl:px-0 px-3 '>
                <div className='py-24 grid gap-5'>
                    <h1 className='text-5xl leading-[65px] font-bold mb-4'>Your Passion Begins <br /> Here !</h1>
                    <p className='text-gray-700 text-lg font-semibold mb-3'>Join over 2 million others in the future of work, <br />The easiest way to get your new job.</p>
                    <div className="lg:w-2/5 w-full">
                        <div className="relative flex items-center w-full px-4 py-3 bg-white rounded-full shadow-2xl">
                            <input
                                type={"text"}
                                placeholder={"Job Title, Keywords, or Company"}
                                className={`text-gray-500 text-[17px] font-semibold px-2 py-2 !outline-none border-none w-4/5  border-0 focus:ring-0 `}
                            />
                            <div className="text-center text-white font-semibold p-2 bg-blue-600 rounded-full sm:w-1/5 w-[100px]">
                                <button>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className='text-[17px] font-semibold mt-3'>Get your dream job.
                        {/* <a href='#' className="text-blue-500">Sign Up for free now</a> */}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero