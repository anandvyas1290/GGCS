import React from "react";

import dme from "../../../assets/Footer/career/dme.png";
import bdm from "../../../assets/footer/career/bdm.jpg";
import sme from "../../../assets/Footer/career/sme.png";
import reactIcon from "../../../assets/HireUs/react.jpg";
import laravel from "../../../assets/Footer/career/laravel.png";
import fullstack from "../../../assets/Footer/career/fullstack.png";

import { Desc, H3, H5 } from "../../../components/Typography";

const ExploreOpportunities = () => {
    const arr = [
        {
            id: 1,
            icon: sme,
            designation: "Social Media Executive",
            package: "3 - 3.5 ",
            openings: 3,
        },
        {
            id: 2,
            icon: reactIcon,
            designation: "React Js Developer",
            package: "4 - 6 ",
            openings: 4,
        },
        {
            id: 3,
            icon: bdm,
            designation: "Business Development management",
            package: "3.2 - 4.5 ",
            openings: 3,
        },
        {
            id: 4,
            icon: laravel,
            designation: "Laravel Developer",
            package: "5 - 8 ",
            openings: 2,
        },
        {
            id: 5,
            icon: dme,
            designation: "Digital Marketing Executive",
            package: "3 - 3.5 ",
            openings: 1,
        },
        {
            id: 6,
            icon: fullstack,
            designation: "Fullstack Developer",
            package: "10 - 12 ",
            openings: 2,
        },
    ];
    return (
        <div className="bg-[#eaf4f4] md:py-20 py-10">
            <div className="max-w-screen-xl px-3 mx-auto xl:px-0">
                <div>
                    <H3 className="mb-10 text-center">
                        Explore The Opportunities
                    </H3>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 sm:grid-cols-2 lg:gap-8">
                        {arr?.map((item) => (
                            <div
                                key={item?.id}
                                className="flex items-center justify-between px-3 py-8 text-left transition duration-500 transform bg-white shadow-xl group rounded-xl lg:pb-8 lg:px-8 hover:scale-110"
                            >
                                <div>
                                    <div className="mx-auto mb-3 lg:ml-0">
                                        <img
                                            src={item?.icon}
                                            alt={item?.designation}
                                            className="h-16 w-26"
                                        />
                                    </div>
                                    <H5 className="pb-1 text-xl !font-bold ">
                                        {item?.designation}
                                    </H5>
                                    <Desc className="font-semibold text-lg text-[#023e8a]">
                                        {item?.package}lpa
                                    </Desc>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-white font-bold relative text-2xl rounded-full h-12 w-12 leading-[3rem] inline-block text-center before:border before:rounded-full before:h-16 before:w-16 before:absolute before:-top-4 before:-left-2 before:border-[#94d2bd] bg-[#0a9396]">
                                        {item?.openings}
                                    </span>
                                    <Desc className="text-sm">Openings</Desc>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreOpportunities;
