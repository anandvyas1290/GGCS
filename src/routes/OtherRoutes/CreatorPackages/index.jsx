import React from "react";
import "./styles.css";

import { useNavigate } from "react-router-dom";

import { packages } from "../dummyData";
import { Desc, H1Animate, H5, SubHeading } from "../../../components/Typography";

export default function CreatorPackages(props) {
    let navigate = useNavigate();

    const data =
    {
        heading: "Package for New Channels Promotion",
        children: [{
            label: "Basic Requirement Fulfillment",
            desc: "Assisting in meeting essential prerequisites for channel establishment. Website Creation Assistance: Aid in designing and setting up their website for online presence."

            , className: 'col-span-2'
        },
        { label: "Policy Maintenance", desc: "Assistance in managing and maintaining channel policies.", className: 'col-span-1' },
        { label: "Security Enhancement", desc: "Implementing measures to bolster channel security and integrity.", className: 'col-span-1' }
            , {
            label: "Social Media Management",
            desc: "Actively handling social media accounts for channel promotion.", className: 'col-span-2'
        },
        { label: "Policy Crafting Support", desc: " Playing a pivotal role in shaping channel policies for efficiency.", className: 'col-span-2' },
        ]
    }

    return (
        <>
            <section className="max-w-screen-xl mx-auto py-20">
                <div className="pt-10 pb-24">
                    <H1Animate className="text-center pb-1 text-[#08AEEA]">
                        Packages for the Creators
                    </H1Animate>
                    <Desc className="max-w-screen-lg mx-auto text-center ">Empower Your Channel’s Success with Our Tailored Promotion Package! From Website Creation to Policy Maintenance, We’ve Got You Covered. Elevate Your Presence, Secure Your Future!</Desc>
                    {/* <hr className="mt-5 !h-[4px] lg:w-[950px] mx-auto bg-gray-200" /> */}
                </div>
                <div className="mb-20">
                    <div className="flex justify-center items-center pb-8">
                        <SubHeading className="text-center pb-2 border-b-4">
                            {data?.heading}
                        </SubHeading>

                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10" >
                        {data?.children?.map((item, i) => (
                            <div className={`grid grid-cols-[.1fr_1fr] gap-6 bg-gray-100 rounded-r-2xl h-28 shadow-2xl ${item?.className}`} key={i}>
                                <div className="rounded-r-full w-10 bg-[#00b4d8]"></div>
                                <div className="flex flex-col justify-center">
                                    <H5 className='text-'>{item?.label}</H5>
                                    <Desc className="text-gray-900 !text-base">
                                        {item?.desc}
                                    </Desc>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <section className="pt-10">
                    <div className="flex justify-center items-center">
                        <SubHeading className="!text-3xl pb-2 border-b-4">Categories</SubHeading>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-40 gap-20 pt-10">
                        {packages?.map((item) => (
                            <div
                                className="cursor-pointer package-card rounded-xl"
                                key={item?.id}
                                onClick={() =>
                                    navigate(`/creator-packages/${item?.slug}`, {
                                        state: { category: item?.slug },
                                    })
                                }
                            >
                                <div className="packages-wrapper">
                                    <img
                                        src={item?.coverImg}
                                        className="object-cover w-full h-full rounded-2xl"
                                    />
                                </div>
                                <h2 className="title absolute bottom-10 left-3 right-2 text-3xl text-center bg-gradient-to-r from-g1 via-g2 to-g3 text-transparent bg-clip-text !bg-card3">
                                    {item?.title}
                                </h2>

                                <div
                                    className={`mainImg !rounded-xl flex flex-col gap-5 items-center justify-center ${item?.mainBg} backdrop-blur`}
                                >
                                    <img src={item?.mainImg} className="h-[60%]" />
                                    <h3 className="text-3xl text-white">
                                        {item?.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section >
        </>
    );
}
