import React from "react";
import BadgeIcon from "../../../assets/SEO/badge.svg";
import SmileyIcon from "../../../assets/SEO/smiley.svg";
import TeamIcon from "../../../assets/SEO/teams.svg";

import GradientBgImg from "../../../assets/SEO/optimize-bg.webp";
import ClientImg from "../../../assets/SEO/optimize-bg-2.webp";
import InputImg from "../../../assets/SEO/optimize-shape-2.webp";
import StatImg from "../../../assets/SEO/optimize-shape-1.webp";
import { PrimaryBtn } from "../../../components/Button";
import { H1Animate, TextAnimate } from "../../../components/Animation/H1Animate";

function SEO() {
    return (
        <div>
            <div className="max-w-screen-lg lg:max-w-screen-xl mx-auto py-0 sm:py-10">
                {/* SEO UI */}
                <div className="md:flex psm:py-10">
                    <div className="w-full md:w-1/2 px-3 md:mx-3">
                        <div className="my-10">
                            <TextAnimate className="!text-3xl font-tangerine font-semibold text-transparent bg-gradient-to-r from-[#501e9c] via-[#A44CEE] to-[#FF847F] bg-clip-text">
                                {"Looking for best SEO results?"}
                            </TextAnimate>
                            <H1Animate className="text-4xl sm:text-5xl font-semibold mb-4 sm:!leading-[4rem] !leading-[3rem]">
                                Organic Search
                                <br />
                                Engine Optimisation
                            </H1Animate>
                            <h6 className="text-base mb-4 text-grey2">
                                So I said down the you owt to do with me
                                absolutely bladdered, amongst what a plonker
                                brolly baking.
                            </h6>
                            <div className="my-10">
                                <div>
                                    <h5 className="text-base mb-1">
                                        Desktop Score
                                    </h5>
                                    <div className="w-full md:w-2/3 bg-gray-200 rounded-full h-3 mb-4 dark:bg-gray-100">
                                        <div
                                            className="bg-green-600 h-3 rounded-full dark:bg-green-500"
                                            style={{ width: "90%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-base  mb-1">
                                        Desktop Score
                                    </h5>
                                    <div className="w-full md:w-2/3 bg-gray-200 rounded-full h-3 mb-4 dark:bg-gray-100">
                                        <div
                                            className="bg-yellow-600 h-3 rounded-full dark:bg-yellow-500"
                                            style={{ width: "75%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <PrimaryBtn
                                    size="px-8 py-2"
                                    bgColor="bg-primaryBtn"
                                    className="border-2 rounded-full border-primaryBtn bg-0"
                                >
                                    Discover More
                                </PrimaryBtn>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 sm:mx-3 px-10 py-10 ">
                        <div className="relative">
                            <div>
                                <img
                                    src={GradientBgImg}
                                    alt="GradientBgImg"
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <img
                                    src={ClientImg}
                                    alt=""
                                    className="absolute bottom-0 left-0"
                                />
                                <img
                                    src={InputImg}
                                    alt=""
                                    className="absolute top-32 lg:-left-10"
                                />
                                <img
                                    src={StatImg}
                                    alt=""
                                    className="absolute top-20 right-0 lg:-right-10 shadow-2xl "
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Counter UI */}
                <div className="bg-gradient-to-r from-[#501E9C] via-[#A44CEE] to-[#FF847F] my-0 sm:my-20 px-3 sm:px-5 py-12 md:px-32 lg:px48 xl:px-64 xl:rounded-2xl">
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="pr-4">
                                    <img
                                        src={BadgeIcon}
                                        alt="Badge"
                                        className="w-10 h-10"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-4xl text-white">8+</h3>
                                    <p className="text-white">
                                        Successful Projects
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="pr-4">
                                    <img
                                        src={SmileyIcon}
                                        alt="smiley"
                                        className="w-10 h-10"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-4xl text-white">10+</h3>
                                    <p className="text-white">
                                        Happy Customers
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="pr-4">
                                    <img
                                        src={TeamIcon}
                                        alt="teams"
                                        className="w-10 h-10"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-4xl text-white">6+</h3>
                                    <p className="text-white">Team Members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SEO;
