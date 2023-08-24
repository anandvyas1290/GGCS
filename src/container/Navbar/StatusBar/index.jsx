import React from "react";

import rocket from "../../../assets/Navbar/rocket.webp";
import facebook from "../../../assets/socialMedia/facebook.svg";
import linkedin from "../../../assets/socialMedia/linkedin.svg";
import instagram from "../../../assets/socialMedia/instagram.svg";
import twitter from "../../../assets/socialMedia/x-twitter.svg";

const socialMedias = [
    { icon: facebook, name: "facebook", link: "" },
    { icon: twitter, name: "twitter", link: "" },
    { icon: linkedin, name: "linkedin", link: "" },
    { icon: instagram, name: "instagram", link: "" },
];

export default function StatusBar() {
    return (
        <div className="p-4">
            <div className="max-w-full flex justify-between">
                <div className="flex gap-2">
                    <span>
                        <img
                            src={rocket}
                            className="h-5 w-5 flex align-middle animate-pulse"
                        />
                    </span>
                    <span className="flex">
                        <p>End of Year Sale: </p>
                        <p className="text-[#FF6C66] mx-1">Save up to 35%</p>
                        <p> on Tasks</p>
                    </span>
                </div>
                <div className="flex gap-3">
                    {socialMedias?.map((item, i) => (
                        <div className="" key={i}>
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