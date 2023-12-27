import React from "react";

import { minCriteria } from "./dummyData";
import { H5 } from "../../../components/Typography";

function MinCriteria() {
    return (
        <section className="max-w-screen-lg mx-auto my-14">
            <div className="mb-10 text-center">
                <h3 className="text-3xl">{minCriteria?.title}</h3>
                <p className="mt-3">{minCriteria?.desc}</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2">
                {minCriteria?.list?.map((item) => (
                    <div
                        key={item?.id}
                        className="px-3 py-5 text-center border rounded-xl"
                    >
                        <div className="flex justify-center p-1  bg-gary-100">
                            <img
                                src={item?.icon}
                                alt={item?.title}
                                className="w-8 h-8"
                            />
                        </div>
                        <H5 className="my-2">{item?.title}</H5>
                        <p className="">{item?.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MinCriteria;
