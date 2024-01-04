import React from "react";
import Dots from "../../../assets/services/Dot's1.svg";
import Lines from "../../../assets/services/3 Lines.svg";
import careerHero from "../../../assets/Footer/career-hero.svg";

const Hero = () => {
    return (
        <section className="relative bg-white">
            <div className="lg:absolute lg:flex none justify-center items-center right-0 lg:w-[55%]  lg:h-full bg-mainLight lg:rounded-bl-full">
                <img
                    src={careerHero}
                    alt="career"
                    className="lg:h-[500px] h-96 w-full lg:pt-0 lg:pb-0 pb-10 pt-20"
                />
            </div>
            <div className="absolute top-0 right-10 lg:h-full lg:rounded-bl-full">
                <img src={Lines} alt="career" className="h-64 lg:h-64" />
            </div>
            <div className="absolute bottom-0 left-0 ">
                <img src={Dots} alt="career" className="h-64 lg:h-64" />
            </div>
            <div className="absolute left-0 w-32 h-32 rounded-br-full bg-mainDark"></div>
            <div className="relative max-w-screen-xl px-3 mx-auto xl:px-0 ">
                <div className="grid gap-5 py-24">
                    <h1 className="text-5xl leading-[65px] font-bold mb-4">
                        Your Passion Begins <br /> Here !
                    </h1>
                    <p className="mb-3 text-lg font-semibold text-gray-700">
                        Join over 2 million others in the future of work, <br />
                        The easiest way to get your new job.
                    </p>
                    <div className="w-full lg:w-2/5">
                        <div className="relative flex items-center w-full px-4 py-3 bg-white rounded-full shadow-2xl">
                            <input
                                type={"text"}
                                placeholder={"Job Title, Keywords, or Company"}
                                className={`text-gray-500 text-[17px] font-semibold px-2 py-2 !outline-none border-none w-4/5  border-0 focus:ring-0 `}
                            />
                            <div className="text-center text-white font-semibold p-2 bg-blue-600 rounded-full sm:w-1/5 w-[100px]">
                                <button>Search</button>
                            </div>
                        </div>
                    </div>
                    <p className="text-[17px] font-semibold mt-3">
                        Get your dream job.
                        {/* <a href='#' className="text-blue-500">Sign Up for free now</a> */}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
