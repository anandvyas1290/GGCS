import React from "react";

import { admissionProcess } from "./dummyData";
import { H2, H5 } from "../../../components/Typography";
import Container from "../../../components/Layout/Layout";

function AdmissionProcess() {
    return (
        <section className="bg-red-50 py-14">
            <Container>
                <H2 className="text-center">{admissionProcess?.title}</H2>
                <div className="relative grid grid-cols-1 gap-8 my-10 md:grid-cols-4 sm:grid-cols-2">
                    <div className="absolute left-0 w-full border-2 border-red-400 border-dashed top-1/2"></div>
                    {admissionProcess?.process?.map((item) => (
                        <div
                            key={item?.id}
                            className="z-0 px-3 py-5 text-center bg-white border rounded-xl"
                        >
                            <div className="flex items-center justify-center mx-auto shadow-md bg-red-50 w-14 h-14 rounded-xl">
                                <img
                                    src={item?.icon}
                                    alt={item?.title}
                                    className="w-5 h-5 mx-auto"
                                />
                            </div>
                            <H5 className="my-3">{item?.title}</H5>
                            {/* <p className=''>{item?.desc}</p> */}
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-5 ">
                    <button className="px-6 py-3 text-red-600 uppercase border-2 border-red-500 rounded-lg ">
                        View Details
                    </button>
                    <button className="px-6 py-3 text-white uppercase bg-red-600 border-2 border-red-500 rounded-lg ">
                        Send Inquiry
                    </button>
                </div>
            </Container>
        </section>
    );
}

export default AdmissionProcess;
