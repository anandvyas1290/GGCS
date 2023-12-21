import React from "react";
import "./styles.css";

import { useNavigate } from "react-router-dom";

import { packages } from "../dummyData";

export default function CreatorPackages(props) {
    let navigate = useNavigate();

    return (
        <>
            <section className="">
                <h1 className="text-5xl text-center py-7 text-[#08AEEA]">
                    Packages for the Creators
                </h1>
            </section>
            <section className="max-w-screen-xl mx-auto py-14">
                <div className="grid grid-cols-2 gap-40">
                    {packages?.map((item) => (
                        <div
                            className="cursor-pointer package-card rounded-xl"
                            key={item?.id}
                            onClick={() =>
                                navigate(`/creator-packages/${item?.slug}`, {
                                    state: { category: item?.slug },
                                })
                            }
                        >
                            <div className="packages-wrapper">
                                <img
                                    src={item?.coverImg}
                                    className="object-cover w-full h-full rounded-2xl"
                                />
                            </div>
                            <h2 className="title absolute bottom-10 left-3 right-2 text-3xl text-center bg-gradient-to-r from-g1 via-g2 to-g3 text-transparent bg-clip-text !bg-card3">
                                {item?.title}
                            </h2>

                            <div
                                className={`mainImg !rounded-xl flex flex-col gap-5 items-center justify-center ${item?.mainBg} backdrop-blur`}
                            >
                                <img src={item?.mainImg} className="h-[60%]" />
                                <h1 className="text-3xl text-white">
                                    {item?.title}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
