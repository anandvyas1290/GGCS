import React from 'react'
import { admissionProcess } from '../../../db/dummy'
import Container from '../../../components/Layout/Layout'

function AdmissionProcess() {
    return (
        <section className='bg-red-50 py-14'>
            <Container>
                <h2 className='text-center text-3xl'>{admissionProcess?.title}</h2>
                <div className='relative grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 my-10'>
                    <div className='absolute top-1/2 left-0 border border-dashed border-red-200 w-full'></div>
                    {admissionProcess?.process?.map((item) => (
                        <div key={item?.id} className='bg-white z-0 border rounded-xl text-center px-3 py-5'>
                            <div className='bg-red-50 w-14 h-14 rounded-xl flex justify-center items-center mx-auto'>
                                <img src={item?.icon} alt={item?.title} className='w-5 h-5 mx-auto' />
                            </div>
                            <h5 className='my-3'>{item?.title}</h5>
                            {/* <p className=''>{item?.desc}</p> */}
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
    )
}

export default AdmissionProcess