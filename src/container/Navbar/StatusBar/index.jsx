import React from "react";

import rocket from "../../../assets/Navbar/rocket.webp";
import { socialMedias } from "../../../db/dummy";



export default function StatusBar() {
    return (
        <div className="px-0 sm:px-4 py-4">
            <div className="max-w-full sm:flex justify-between">
                <div className="flex justify-center sm:justify-normal gap-2">
                    <span>
                        <img
                            src={rocket}
                            className="h-5 w-5 flex align-middle animate-pulse"
                        />
                    </span>
                    <span className="flex">
                        <p className="text-sm sm:text-base">End of Year Sale: </p>
                        <p className="text-[#FF6C66] mx-1 text-sm sm:text-base">Save up to 35%</p>
                        <p className="text-sm sm:text-base"> on Tasks</p>
                    </span>
                </div>
                <div className="flex justify-center sm:justify-normal gap-3 pt-3 sm:!pt-0">
                    {socialMedias?.map((item, i) => (
                        <div className="" key={i} onClick={() => window.open(item?.link, "_blank",
                            "toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes")}>
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
