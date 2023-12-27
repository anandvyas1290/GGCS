import React from "react";

import blog1 from "../../../assets/blog/blog1.webp";
import blog2 from "../../../assets/blog/blog2.webp";
import blog3 from "../../../assets/blog/blog3.webp";
import blog4 from "../../../assets/blog/blog4.webp";
import blog5 from "../../../assets/blog/blog5.webp";
import blog6 from "../../../assets/blog/blog6.webp";
import blog7 from "../../../assets/blog/blog7.webp";
import shape1 from "../../../assets/blog/shape1.webp";
import {
    ClockIcon,
    UserIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import { useNavigate } from "react-router-dom";
import { H5, H6 } from "../../../components/Typography";

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

const categories = [
    { id: 1, name: "Events", count: 2 },
    { id: 2, name: "Marketing", count: 4 },
    { id: 3, name: "Digital Product", count: 8 },
    { id: 4, name: "GGCS SEO", count: 1 },
    { id: 5, name: "SEO", count: 5 },
];

export default function Blog(props) {
    let navigate = useNavigate();

    return (
        <div className="font-jakarta">
            <section className="relative pt-48 pb-32 blogBanner">
                <div className="blackLayer">
                    <div className="blogBg" />
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
                <div className="flex max-w-screen-xl gap-16 px-12 mx-auto">
                    <div className="grid w-8/12 grid-cols-2 gap-10">
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
                                    <H5 className="mb-3 transition-all duration-150 cursor-pointer hover:text-blue1">
                                        {item?.label}
                                    </H5>
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
                    <div className="w-4/12">
                        <div className="p-8 mb-5 rounded-md bg-grey7">
                            <div className="flex gap-3">
                                <input
                                    type=""
                                    placeholder="Type Something..."
                                    className="w-9/12 p-3 text-sm rounded-md text-ellipsis"
                                />
                                <div className="w-2/12 p-4 rounded-md bg-blue1">
                                    <MagnifyingGlassIcon className="w-5 h-5 text-white1" />
                                </div>
                            </div>
                        </div>
                        <div className="p-8 mb-5 rounded-md bg-grey7">
                            <H6 className="mb-5">Recent Post</H6>
                            <div className="">
                                {blogData?.slice(0, 3)?.map((item) => (
                                    <div
                                        key={item?.id}
                                        className="flex gap-4 mb-3"
                                    >
                                        <div className="w-3/12">
                                            <img
                                                src={item?.image}
                                                alt={item?.category}
                                                className="object-fill w-20 h-24 rounded-md"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-center w-9/12 gap-3">
                                            <H5 className="!font-medium">
                                                {item?.label}
                                            </H5>
                                            <p className="text-sm text-light2">
                                                {item?.date}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-8 mb-5 rounded-md bg-grey7">
                            <H5 className="mb-5">Categories</H5>
                            <div className="text-sm text-grey6">
                                {categories?.map((item) => (
                                    <div
                                        key={item?.id}
                                        className="flex justify-between mb-2"
                                    >
                                        <div>{item?.name}</div>
                                        <div className="px-3 py-1 bg-white border rounded-2xl">
                                            <p>
                                                {item?.count < 10 ? 0 : null}
                                                {item?.count}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
