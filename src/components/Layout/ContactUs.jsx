import React from "react";

import { Input } from "../UI/Input";
import { PrimaryBtn } from "../Button";
import { addresses } from "../../db/dummy";
import { contactBg, office } from "../../db/assets";
import { H1Animate, H6, TextAnimate } from "../Typography";

function ContactUs() {
    return (
        <section className="relative  z-[1] sm:py-10">
            <div className="hidden sm:block">
                <img
                    src={contactBg}
                    alt="icon"
                    className="absolute -z-[1] bottom-0 left-0 right-0 w-full"
                />
            </div>
            <div className="max-w-screen-lg mx-auto lg:max-w-screen-xl ">
                <div className="md:flex py-0 sm:!py-10 ">
                    <div className="md:w-1/2 mx-3">
                        <div className="my-10">
                            <TextAnimate className="w-fit">
                                Get In Touch
                            </TextAnimate>
                            <H1Animate className="mt-1 mb-4 sm:!leading-[3.5rem]">
                                Lets Work <br />
                                Together
                            </H1Animate>
                            <H6 className="mb-4 text-grey2">
                                Just tell us your requirements and we will help
                                you!
                            </H6>
                            <div>
                                <h3 className="text-3xl text-red-500 mb-1">
                                    +91 6354917511
                                </h3>
                                <H6 className="text-grey2">
                                    ggcs@globalgarner.com
                                </H6>
                            </div>
                            <div className="mt-5">
                                <PrimaryBtn
                                    size="px-8 py-2"
                                    bgColor="bg-primaryBtn"
                                    className="border-2 rounded-full border-primaryBtn bg-0"
                                >
                                    <a
                                        href={"tel:+91 6354917511"}
                                        data-rel="external"
                                    >
                                        Call Us Now
                                    </a>
                                </PrimaryBtn>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 mx-3 rounded-3xl bg-white px-3 sm:px-6 md:px-10 py-10 before:bg-homeGradient before:-top-4 before:left-0 before:absolute shadow-services ">
                        <div className=" flex flex-wrap">
                            <div className="my-2 px-3 w-full sm:w-1/2">
                                <Input
                                    placeholder={"Fill Name "}
                                    type={"mail"}
                                />
                            </div>
                            <div className="my-2 px-3  w-full sm:w-1/2">
                                <Input
                                    placeholder={"Email Address"}
                                    type={"mail"}
                                />
                            </div>
                            <div className="my-2 px-3  w-full sm:w-1/2">
                                <Input
                                    placeholder={"Phone Number"}
                                    type={"mail"}
                                />
                            </div>
                            <div className="my-2  px-3 w-full sm:w-1/2">
                                <Input placeholder={"Website"} type={"mail"} />
                            </div>
                            {/* <div className="w-full  border-2 relative rounded-xl my-3 mx-4 bg-gray-100 "> */}
                            <textarea
                                name=""
                                placeholder="Message"
                                id=""
                                cols="30"
                                rows="10"
                                className="w-full border-[1px] border-gray-200 relative rounded-xl  mx-4 h-40 px-5 my-3 outline-none  bg-gray-100"
                            ></textarea>
                            {/* </div> */}
                        </div>
                        <div className="w-full mt-3 mx-4">
                            <PrimaryBtn
                                size="px-8 py-3"
                                bgColor="bg-primaryBtn"
                            >
                                Send Message
                            </PrimaryBtn>
                        </div>
                    </div>
                </div>
                <section className="grid grid-cols-2 gap-20">
                    {addresses?.map((item) => (
                        <div key={item?.id} className="w-full">
                            <address className="h-full w-fit flex gap-5 px-10 py-4 not-italic rounded-3xl item-center bg-slate-200 !backdrop-blur-3xl">
                                <figure className="relative w-32 h-24">
                                    <div className="absolute top-3 -left-1 w-[70px] h-[65px] rounded-full bg-gradient-to-r from-g2 to-g1 -z-10" />
                                    <img
                                        src={office}
                                        alt="address"
                                        className="z-10 w-full h-full"
                                    />
                                </figure>
                                <main>
                                    <h3 className="text-xl font-semibold text-primary">
                                        {item?.title}
                                    </h3>
                                    <br />
                                    <b>{item?.address}</b>
                                </main>
                            </address>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    );
}

export default ContactUs;
