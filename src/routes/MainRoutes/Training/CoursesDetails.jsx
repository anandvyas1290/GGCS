import React, { useEffect, useState } from "react";
import heroShape1 from "../../../assets/training/details/heroShape1.png";
import star from "../../../assets/icons/star.svg";

import { useLocation } from "react-router-dom";

import { courses, features } from "./dummyData";
import MinCriteria from "./MinCriteria";
import AdmissionProcess from "./AdmissionProcess";
import OurAlumni from "./OurAlumni";
import FAQ from "./FAQ";

export default function CoursesDetails(props) {
    let [state, setState] = useState({ data: {} });
    let location = useLocation();
    let routeData = location?.state?.course;
    useEffect(() => {
        let courseData = courses?.filter((item) => {
            return item?.slug === routeData;
        })[0];
        setState((prev) => {
            return { ...prev, data: courseData };
        });
    }, [routeData]);

    let { data } = state;
    return (
        <div className="">
            <section
                className={`relative p-20 ${data?.details?.bannerBg} text-center !max-h-max overflow-hidden`}
            >
                <img src={heroShape1} className="absolute top-0 left-0" />
                <div className="flex flex-col items-center text-white">
                    <h2 className="flex items-center gap-3 text-5xl mb-5">
                        <img src={star} alt="" />
                        {data?.details?.heading}
                    </h2>
                    <h4 className="flex items-center gap-3 !text-4xl !font-extrabold text-skin2 mb-7">
                        ( Extensive Learning Course )
                        <p className="px-3 py-1 text-lg text-skin1 bg-white rounded-3xl">
                            FULL TIME
                        </p>
                    </h4>
                    <p className="text-2xl">{data?.details?.desc}</p>
                </div>
                <div
                    className={`absolute -right-10 -bottom-10 ${data?.cardBg} w-fit p-14 rounded-full `}
                >
                    <img src={data?.icon} alt="" className="w-36 h-36" />
                </div>
            </section>

            <section className={`bg-gray-200`}>
                <div className="flex justify-evenly gap-8 max-w-screen-md mx-auto py-10">
                    {features?.map((item) => (
                        <div
                            key={item?.id}
                            className="flex flex-col items-center gap-2 text-center w-1/2 text-xl font-bold "
                        >
                            <img src={item?.icon} alt="" className="w-8 h-8" />
                            <p>{item?.label}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="sticky top-100px"></section>
            <MinCriteria />
            <AdmissionProcess />
            <OurAlumni />
            <FAQ />
        </div>
    );
}
