import React from "react";
import backIcon from "../../assets/icons/backBtn.webp";

import { useNavigate } from "react-router-dom";

export default function BackNavigate({ backLabel, backLink, className }) {
    let navigate = useNavigate();
    return (
        <div
            className={`flex items-center max-w-screen-xl gap-3 px-3 pt-24 mx-auto lg:pt-5 text-primary ${className}`}
        >
            <img
                src={backIcon}
                alt="back"
                className="w-8 transition-all duration-200 cursor-pointer sm:w-10 hover:scale-11"
                onClick={() => navigate(backLink ?? "/")}
            />
            {backLabel ? (
                <h5 className="font-sans text-xl font-bold sm:text-2xl ">
                    {backLabel}
                </h5>
            ) : null}
        </div>
    );
}
