import React, { useState } from "react";

import { faq } from "./dummyData";
import Container from "../../../components/Layout/Layout";
import { Desc, H2, H5 } from "../../../components/Typography";

function FAQ() {
    const [state, setState] = useState({
        active: null,
    });
    const { active } = state;
    return (
        <Container>
            <div className="pb-10 md:pt-20 pt-14">
                <H2 className="text-center">{faq?.title}</H2>
            </div>
            <div className="pb-20">
                {faq?.list?.map((item) => (
                    <div key={item?.id} className="mb-2">
                        <div
                            className={`flex justify-between py-5 px-5 rounded-lg hover:bg-red-50 cursor-pointer  ${
                                active === item?.id ? "bg-red-50" : ""
                            }`}
                            onClick={() => {
                                setState((prev) => {
                                    return {
                                        ...prev,
                                        active:
                                            prev?.active === item?.id
                                                ? null
                                                : item?.id,
                                    };
                                });
                            }}
                        >
                            <H5 className="font-semibold">{item?.que}</H5>
                            {active === item?.id ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            )}
                        </div>
                        {active === item?.id ? (
                            <div
                                className={`py-5 px-5  overflow-hidden transition-all duration-300 ease-in-out ${
                                    active === item?.id
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            >
                                <p>{item?.ans}</p>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default FAQ;
