import React, { useEffect } from "react";

import { contactBg, office } from "../../../db/assets";
import { addresses } from "../../../db/dummy";
import { PrimaryBtn } from "../../../components/Button";

const Input = ({ type, placeholder, className }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`w-full rounded-full  !py-2.5 !outline-none border-none bg-gray-100 ${className ?? ""}`}
        />

    );
};
function Contact(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
                <div className="relative pt-5 pb-5 md:flex sm:pt-10 sm:pb-20 ">
                    <div className="relative mx-3 md:w-1/2">
                        <div className="my-10">
                            <p className=" text-base font-semibold w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#501E9C] via-[#A44CEE] to-[#FF847F]">
                                Get In Touch
                            </p>
                            <h2 className="text-4xl sm:text-5xl font-semibold mt-1 mb-4 sm:!leading-[3.5rem]">
                                Lets Work <br />
                                Together
                            </h2>
                            <h6 className="mb-4 text-lg text-grey2">
                                Just tell us your requirements and we will help
                                you!
                            </h6>
                            <div>
                                <h5 className="mb-1 text-3xl text-red-500">
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
                    <div className="px-3 py-10 mx-3 bg-white md:w-1/2 rounded-3xl sm:px-6 md:px-10 before:bg-homeGradient before:-top-4 before:left-0 before:absolute shadow-services">
                        <div className="flex flex-wrap">
                            <div className="w-full !px-3 my-2 sm:w-1/2">
                                <Input placeholder="Fill Name" type="text" />
                            </div>
                            <div className="w-full !px-3 my-2 sm:w-1/2">
                                <Input
                                    placeholder="Email Address"
                                    type="mail"
                                />
                            </div>
                            <div className="w-full !px-3 my-2 sm:w-1/2">
                                <Input placeholder="Phone Number" type="tel" />
                            </div>
                            <div className="w-full !px-3 my-2 sm:w-1/2">
                                <Input placeholder="Website" type="mail" />
                            </div>
                            <div className="relative w-full mx-4 my-3 bg-gray-100 border-2 rounded-xl">
                                <textarea
                                    name=""
                                    placeholder="Message"
                                    id=""
                                    cols="30"
                                    rows="10"
                                    className="w-full h-40 px-5 my-5 !outline-none border-none bg-gray-100"
                                ></textarea>
                            </div>
                        </div>
                        <div className="w-full mx-4 mt-3">
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
                                    <div className="absolute top-3 -left-1 w-[70px] h-[65px] rounded-full top-5 bg-gradient-to-r from-g2 to-g1 -z-10" />
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

export default Contact;
