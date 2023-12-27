import React from "react";

import { ourAlumni } from "./dummyData";
import { H4 } from "../../../components/Typography";

function OurAlumni() {
    return (
        <section className="max-w-screen-lg px-3 mx-auto md:px-10 sm:px-6 ">
            <section className="">
                <div className="pt-20 mx-auto text-center md:max-w-xl lg:max-w-3xl sm:pt-14">
                    <h3 className="mb-6 text-3xl font-bold">
                        {ourAlumni.title}
                    </h3>
                    {/* <p className="pb-2 mb-6 md:mb-12 md:pb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                        error amet numquam iure provident voluptate esse quasi, veritatis
                        totam voluptas nostrum quisquam eum porro a pariatur veniam.
                    </p> */}
                </div>

                <div className="grid grid-cols-1 gap-6 pt-5 text-center md:grid-cols-3 sm:grid-cols-2">
                    {ourAlumni?.list?.map((item) => {
                        return (
                            <div key={item?.id} className="text-neutral-700">
                                <div className="block bg-white rounded-lg shadow-lg ">
                                    <div
                                        className={`h-28 overflow-hidden rounded-t-lg ${
                                            item?.name
                                                ? `bg-[${item?.color}]`
                                                : ""
                                        }`}
                                    ></div>
                                    <div className="w-24 mx-auto -mt-12 overflow-hidden bg-white border-2 border-white rounded-full dark:border-neutral-800 dark:bg-neutral-800">
                                        <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                                    </div>
                                    <div className="p-6">
                                        <H4 className="mb-4">{item?.name}</H4>
                                        {/* <div
                                            className="w-10 mx-auto my-2 overflow-hidden bg-white border-2 border-white rounded-full">
                                            <img
                                                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                                        </div> */}
                                        <hr />
                                        <p className="mt-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="inline-block pr-2 h-7 w-7"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                            </svg>
                                            Lorem ipsum dolor sit amet eos
                                            adipisci, consectetur adipisicing
                                            elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex justify-center mt-10">
                    <button className="flex items-center px-6 py-3 text-white uppercase bg-red-600 border-2 border-red-500 rounded-lg ">
                        <span> More Stories</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 "
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>
            </section>
        </section>
    );
}

export default OurAlumni;
