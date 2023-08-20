import React from 'react'
import logo from "../../assets/Footer/logo.svg";
import Fb from "../../assets/Footer/facebook-f.svg"
import Ig from "../../assets/Footer/instagram.svg"
import Xt from "../../assets/Footer/x-twitter.svg"
import In from "../../assets/Footer/linkedin.svg"
import { EnvelopeIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";


const Input = ({ text, placeholder, className }) => {
    return (
        <div className='relative flex items-center rounded-full w-full bg-white py-2 px-2'>
            <EnvelopeIcon className="h-6 w-6 mx-2" />
            <div className=''>
                <input type={text} placeholder={placeholder} className={`px-1 py-2 outline-none  ${className}`} />
            </div>
            <div className="p-2  absolute right-3 rounded-full bg-blue-600">
                <ArrowUpRightIcon className="h-6 w-6 text-white" />
            </div>
        </div>
    )
}
const H5 = ({ children, className }) => {
    return (
        <h5 className={`text-xl font-semibold ${className}`}>
            {children}
        </h5>
    )
}
const PrimaryBtn = ({ children, className }) => {
    return (
        <button className={`border-2 rounded-full py-2 px-10  text-white  bg-blue-600 hover:text-blue-600 hover:bg-white  hover:border-blue-600  ${className}`}>
            {children}
        </button>
    )
}
const SocialIcons = ({ Icon, name, children, className }) => {
    return (
        <div className={`rounded-full w-10 h-10 mr-4 bg-white text-gray-500 flex items-center justify-center  hover:bg-blue-500 cursor-pointer ${className}`}>
            <img src={Icon} alt={name} className={`w-3 hover:text-white ${children}`} />
        </div>
    )
}
export default function Footer() {
    return (
        <div className='bg-gray-100'>
            <div className='max-w-screen-md lg:max-w-screen-xl mx-auto pt-20 pb-20 px-6'>
                <div className='flex  flex-wrap justify-between '>
                    <div className='mb-3 lg:mb-0 lg:w-1/4 md:w-1/2'>
                        <div className='mb-6'>
                            <img src={logo} alt="logo" />
                        </div>
                        <div className='mb-6'>
                            <p className='text-lg font-normal text-gray-500'>
                                This SEO is most reputed firm
                                which provides various online
                                marketing
                            </p>
                        </div>
                        <div className=''>
                            <PrimaryBtn>Grow Traffic</PrimaryBtn>
                        </div>
                    </div>
                    <div className='lg:w-1/4 md:w-1/2'>
                        <div className='lg:pl-10'>
                            <H5 className="mb-5">Information</H5>
                            <div className='pl-4'>
                                <ul className="list-disc">
                                    <li className='text-base font-normal text-gray-500 mb-2'>Home</li>
                                    <li className='text-base font-normal text-gray-500 mb-2'>About Us </li>
                                    <li className='text-base font-normal text-gray-500 mb-2'>Project</li>
                                    <li className='text-base font-normal text-gray-500 mb-2'>Plan & Pricing</li>
                                    <li className='text-base font-normal text-gray-500 mb-2'>Blog</li>
                                    <li className='text-base font-normal text-gray-500 mb-2'>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/4 md:w-1/2'>
                        <div className='lg:pl-10'>
                            <H5 className="mb-5">
                                Services
                            </H5>
                            <div div className='pl-4'>
                                <ul className="list-disc">
                                    <li className='text-base font-normal text-gray-500 mb-2'>SEO Audit</li>
                                    <li className='text-base font-normal text-gray-500 mb-2'>SEO Services</li>
                                    <li className='text-base font-normal text-gray-500 mb-2'>SEO Marketing</li>
                                    <li className='text-base font-normal text-gray-500 mb-2'>SEO Analysis</li>
                                    <li className='text-base font-normal text-gray-500 mb-2'>SEO Optimization</li>
                                    <li className='text-base font-normal text-gray-500 mb-2'>Social Media</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/4 md:w-1/2'>
                        <H5 className="mb-2">Subscribe</H5>
                        <p className='text-lg font-normal text-gray-500'>Only valuable resource no bullshit</p>
                        <div className='my-8'>
                            <Input placeholder={"Your Email"} type={"mail"} />
                        </div>
                        <div className='flex '>
                            <SocialIcons name="facebook" Icon={Fb} className={"text-blue-500"} />
                            <SocialIcons name="instagram" Icon={Ig} />
                            <SocialIcons name="x-twitter" Icon={Xt} />
                            <SocialIcons name="linkedin" Icon={In} />
                        </div>
                    </div>
                </div>
                <div className='pt-10'>
                    <div className='bg-white rounded-full py-4 sm:px-2 md:px-5 flex justify-center'>
                        <p className='text-gray-400'>
                            © 2023 <a className="text-blue-600">GGCS</a> All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}
