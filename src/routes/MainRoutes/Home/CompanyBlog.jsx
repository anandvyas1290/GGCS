import React from "react";
import blog from "../../../assets/home/companyBlog/blog1.webp";

import { H1Animate, TextAnimate, H4, H6 } from "../../components/Typography";
import { PrimaryBtn } from "../../../components/Button";

export default function CompanyBlog() {
    return (
        <div className="bg-gray-100">
            <div className="max-w-screen-md px-6 mx-auto lg:max-w-screen-xl py-28">
                <div className="items-center justify-between mb-12 sm:flex">
                    <div>
                        <TextAnimate className="w-fit">
                            What's Going On
                        </TextAnimate>
                        <H1Animate>Company blog & Insights</H1Animate>
                    </div>
                    <div className="my-5 sm:my-0">
                        <PrimaryBtn size="px-8 py-2" bgColor="bg-primaryBtn">
                            More Articles
                        </PrimaryBtn>
                    </div>
                </div>
                <div className="lg:flex lg:justify-between">
                    {[1, 1]?.map((d, i) => {
                        return (
                            <div className="mb-8 lg:w-11/12 lg:mx-5" key={i}>
                                <div className="bg-white md:flex rounded-2xl">
                                    <img
                                        src={blog}
                                        alt=""
                                        className="w-full h-auto md:w-auto lg:w-1/3 md:rounded-l-2xl"
                                    />
                                    <div className="px-6 py-8 md:px-10">
                                        <div>
                                            <H6 className="w-1/2 p-1 mb-2 text-center rounded-full text-md lg:w-1/2 text-primaryBtn bg-light1">
                                                SEO agency
                                            </H6>
                                            <H4 className="mb-3 cursor-pointer hover:text-primaryBtn">
                                                Wins 2023 good design london
                                                Award
                                            </H4>
                                            <p className="mb-3 text-grey1">
                                                The annual good design Awards is
                                                london oldest prestigious.
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <p className="font-semibold text-black2">
                                                Nev 21,2023
                                            </p>
                                            <span className="mx-4">|</span>
                                            <p className="font-semibold text-black2">
                                                <i className="font-medium text-grey2">
                                                    {" "}
                                                    By
                                                </i>{" "}
                                                Admin
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
