import React from "react";
import blog from "../../../assets/home/companyBlog/blog1.webp";
import { PrimaryBtn } from "../../../components/Button";
// const PrimaryBtn = ({ children, className }) => {
//     return (
//         <button
//             className={`border-2 rounded-full py-2 px-10  text-white  bg-blue-600 hover:text-blue-600 hover:bg-white  hover:border-blue-600  ${className}`}
//         >
//             {children}
//         </button>
//     );
// };
export default function CompanyBlog() {
    return (
        <div className="bg-gray-100">
            <div className="max-w-screen-md lg:max-w-screen-xl mx-auto px-6 py-28">
                <div className="sm:flex justify-between items-center mb-12">
                    <div>
                        <h6 className="font-semibold w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#501E9C] via-[#A44CEE] to-[#FF847F]">
                            What's Going On
                        </h6>
                        <h2 className="text-4xl sm:text-5xl font-semibold">
                            Company blog & Insights
                        </h2>
                    </div>
                    <div className="my-5 sm:my-0">
                        <PrimaryBtn
                            size="px-8 py-2"
                            bgColor="bg-primaryBtn"
                        >
                            More Articles
                        </PrimaryBtn>
                    </div>
                </div>
                <div className="lg:flex lg:justify-between">
                    {[1, 1]?.map((d, i) => {
                        return (
                            <div className="lg:w-11/12 lg:mx-5 mb-8" key={i}>
                                <div className="md:flex	 rounded-2xl bg-white">
                                    <img
                                        src={blog}
                                        alt=""
                                        className="w-full h-auto  md:w-auto lg:w-1/3   md:rounded-l-2xl"
                                    />
                                    <div className="py-8 px-6 md:px-10">
                                        <div>
                                            <h6 className="text-md w-1/2 lg:w-1/2 text-center p-1 mb-2 rounded-full text-primaryBtn bg-light1">
                                                SEO agency
                                            </h6>
                                            <h5 className="text-2xl font-bold mb-3 cursor-pointer hover:text-primaryBtn">
                                                Wins 2023 good design london
                                                Award
                                            </h5>
                                            <p className="mb-3 text-grey1">
                                                The annual good design Awards is
                                                london oldest prestigious.
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <p className="text-black2 font-semibold">
                                                Nev 21,2023
                                            </p>
                                            <span className="mx-4">|</span>
                                            <p className="text-black2 font-semibold">
                                                <i className="text-grey2 font-medium">
                                                    {" "}
                                                    By
                                                </i>{" "}
                                                Admin
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
