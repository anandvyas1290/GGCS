import React from "react";
import backIcon from "../../assets/icons/backBtn.webp";

import { useNavigate } from "react-router-dom";

export default function BackNavigate({ backLabel, backLink }) {
    let navigate = useNavigate();
    return (
        <div className="flex items-center max-w-screen-xl gap-3 px-3 lg:pt-5 pt-24 mx-auto ">
            <img
                src={backIcon}
                alt="back"
                className="sm:w-10 w-8 cursor-pointer"
                onClick={() => navigate(backLink ?? "/")}
            />
            {backLabel ? (
                <h5 className="font-sans sm:text-2xl text-xl font-bold text-primary">
                    {backLabel}
                </h5>
            ) : null}
        </div>
    );
}
