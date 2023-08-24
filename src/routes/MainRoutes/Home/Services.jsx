import React from "react";

import rocket from "../../../assets/Navbar/rocket.webp";
import services from "../../../assets/home/services/services.svg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import { servicesData } from "../../../db/dummy";

export default function Services(props) {
    return (
        <div className="max-w-screen-xl mx-auto px-12 pb-36">
            <div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-lg font-semibold text-transparent bg-gradient-to-r from-[#501e9c] via-[#A44CEE] to-[#FF847F] bg-clip-text">
                        Why services Us
                    </p>
                    <h5 className="text-6xl font-semibold">Our à services</h5>
                </div>

                <div className="grid grid-cols-3 gap-8 my-12">
                    {servicesData?.map((item) => (
                        <div
                            className="group animate-services p-2"
                            key={item.id}
                        >
                            <div className="flex justify-center">
                                <div className="relative">
                                    <img
                                        src={item?.shape}
                                        alt={item?.heading}
                                        className="relative"
                                    />
                                    <img
                                        src={item?.icon}
                                        alt={item?.heading}
                                        className="absolute left-0 right-0 top-1/2 text-center -translate-y-1/2"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <h4 className="text-2xl text-black2 font-semibold my-5">
                                    {item?.heading}
                                </h4>
                                <p className="text-grey1">{item?.desc}</p>
                            </div>
                            <div className=" flex justify-center my-5">
                                <span className="flex cursor-pointer">
                                    <p className="invisible group-hover:visible group-hover:animate-services">
                                        Read More
                                    </p>
                                    <span>
                                        <ArrowRightIcon className="w-7 h-6" />
                                    </span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <div className="w-1/2 rounded-full shadow-contact bg-grey3 p-3 text-center">
                        <div className="flex justify-center gap-2">
                            <span>
                                <img
                                    src={rocket}
                                    className="h-4 w-4 flex align-middle animate-pulse"
                                />
                            </span>
                            <p className="flex">
                                You can also find our
                                <Link className="mx-2 relative text-primary ">
                                    Services
                                    <img
                                        src={services}
                                        alt="services"
                                        className="w-full h-full absolute left-0 right-0 -bottom-2.5"
                                    />
                                </Link>
                                to contact for the consulting.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
