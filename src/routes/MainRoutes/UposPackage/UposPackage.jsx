import React, { useEffect } from "react";

import { uposDetails } from "../../../db/dummy";
import Container from "../../../components/Layout/Layout";
import { H1Animate, SubHeading } from "../../../components/Typography";

function UposPackage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Container>
                <section className="text-center py-28">
                    <H1Animate>{uposDetails?.title}</H1Animate>
                    <SubHeading className="pt-3">
                        {uposDetails?.subTitle}
                    </SubHeading>
                </section>
                <section className="grid grid-cols-1 gap-4 pb-10 md:grid-cols-2 xl:grid-cols-4 lg:pb-20">
                    {uposDetails?.list?.map((item, i) => {
                        return (
                            <div
                                className="h-full p-4 transition duration-300 bg-gray-100 rounded-lg hover:scale-105"
                                key={i}
                            >
                                <div className="mb-5">
                                    <img
                                        src={item?.icon}
                                        alt={item?.label}
                                        className="w-full h-48 rounded-lg"
                                    />
                                </div>
                                <p className="leading-6 ">{item?.label}</p>
                            </div>
                        );
                    })}
                </section>
                <div className="pb-10 mx-auto md:w-1/2 sm:pb-20">
                    <div className="relative flex flex-col flex-wrap items-center p-8 bg-opacity-75 border border-pink-500 ">
                        <span className="absolute px-3 py-1 text-xs font-medium text-white bg-opacity-25 rounded-full bg-gradient-to-r from-pink-500 to-red-400 -top-3 ">
                            MOST POPULAR
                        </span>
                        <h2 className="text-4xl">{uposDetails?.label}</h2>
                        <h2 className="text-4xl font-semibold text-blue-500 my-7">
                            {uposDetails?.price}
                        </h2>
                    </div>
                </div>
            </Container>
        </main>
    );
}

export default UposPackage;
