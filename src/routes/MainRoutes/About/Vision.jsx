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
        num: "25 +",
        label: (
            <p className=" text-base pl-3">
                Years <br />
                Of Experience
            </p>
        ),
    },

    {
        Icon: counter2,
        num: "340 +",
        label: (
            <p className=" text-base pl-3">
                Project <br />
                Complete
            </p>
        ),
    },

    {
        Icon: counter3,
        num: "25 +",
        label: (
            <p className=" text-base pl-3">
                Satisfied Clients On <br />
                24 Countries
            </p>
        ),
    },
];
function Vision() {
    return (
        <div>
            <Container>
                <div className="pt-10 pb-48">
                    <div className="flex">
                        <div className="w-1/2">
                            <div className="bg-red-100 px-14 py-14 rounded-lg">
                                <span>
                                    <img
                                        src={mission}
                                        alt="mission"
                                        className="mb-5"
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
                        <div>
                            <div>
                                <div>
                                    <img src={floatImg} alt="floatIcon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-2/5">
                            <div className="flex relative">
                                <div>
                                    <img src={treeIcon} alt="floatIcon" />
                                </div>
                                <div className="absolute -top-10 right-2">
                                    <img src={missionShape} alt="floatIcon" />
                                </div>
                            </div>
                        </div>
                        <div className="w-3/5 relative">
                            <div className="bg-green-100 px-14 py-14 rounded-lg absolute -top-10 left-10">
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
                <div className="flex justify-between">
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
