import React from "react";

import { minCriteria } from "./dummyData";
import { Desc, H2, H5, SubHeading } from "../../../components/Typography";

function MinCriteria() {
    return (
        <section className="max-w-screen-lg mx-auto my-14">
            <div className="mb-10 text-center">
                <H2>{minCriteria?.title}</H2>
                <SubHeading className="mt-1">{minCriteria?.desc}</SubHeading>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2">
                {minCriteria?.list?.map((item) => (
                    <div
                        key={item?.id}
                        className="px-3 py-5 text-center border rounded-xl"
                    >
                        <div className="flex justify-center p-1 bg-gary-100">
                            <img
                                src={item?.icon}
                                alt={item?.title}
                                className="w-8 h-8"
                            />
                        </div>
                        <H5 className="my-2">{item?.title}</H5>
                        <Desc>{item?.desc}</Desc>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MinCriteria;
