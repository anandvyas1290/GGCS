import React from "react";
import logo from "../../assets/footer/GGCSNew.svg";
import { EnvelopeIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import {
    GGCSPolicy,
    menuService,
    services,
    socialMedias,
} from "../../db/dummy";
import { useNavigate } from "react-router-dom";

import { PrimaryBtn } from "../../components/Button";

const Input = ({ text, placeholder, className }) => {
    return (
        <div className="relative flex items-center w-full px-2 py-2 bg-white rounded-full">
            <EnvelopeIcon className="w-6 h-6 mx-2" />
            <div className="">
                <input
                    type={text}
                    placeholder={placeholder}
                    className={`px-1 py-2 outline-none  ${className}`}
                />
            </div>
            <div className="absolute p-2 bg-blue-600 rounded-full right-3">
                <ArrowUpRightIcon className="w-6 h-6 text-white" />
            </div>
        </div>
    );
};
const H5 = ({ children, className }) => {
    return <h5 className={`text-xl font-semibold ${className}`}>{children}</h5>;
};
const H6 = ({ children, className }) => {
    return <h5 className={` font-semibold ${className}`}>{children}</h5>;
};
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
    const navigate = useNavigate();
    return (
        <div className="bg-gray-100">
            <div className="max-w-screen-md px-6 pb-20 mx-auto lg:max-w-screen-xl pt-14 sm:pt-20">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
                    <div className="mb-3 lg:mb-0 ">
                        <div className="mb-4">
                            <H5 className="!text-[22px] !font-bold w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#501E9C] via-[#A44CEE] to-[#FF847F]">
                                Global Garner Consultancy Services
                            </H5>
                            {/* <img src={logo} alt="logo" className="w-1/2 h-full cursor-pointer" /> */}
                        </div>
                        <div className="mb-5">
                            <p className="font-normal text-gray-500 ">
                                Empower Your Business With The Digital Marketing
                                Landscape Through Innovative Strategies and
                                Data-Driven Insights
                            </p>
                        </div>
                        <div className="">
                            <PrimaryBtn
                                size="px-8 py-2"
                                bgColor="bg-primaryBtn"
                                className="border-2 rounded-full border-primaryBtn"
                            >
                                Grow Traffic
                            </PrimaryBtn>
                        </div>
                    </div>
                    <div className="">
                        <div className="lg:pl-10">
                            <H6 className="mb-5">Information Quick Links</H6>
                            <div className="pl-4">
                                <ul className="list-disc">
                                    {menuService?.map((item, i) => (
                                        <li
                                            className="mb-2 text-sm font-normal text-gray-500 cursor-pointer hover:text-gray-900"
                                            key={i}
                                            onClick={() => {
                                                navigate(item?.link);
                                            }}
                                        >
                                            {item.label === "Home" ? (
                                                <a href="#">{item.label}</a>
                                            ) : (
                                                <>{item.label}</>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <H6 className="mb-5">Services</H6>
                        <div className="pl-4">
                            <ul className="list-disc">
                                {services?.map((item, i) => (
                                    <li
                                        className="mb-2 text-sm font-normal text-gray-500 cursor-pointer hover:text-gray-900"
                                        key={i}
                                        onClick={() =>
                                            window.open(
                                                `/service/${item?.slug}`,
                                                "_blank"
                                            )
                                        }
                                    >
                                        {item?.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <ul className="mb-4 list-disc border-b-2 border-b-gray-300 ">
                            {GGCSPolicy?.map((item, i) => {
                                return (
                                    <li
                                        key={i}
                                        className="mb-2 text-sm font-normal text-gray-500 cursor-pointer"
                                        onClick={() =>
                                            window.open(
                                                `${item?.slug}`,
                                                "_blank"
                                            )
                                        }
                                    >
                                        {item?.label}
                                    </li>
                                );
                            })}
                        </ul>
                        {/* <hr className='border-[1px]' /> */}
                        <H5 className="mb-4">Subscribe</H5>
                        {/* <p className='font-normal text-gray-500 '>Only valuable resource</p> */}
                        <div className="mb-8">
                            <Input placeholder={"Your Email"} type={"mail"} />
                        </div>
                        <div className="flex gap-8">
                            {socialMedias?.map((item, i) => (
                                <div
                                    className=""
                                    key={i}
                                    onClick={() =>
                                        window.open(
                                            item?.link,
                                            "_blank",
                                            "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes"
                                        )
                                    }
                                >
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
                <div className="pt-5 text-center">
                    {/* <div className='flex items-center justify-center'>
                        <ul className='flex items-center justify-center mb-3 '>
                            {["Privacy Policy", "Terms and Condition", "Help", "Legal Info"]?.map((item, i) => {
                                return (
                                    <li
                                        key={i}
                                        className="px-4 py-2 mx-3 font-semibold bg-white border border-blue-500 rounded-full w-fit text-primaryBtn"
                                    >
                                        <p className="">{item}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div> */}
                    <address>
                        <b>Global Garner Sales Services Limited </b>
                        5th floor, Grand Emporio, Motera Stadium Road,
                        Ahmedabad, Gujarat 380005
                    </address>
                </div>
                <div className="pt-5">
                    <div className="flex justify-center py-4 bg-white border rounded-full sm:px-2 md:px-5">
                        <p className="text-gray-400">
                            <b>© 2023</b>
                            <a href="/" className="">
                                <b>GGCS</b>
                            </a>
                            All Rights Reserved. A unit of
                            <a
                                href="https://beta.globalgarner.com"
                                target="_blank"
                            >
                                <b className="ml-2 text-transparent bg-gradient-to-r from-g1 via-g2 to-g3 bg-clip-text">
                                    Global Garner.
                                </b>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
