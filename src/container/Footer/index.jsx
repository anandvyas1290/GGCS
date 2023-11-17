import React from 'react'
import logo from "../../assets/footer/GGCSNew.svg";
import { EnvelopeIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { menuService, services, socialMedias } from '../../db/dummy';
import { useNavigate } from 'react-router-dom';

import { PrimaryBtn } from '../../components/Button';

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
// const PrimaryBtn = ({ children, className }) => {
//     return (
//         <button className={`border-2 rounded-full py-2 px-10  text-white  bg-blue-600 hover:text-blue-600 hover:bg-white  hover:border-blue-600  ${className}`}>
//             {children}
//         </button>
//     )
// }
// const SocialIcons = ({ Icon, name, children, className }) => {
//     return (
//         <div className={`rounded-full w-10 h-10 mr-4 bg-white text-gray-500 flex items-center justify-center  hover:bg-blue-400  cursor-pointer ${className}`}>
//             <img src={Icon} alt={name} className={`w-4 hover:!text-white ${children}`} />
//         </div>
//     )
// }

export default function Footer() {
    const navigate = useNavigate()
    return (
        <div className='bg-gray-100'>
            <div className='max-w-screen-md lg:max-w-screen-xl mx-auto pt-14 sm:pt-20 pb-20 px-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5'>
                    <div className='mb-3 lg:mb-0 '>
                        <div className='mb-4'>
                            <H5 className="!text-xl !font-bold w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#501E9C] via-[#A44CEE] to-[#FF847F]">
                                Global Garner Consultancy Service Pvt Limited
                            </H5>                            {/* <img src={logo} alt="logo" className="h-full w-1/2 cursor-pointer" /> */}
                        </div>
                        <div className='mb-5'>
                            <p className=' font-normal text-gray-500'>
                                This SEO is most reputed firm
                                which provides various online
                                marketing
                            </p>
                        </div>
                        <div className=''>
                            <PrimaryBtn
                                size="px-8 py-2"
                                bgColor="bg-primaryBtn"
                                className="border-2 rounded-full border-primaryBtn"
                            >
                                Grow Traffic
                            </PrimaryBtn>
                        </div>
                    </div>
                    <div className=''>
                        <div className='lg:pl-10'>
                            <H5 className="mb-5">Information</H5>
                            <div className='pl-4'>
                                <ul className="list-disc">
                                    {menuService?.map((item, i) =>
                                        <li className='text-base font-normal text-gray-500 mb-2 cursor-pointer hover:text-gray-900' key={i}
                                            onClick={() => {
                                                navigate(item?.link)
                                            }}>
                                            {item.label === "Home" ? <a href="#">{item.label}</a> : <>{item.label}</>}
                                        </li>

                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='lg:pl-10'>
                            <H5 className="mb-5">
                                Services
                            </H5>
                            <div className='pl-4'>
                                <ul className="list-disc">
                                    {
                                        services?.map((item, i) => (
                                            <li className='text-base font-normal text-gray-500 mb-2' key={i}>{item?.label}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <H5 className="mb-2">Subscribe</H5>
                        <p className=' font-normal text-gray-500'>Only valuable resource no bullshit</p>
                        <div className='my-8'>
                            <Input placeholder={"Your Email"} type={"mail"} />
                        </div>
                        <div className="flex gap-8">
                            {socialMedias?.map((item, i) => (
                                <div className="" key={i}
                                    onClick={() => window.open(item?.link, "_blank",
                                        "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes")}>
                                    <img
                                        src={item?.icon}
                                        alt={item?.name}
                                        className={`w-6 cursor-pointer opacity-50 hover:opacity-100 hover:text-primary`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='pt-10'>
                    <div className='bg-white rounded-full py-4 sm:px-2 md:px-5 flex justify-center'>
                        <p className='text-gray-400'>
                            <b>© 2023</b> <a className="font-semibold text-transparent w-fit bg-clip-text bg-gradient-to-r from-[#501E9C] via-[#A44CEE] to-[#FF847F]">GGCS</a> All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}
