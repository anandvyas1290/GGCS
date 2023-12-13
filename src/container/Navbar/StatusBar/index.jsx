import React from "react";

import rocket from "../../../assets/Navbar/rocket.webp";
import { socialMedias } from "../../../db/dummy";

export default function StatusBar() {
    return (
        <div className="px-0 py-4 sm:px-4">
            <div className="justify-between max-w-full sm:flex">
                <div className="flex justify-center gap-2 sm:justify-normal">
                    {/* <span>
                        <img
                            src={rocket}
                            className="flex w-5 h-5 align-middle animate-pulse"
                        />
                    </span>
                    <span className="flex">
                        <p className="text-sm sm:text-base">End of Year Sale: </p>
                        <p className="text-[#FF6C66] mx-1 text-sm sm:text-base">Save up to 35%</p>
                        <p className="text-sm sm:text-base"> on Tasks</p>
                    </span> */}
                </div>
                <div className="flex justify-center sm:justify-normal gap-3 pt-3 sm:!pt-0">
                    {socialMedias?.map((item, i) => (
                        <div
                            className=""
                            key={i}
                            onClick={() =>
                                window.open(
                                    item?.link,
                                    "_blank",
                                    "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes"
                                )
                            }
                        >
                            <img
                                src={item?.icon}
                                alt={item?.name}
                                className={`w-4 cursor-pointer opacity-50 hover:opacity-100 hover:text-primary`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
