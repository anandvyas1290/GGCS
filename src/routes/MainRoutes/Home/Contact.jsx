import React from "react";
import bg from "../../../assets/home/contact/contact-4-bg.webp";
import { PrimaryBtn } from "../../../components/Button";
const Input = ({ text, placeholder, className }) => {
    return (
        <div className='relative flex items-center rounded-full w-full bg-gray-100 py-1 px-5 border'>
            {/* <EnvelopeIcon className="h-6 w-6 mx-2" /> */}
            <div className=''>
                <input type={text} placeholder={placeholder} className={`px-1 py-2 outline-none bg-gray-100 ${className}`} />
            </div>
            {/* <div className="p-2  absolute right-3 rounded-full bg-blue-600">
                <ArrowUpRightIcon className="h-6 w-6 text-white" />
            </div> */}
        </div>
    )
}
function Contact(props) {
    return (
        <div className="relative  z-[1]">
            <div className="absolute -z-[1] b-0 l-0 r-0 mt-40">
                <img src={bg} alt="icon" />
            </div>
            <div className="max-w-screen-lg lg:max-w-screen-xl mx-auto flex py-10">
                <div className="w-1/2 mx-3">
                    <div className="my-10">
                        <p className="text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-700 to-pink-800">Get In Touch</p>
                        <h2 className='text-4xl sm:text-5xl font-semibold mt-1 mb-4'>Lets Work <br />Together</h2>
                        <h6 className="text-lg mb-4 text-grey2">
                            Just tell us your requirements and we will help you!
                        </h6>
                        <div>
                            <h5 className="text-3xl text-red-500 mb-1">+(800) 2563 123</h5>
                            <h6 className="text-grey2">info@company.com</h6>
                        </div>
                        <div className="mt-5">
                            <PrimaryBtn
                                size="px-8 py-2"
                                bgColor="bg-primaryBtn"
                                className="border-2 rounded-full border-primaryBtn bg-0"
                            >
                                Call Us Now
                            </PrimaryBtn>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 mx-3 rounded-3xl bg-white px-10 py-10 before:bg-homeGradient before:-top-4 before:left-0 before:absolute shadow-services ">
                    <div className=" flex flex-wrap" >
                        <div className='my-2 px-3 w-1/2'>
                            <Input placeholder={"Fill Name "} type={"mail"} />
                        </div>
                        <div className='my-2 px-3 w-1/2'>
                            <Input placeholder={"Email Address"} type={"mail"} />
                        </div>
                        <div className='my-2 px-3 w-1/2'>
                            <Input placeholder={"Phone Number"} type={"mail"} />
                        </div>
                        <div className='my-2  px-3 w-1/2'>
                            <Input placeholder={"Website"} type={"mail"} />
                        </div>
                        <div className="w-full  border-2 relative rounded-xl my-3 mx-4 bg-gray-100 ">
                            <textarea name="" placeholder="Message" id="" cols="30" rows="10" className="w-full h-40 px-5 my-5 outline-none bg-gray-100"></textarea>
                        </div>
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
            </div >
        </div >
    );
}

export default Contact;
