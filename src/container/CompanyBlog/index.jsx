import React from 'react';
import blog from "../../assets/CompanyBlog/blog-1.webp"

const PrimaryBtn = ({ children, className }) => {
    return (
        <button className={`border-2 rounded-full py-2 px-10  text-white  bg-blue-600 hover:text-blue-600 hover:bg-white  hover:border-blue-600  ${className}`}>
            {children}
        </button>
    )
}
export default function CompanyBlog() {
    return (
        <div className='bg-gray-100'>
            <div className='max-w-screen-xl mx-auto px-6 py-12'>
                <div className='sm:flex justify-between items-center mb-12'>
                    <div>
                        <h6 className='text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-700 to-pink-800'>What's Going On
                        </h6>
                        <h2 className='text-4xl sm:text-5xl font-semibold'>Company blog & Insights</h2>
                    </div>
                    <div className='my-5 sm:my-0'>
                        <PrimaryBtn >More Articles</PrimaryBtn>
                    </div>
                </div>
                <div>
                    <div className='w-1/2'>
                        <div className='flex rounded-2xl bg-white'>
                            <img src={blog} alt="" className='rounded-l-2xl' />
                            <div className='my-12 px-6'>
                                <div>
                                    <h6 className='text-lg'>SEO agency</h6>
                                    <h5 className='text-2xl'>Wins 2023 good design london Award</h5>
                                    <p>The annual good design Awards
                                        is london oldest prestigious.</p>
                                </div>
                                <div>
                                    <p>Nev 21,2023</p>
                                    <p>
                                        By Admin
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
