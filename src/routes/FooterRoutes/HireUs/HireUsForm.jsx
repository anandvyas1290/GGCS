import React from "react";
import { Form, Select } from "antd";
import { Desc, H1Animate } from "../../../components/Typography";
import { PrimaryBtn } from "../../../components/Button";
import formBg from "../../../assets/hireUs/formBg.svg";
import hireUsHero from "../../../assets/hireUs/hireUsHero.svg";

function HireUsForm() {
    return (
        <section className="bg-gray-100">
            <div className="max-w-screen-xl mx-auto grid grid-cols-2 justify-center gap-10 form-wrapper md:py-20 py-10">
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
                        className="shadow-2xl bg-cover bg-gray-100 px-10 py-14 rounded-2xl"
                    >
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
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
                                    className="w-full rounded-lg outline-none h-12"
                                />
                            </div>
                            <div className="input-box">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-lg outline-none h-12"
                                />
                            </div>

                            <div className="input-box">
                                <input
                                    type="text"
                                    placeholder="Technology"
                                    className="w-full rounded-lg outline-none h-12"
                                />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    placeholder="Hour"
                                    className="w-full rounded-lg outline-none h-12"
                                />
                            </div>

                            <div className="input-box">
                                <input
                                    type="text"
                                    placeholder="Requirement"
                                    className="w-full rounded-lg outline-none h-12"
                                />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    placeholder="Experience"
                                    className="w-full rounded-lg outline-none h-12"
                                />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    placeholder="Purpose"
                                    className="w-full rounded-lg outline-none h-12"
                                />
                            </div>
                        </div>

                        <div className="lg:w-1/2 mx-auto">
                            <PrimaryBtn
                                type="submit"
                                className="w-full border-2 mt-10 bg-blue-500 text-white py-2 rounded-lg"
                            >
                                Submit
                            </PrimaryBtn>
                        </div>
                    </Form>
                </section>
            </div>
        </section>
    );
}

export default HireUsForm;
