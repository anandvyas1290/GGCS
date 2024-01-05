import React from "react";
import formBg from "../../../assets/hireUs/formBg.svg";
import hireUsHero from "../../../assets/hireUs/hireUsHero.svg";

import { Form, Select } from "antd";
import Input from "../../../components/Input";
import { Desc, H1Animate } from "../../../components/Typography";
import { PrimaryBtn, SubmitBtn } from "../../../components/Button";

function HireUsForm() {
    return (
        <section className="bg-gray-100">
            <div className="grid justify-center max-w-screen-xl grid-cols-2 gap-10 py-10 mx-auto form-wrapper md:py-20">
                <section className="flex flex-col items-center text-center">
                    <H1Animate className="!text-4xl text-center mb-5 border-b-4 border-main3">
                        Hire Us Form
                    </H1Animate>
                    <Desc className="w-[500px] mb-6">
                        We help brands and platforms turn big ideas into
                        beautiful digital products and experiences.
                    </Desc>
                    <img src={hireUsHero} alt="hire us" className="w-[65%]" />
                </section>
                <section>
                    <Form
                        action=""
                        className="px-10 bg-gray-100 bg-cover shadow-2xl py-14 rounded-2xl"
                    >
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                            <div className="input-box">
                                {/* <Select
                                showSearch
                                style={{
                                    width: 200,
                                }}
                                placeholder="Search to Select"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    (option?.label ?? "").includes(input)
                                }
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? "")
                                        .toLowerCase()
                                        .localeCompare(
                                            (optionB?.label ?? "").toLowerCase()
                                        )
                                }
                                options={[
                                    {
                                        value: "1",
                                        label: "Not Identified",
                                    },
                                    {
                                        value: "2",
                                        label: "Closed",
                                    },
                                    {
                                        value: "3",
                                        label: "Communicated",
                                    },
                                    {
                                        value: "4",
                                        label: "Identified",
                                    },
                                    {
                                        value: "5",
                                        label: "Resolved",
                                    },
                                    {
                                        value: "6",
                                        label: "Cancelled",
                                    },
                                ]}
                            /> */}
                                <input
                                    type="number"
                                    placeholder="Mobile Number"
                                    className="w-full h-12 rounded-lg outline-none"
                                />
                            </div>
                            <div className="input-box">
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full h-12 rounded-lg outline-none"
                                />
                            </div>

                            {/* <div className="input-box">
                                <input
                                    type="text"
                                    placeholder="Technology"
                                    className="w-full h-12 rounded-lg outline-none"
                                />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    placeholder="Hour"
                                    className="w-full h-12 rounded-lg outline-none"
                                />
                            </div>

                            <div className="input-box">
                                <input
                                    type="text"
                                    placeholder="Requirement"
                                    className="w-full h-12 rounded-lg outline-none"
                                />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    placeholder="Experience"
                                    className="w-full h-12 rounded-lg outline-none"
                                />
                            </div>
                            <div className="input-box">
                                
                                <input
                                    type="text"
                                    placeholder="Purpose"
                                    className="w-full h-12 rounded-lg outline-none"
                                />
                            </div> */}
                        </div>

                        <div className="mx-auto lg:w-1/2">
                            <SubmitBtn className="w-full py-2 mt-10 text-white border-2 rounded-lg bg-">
                                Submit
                            </SubmitBtn>
                        </div>
                    </Form>
                </section>
            </div>
        </section>
    );
}

export default HireUsForm;
