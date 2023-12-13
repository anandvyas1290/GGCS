import React from 'react'
import { contactBg, office } from "../../db/assets";
import { addresses } from "../../db/dummy";
import { PrimaryBtn } from "../Button";
import { H1Animate, TextAnimate } from '../Animation/H1Animate';
import { Input } from '../UI/Input';

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
                            <TextAnimate className="!text-3xl font-tangerine  font-semibold w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#501E9C] via-[#A44CEE] to-[#FF847F]">
                                Get In Touch
                            </TextAnimate>
                            <H1Animate className="text-4xl sm:text-5xl font-semibold mt-1 mb-4 sm:!leading-[3.5rem]">
                                Lets Work <br />
                                Together
                            </H1Animate>
                            <h6 className="text-lg mb-4 text-grey2">
                                Just tell us your requirements and we will help
                                you!
                            </h6>
                            <div>
                                <h5 className="text-3xl text-red-500 mb-1">
                                    {" "}
                                    +91 6354917511
                                </h5>
                                <h6 className="text-grey2">
                                    ggcs@globalgarner.com
                                </h6>
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
            </div>
        </section>
    )
}

export default ContactUs