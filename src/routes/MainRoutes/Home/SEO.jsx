import React from "react";
import BadgeIcon from "../../../assets/SEO/badge.svg";
import SmileyIcon from "../../../assets/SEO/smiley.svg";
import TeamIcon from "../../../assets/SEO/teams.svg";

import GradientBgImg from "../../../assets/SEO/optimize-bg.webp";
import ClientImg from "../../../assets/SEO/optimize-bg-2.webp";
import InputImg from "../../../assets/SEO/optimize-shape-2.webp";
import StatImg from "../../../assets/SEO/optimize-shape-1.webp";
import { PrimaryBtn } from "../../../components/Button";

function SEO() {
    return (
        <div>
            <div className="max-w-screen-lg lg:max-w-screen-xl mx-auto py-10">
                {/* SEO UI */}
                <div className="md:flex py-10">
                    <div className="w-full md:w-1/2 mx-3">
                        <div className="my-10">
                            <p className="text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-700 to-pink-800">
                                Looking for best SEO results?
                            </p>
                            <h2 className="text-4xl sm:text-5xl font-semibold mb-4 sm:!leading-[4rem] !leading-[3rem]">
                                Organic Search
                                <br />
                                Engine Optimisation
                            </h2>
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
                    <div className="w-full md:w-1/2 mx-3 px-10 py-10 ">
                        <div className="relative">
                            <div>
                                <img src={GradientBgImg} alt="GradientBgImg" />
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
                                    className="absolute top-32 -left-10"
                                />
                                <img
                                    src={StatImg}
                                    alt=""
                                    className="absolute top-20 -right-10 shadow-2xl "
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Counter UI */}
                <div className="bg-gradient-to-r from-sky-500 to-indigo-500 my-20 py-12 px-64 rounded-2xl">
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-baseline">
                                <div className="pr-4">
                                    <img src={BadgeIcon} alt="Badge" />
                                </div>
                                <div>
                                    <h3 className="text-4xl text-white">
                                        180+
                                    </h3>
                                    <p className="text-white">
                                        Successful Projects
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-baseline">
                                <div className="pr-4">
                                    <img src={SmileyIcon} alt="smiley" />
                                </div>
                                <div>
                                    <h3 className="text-4xl text-white">
                                        180+
                                    </h3>
                                    <p className="text-white">
                                        Happy Customers
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-baseline">
                                <div className="pr-4">
                                    <img src={TeamIcon} alt="teams" />
                                </div>
                                <div>
                                    <h3 className="text-4xl text-white">64+</h3>
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