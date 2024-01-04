import React, { useEffect, useState } from "react";
import star from "../../../assets/icons/star.svg";
import heroShape1 from "../../../assets/training/details/heroShape1.png";

import { useLocation } from "react-router-dom";

import FAQ from "./FAQ";
import OurAlumni from "./OurAlumni";
import MinCriteria from "./MinCriteria";
import { courses, features } from "./dummyData";
import AdmissionProcess from "./AdmissionProcess";
import { H1Animate } from "../../../components/Typography";

export default function CoursesDetails() {
    let [state, setState] = useState({ data: {} });
    let location = useLocation();
    let routeData = location?.state?.course;

    useEffect(() => {
        window.scrollTo(0, 0);

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
                    <H1Animate className="flex items-center gap-3 mb-5">
                        <img src={star} alt="" />
                        {data?.details?.heading}
                    </H1Animate>
                    <h2 className="flex items-center gap-3 !text-4xl !font-extrabold text-skin2 mb-7">
                        ( Extensive Learning Course )
                        <p className="px-3 py-1 text-lg bg-white text-skin1 rounded-3xl">
                            FULL TIME
                        </p>
                    </h2>
                    <p className="text-2xl">{data?.details?.desc}</p>
                </div>
                <div
                    className={`absolute -right-10 -bottom-10 ${data?.cardBg} w-fit p-14 rounded-full `}
                >
                    <img src={data?.icon} alt="" className="w-36 h-36" />
                </div>
            </section>

            <section className={`bg-gray-200`}>
                <div className="flex max-w-screen-md gap-8 py-10 mx-auto justify-evenly">
                    {features?.map((item) => (
                        <div
                            key={item?.id}
                            className="flex flex-col items-center w-1/2 gap-2 text-xl font-bold text-center "
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
