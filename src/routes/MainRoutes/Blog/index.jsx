import React from "react";

import blog1 from "../../../assets/blog/blog1.webp";
import blog2 from "../../../assets/blog/blog2.webp";
import blog3 from "../../../assets/blog/blog3.webp";
import blog4 from "../../../assets/blog/blog4.webp";
import blog5 from "../../../assets/blog/blog5.webp";
import blog6 from "../../../assets/blog/blog6.webp";
import blog7 from "../../../assets/blog/blog7.webp";
import shape1 from "../../../assets/blog/shape1.webp";

import { ClockIcon, UserIcon } from "@heroicons/react/24/outline";

import { useNavigate } from "react-router-dom";

const blogData = [
    {
        id: 1,
        category: "Technical Seo",
        label: "10 Quick Tips About Blogging",
        date: "Oct 16,2023",
        writer: "Eleanor Fant",
        image: blog1,
    },
    {
        id: 2,
        category: "Technical Seo",
        label: "7 of the Best Examples of Beautiful Blog Design",
        date: "Oct 16,2023",
        writer: "Eleanor Fant",
        image: blog2,
    },
    {
        id: 3,
        category: "Technical Seo",
        label: "10 Quick Tips About Blogging",
        date: "Oct 16,2023",
        writer: "Eleanor Fant",
        image: blog3,
    },
    {
        id: 4,
        category: "Technical Seo",
        label: "10 Quick Tips About Blogging",
        date: "Oct 16,2023",
        writer: "Eleanor Fant",
        image: blog1,
    },
    {
        id: 5,
        category: "Technical Seo",
        label: "10 Quick Tips About Blogging",
        date: "Oct 16,2023",
        writer: "Eleanor Fant",
        image: blog4,
    },
    {
        id: 6,
        category: "Technical Seo",
        label: "10 Quick Tips About Blogging",
        date: "Oct 16,2023",
        writer: "Eleanor Fant",
        image: blog5,
    },
    {
        id: 7,
        category: "Technical Seo",
        label: "10 Quick Tips About Blogging",
        date: "Oct 16,2023",
        writer: "Eleanor Fant",
        image: blog6,
    },
    {
        id: 8,
        category: "Technical Seo",
        label: "10 Quick Tips About Blogging",
        date: "Oct 16,2023",
        writer: "Eleanor Fant",
        image: blog7,
    },
];

export default function Blog(props) {
    let navigate = useNavigate();
    return (
        <div className="font-jakarta">
            <section className="pt-48 pb-32 blogBanner relative">
                <div className="blackLayer">
                    <div className="blogBg"></div>
                </div>
                <div className="container px-12 text-white1">
                    <div className="w-5/12 mx-auto text-center">
                        <h3 className="text-[80px] font-extrabold -mb-2">
                            Blog
                        </h3>
                        <span>
                            <b
                                className="cursor-pointer"
                                onClick={() => navigate("/")}
                            >
                                Home
                            </b>
                            <b> . </b>
                            <b>Blog</b>
                        </span>
                    </div>
                </div>
                <div className="absolute left-36 top-44 animate-blogShape">
                    <img src={shape1} alt="ggcs blog" />
                </div>
            </section>
            <section className="pt-32 pb-24 bg-white">
                <div className="max-w-screen-xl mx-auto px-12 flex gap-20">
                    <div className="w-8/12 grid grid-cols-2 gap-10">
                        {blogData?.map((item) => (
                            <div
                                className="border border-[#EAEAED] rounded-lg shadow-blogCard"
                                key={item?.id}
                            >
                                <div>
                                    <img
                                        className="rounded-tl-lg rounded-tr-lg cursor-pointer"
                                        src={item?.image}
                                        alt={item?.category}
                                    />
                                </div>
                                <div className="p-6">
                                    <h4 className="max-w-fit bg-[#4260ff1a] text-xs !font-semibold p-1.5 mb-4 rounded-lg text-blue1">
                                        {item?.category?.toUpperCase()}
                                    </h4>
                                    <h3 className="text-xl font-bold mb-3 cursor-pointer hover:text-blue1 transition-all duration-150">
                                        {item?.label}
                                    </h3>
                                    <div className="flex gap-2 text-grey6">
                                        <span className="flex items-center gap-2">
                                            <ClockIcon className="w-4 h-4" />
                                            <p className="text-sm">
                                                {item?.date}
                                            </p>
                                        </span>
                                        <b>|</b>
                                        <span className="flex items-center gap-1">
                                            <UserIcon className="w-5 h-4" />
                                            <p className="text-sm">
                                                {item?.writer}
                                            </p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-4/12 bg-red-50">
                        Keywords , Search and Filters Section
                    </div>
                </div>
            </section>
        </div>
    );
}
