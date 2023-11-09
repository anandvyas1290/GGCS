import React from "react";
import mission from "../../../assets/about/vision/mission.svg";
import purpose from "../../../assets/about/vision/purpose.svg";
import floatImg from "../../../assets/about/vision/smill.webp";
import missionShape from "../../../assets/about/vision/mission-shape-1.webp";
import treeIcon from "../../../assets/about/vision/mission-shape-2.webp";
import counter1 from "../../../assets/about/vision/trophy.webp";
import counter2 from "../../../assets/about/vision/multiuser.webp";
import counter3 from "../../../assets/about/vision/counter-shape3.webp";

import Container from "../../../components/Layout/Layout";

const counterData = [
    {
        Icon: counter1,
        num: "1 +",
        label: (
            <p className=" text-base pl-3">
                Years <br />
                Of Experience
            </p>
        ),
    },

    {
        Icon: counter2,
        num: "10 +",
        label: (
            <p className=" text-base pl-3">
                Project <br />
                Complete
            </p>
        ),
    },

    {
        Icon: counter3,
        num: "1 +",
        label: (
            <p className=" text-base pl-3">
                Satisfied Clients On <br />
                India
            </p>
        ),
    },
];
function Vision() {
    return (
        <div>
            <Container>
                <div className="pt-10 pb-48">
                    <div className="sm:flex">
                        <div className="w-full md:w-1/2 mb-5 lg:mb-0 ">
                            <div className="bg-red-100 px-3 sm:px-6 md:px-14 py-8 md:py-14 rounded-lg">
                                <span className="hidden md:block">
                                    <img
                                        src={mission}
                                        alt="mission"
                                        className="mb-5 w-full"
                                    />
                                </span>
                                <p className="text-lg text-gray-700">
                                    We are in business to develop an SEO
                                    software that allows anyone to independently
                                    optimize and promote a website on the web,
                                    regardless of the level of expertise.
                                </p>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <img src={floatImg} alt="floatIcon" />
                        </div>
                    </div>
                    <div className="md:flex">
                        <div className="md:w-2/5 hidden md:block">
                            <div className="flex relative">
                                <div>
                                    <img src={treeIcon} alt="floatIcon" />
                                </div>
                                <div className="absolute -top-10 right-2">
                                    <img src={missionShape} alt="floatIcon" />
                                </div>
                            </div>
                        </div>
                        <div className="md:w-3/5 relative">
                            <div className="bg-green-100 px-3 sm:px-6 md:px-14 py-8 md:py-14 rounded-lg ">
                                <span>
                                    <img
                                        src={purpose}
                                        alt="purpose"
                                        className="mb-5"
                                    />
                                </span>
                                <p className="text-lg text-gray-700">
                                    We aim to constantly improve the user
                                    experience, functionality, and support to
                                    provide the best possible options for search
                                    engine optimization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center sm:justify-between mb-8 sm:mb-14">
                    {counterData?.map((item, i) => {
                        return (
                            <div
                                className=" flex items-center relative z-10 py-6"
                                key={i}
                            >
                                <div className="absolute bottom-0 left-0 -z-10">
                                    <img src={item?.Icon} alt="img" />
                                </div>
                                <div className="flex ml-10">
                                    <h4 className=" text-5xl font-bold text-blue-500 ">
                                        {item?.num}
                                    </h4>
                                    {item?.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default Vision;
