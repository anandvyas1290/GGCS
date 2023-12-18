import React, { useEffect } from 'react'
import Container from '../../../components/Layout/Layout'
import { H1Animate, TextAnimate } from '../../../components/Animation/H1Animate'
import { admissionProcess, minCriteria, uposDetails } from '../../../db/dummy'

function UposPackage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (

        <main>
            <section className='max-w-screen-lg mx-auto my-14'>
                <div className='text-center mb-10'>
                    <h2 className='text-3xl '>{minCriteria?.title}</h2>
                    <p className='mt-3'>{minCriteria?.desc}</p>
                </div>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
                    {minCriteria?.list?.map((item) =>
                    (
                        <div id={item?.id} className='border rounded-xl text-center px-3 py-5'>
                            <div className=' flex justify-center bg-gary-100 p-1 '>
                                <img src={item?.icon} alt={item?.title} className='w-8 h-8' />
                            </div>
                            <h5 className='my-2'>{item?.title}</h5>
                            <p className=''>{item?.desc}</p>
                        </div>
                    ))}
                </div>

            </section>
            <section className='bg-red-50 py-14'>
                <Container>
                    <h2 className='text-center text-3xl'>{admissionProcess?.title}</h2>
                    <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 my-10'>
                        {admissionProcess?.process?.map((item) => (
                            <div id={item?.id} className='bg-white border rounded-xl text-center px-3 py-5'>
                                <img src={item?.icon} alt={item?.title} className='w-5 h-5' />
                                <h5 className='my-2'>{item?.title}</h5>
                                <p className=''>{item?.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center items-center gap-5 '>
                        <button className='uppercase border-2 border-red-500 text-red-600 rounded-lg px-6 py-3 '>
                            View Details
                        </button>
                        <button className='uppercase border-2 border-red-500 bg-red-600  text-white rounded-lg px-6 py-3 '>
                            Apply Now for free
                        </button>
                    </div>
                </Container>
            </section>
            {/* <Container>
                <section className='text-center py-28'>
                    <H1Animate className={"text-5xl "}>
                        {uposDetails?.title}
                    </H1Animate>
                    <TextAnimate className='pt-5 text-2xl text-transparent bg-gradient-to-r from-[#501e9c] via-[#A44CEE] to-[#FF847F] bg-clip-text '>
                        {uposDetails?.subTitle}
                    </TextAnimate>
                </section>
                <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4  pb-10 lg:pb-20">
                    {uposDetails?.list?.map((item, i) => {
                        return (
                            <div className="p-6 bg-gray-100 rounded-lg transition duration-300 hover:scale-105 " key={i}>

                                <div className="mb-5">
                                    <img src={item?.icon} alt={item?.label} className="hi-outline hi-template inline-block w-full h-full text-indigo-500" />
                                </div>
                                <p className=" leading-6 text-gray-600">
                                    {item?.label}
                                </p>

                            </div>
                        )
                    })}

                </section>
                <div className="md:w-1/2 mx-auto pb-10 sm:pb-20">

                    <div className="relative flex flex-col flex-wrap items-center p-8 bg-opacity-75 border border-pink-500 " >
                        <span className="absolute px-3 py-1 text-xs font-medium text-white bg-opacity-25 rounded-full bg-gradient-to-r from-pink-500 to-red-400 -top-3 ">MOST POPULAR</span>
                        <h2 className='text-4xl'>{uposDetails?.label}</h2>
                        <h3 className="text-4xl font-semibold text-blue-500 my-7">{uposDetails?.price}
                        </h3>
                    </div>
                </div>
            </Container> */}
        </main>
    )
}

export default UposPackage