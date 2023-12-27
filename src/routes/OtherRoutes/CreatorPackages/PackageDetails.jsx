import React, { useEffect, useState } from "react";

import { Modal } from "antd";
import { useLocation } from "react-router-dom";

import { packages } from "../dummyData";
import { PrimaryBtn } from "../../../components/Button";
import BackNavigate from "../../../components/UI/BackNavigate";
import { H1Animate } from "../../../components/Typography";

export default function PackageDetails(props) {
    const [state, setState] = useState({ data: {}, inquiryDialog: false });
    let location = useLocation();
    let routeData = location?.state?.category;

    useEffect(() => {
        let data = packages?.filter((item) => {
            return item?.slug === routeData;
        })[0];

        setState((prev) => {
            return { ...prev, data: data };
        });
    }, [routeData]);

    const { data } = state;

    return (
        <>
            <BackNavigate
                backLabel={data?.title}
                backLink="/creator-packages"
            />
            <div className="max-w-screen-xl mx-auto p-10 mb-10 text-center">
                <section className="mb-10">
                    <H1Animate className="flex items-center justify-center gap-10 p-2 text-transparent bg-clip-text bg-gradient-to-r from-[#c33764] to-[#1d2671]">
                        {data?.title}
                        <span className="relative flex items-center justify-center gap-3 px-5 py-2 rounded-2xl text-xl text-white font-medium font-roboto bg-primary">
                            <p className="absolute top-3s -left-5 w-0 h-0 border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent border-r-[25px] border-primary" />
                            <p className="w-4 h-4 rounded-full bg-white" />
                            Starting from
                            <br />
                            ₹70,000 / year
                        </span>
                    </H1Animate>
                </section>
                <section className="mb-20 flex justify-center items-center">
                    <div>
                        {data?.features
                            ?.slice(0, data?.features?.length / 2)
                            ?.map((item, i) => (
                                <div
                                    className="flex flex-col items-center figure__path"
                                    key={i}
                                >
                                    <span className="relative !w-[22px] !h-[22px] border-4 border-color1 outline-4 rounded-full bg-color2 outline-color2">
                                        <div className="figure__product bg-color6">
                                            <div className="flex flex-col justify-center !px-2.5 !py-0">
                                                <h3 className="text-[21px] font-semibold !mb-1 text-color8">
                                                    {item?.label}
                                                </h3>
                                            </div>
                                            <figure className="flex justify-center items-center !w-[80px] !h-[80px] overflow-hidden rounded-full shadow-[rgba(50,50,93,0.25)_10px_13px_27px_-5px,rgba(0,0,0,0.3)_10px_8px_16px_-8px] bg-white">
                                                <img
                                                    src={item?.icon}
                                                    className="w-full h-full object-contain"
                                                />
                                            </figure>
                                        </div>
                                    </span>
                                    {new Array(7)?.fill("_")?.map((item, i) => (
                                        <span
                                            className="figure__pathPoint !w-2 !h-2 !mt-2.5 rounded-full bg-color10 last-of-type:!mb-4"
                                            key={i}
                                        />
                                    ))}
                                </div>
                            ))}
                    </div>
                    <div className="!ml-[100px] !mt-[100px]">
                        {data?.features
                            ?.slice(data?.features?.length / 2, -1)
                            ?.map((item, i) => (
                                <div
                                    className="figure__path flex flex-col items-center"
                                    key={i}
                                >
                                    <span className="relative !w-[22px] !h-[20px] border-4 border-color1 outline-4 rounded-full bg-color5 outline-color5">
                                        <div className="figure__product figure__product--right bg-color5">
                                            <div className="flex flex-col justify-center !px-2.5 !py-0">
                                                <h3 className="text-[21px] font-semibold !mb-1 text-color8">
                                                    {item?.label}
                                                </h3>
                                                <p className="text-sm font-medium max-w-[140px] text-color8" />
                                            </div>
                                            <figure className="flex justify-center items-center !w-[80px] !h-[80px] overflow-hidden rounded-full shadow-[rgba(50,50,93,0.25)_-10px_13px_27px_-5px,rgba(0,0,0,0.3)_-10px_8px_16px_-8px] bg-white">
                                                <img
                                                    src={item?.icon}
                                                    className="w-full h-full object-contain"
                                                />
                                            </figure>
                                        </div>
                                    </span>
                                    {new Array(7)?.fill("_")?.map((item, i) => (
                                        <span
                                            className="figure__pathPoint !w-2 !h-2 !mt-2.5 rounded-full bg-color10 last-of-type:!mb-4"
                                            key={i}
                                        />
                                    ))}
                                </div>
                            ))}
                    </div>
                </section>
                <section className="flex items-center justify-center p-10">
                    <PrimaryBtn
                        className="!px-10 !py-4 text-xl"
                        onClick={() =>
                            setState((prev) => {
                                return {
                                    ...prev,
                                    inquiryDialog: !prev?.inquiryDialog,
                                };
                            })
                        }
                    >
                        Inquire Us
                    </PrimaryBtn>
                </section>
                <Modal
                    title="Inquire about"
                    open={state?.inquiryDialog}
                    onCancel={() =>
                        setState((prev) => {
                            return { ...prev, inquiryDialog: false };
                        })
                    }
                    okText="Submit"
                    okButtonProps={{ className: "bg-green-500" }}
                    onOk={() =>
                        setState((prev) => {
                            return { ...prev, inquiryDialog: false };
                        })
                    }
                >
                    <p>Updating Soon...</p>
                </Modal>
            </div>
        </>
    );
}
