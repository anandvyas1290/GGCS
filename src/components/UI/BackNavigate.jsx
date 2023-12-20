import React from "react";
import backIcon from "../../assets/icons/backBtn.webp";

import { useNavigate } from "react-router-dom";

export default function BackNavigate({ backLabel, backLink }) {
    let navigate = useNavigate();
    return (
        <div className="flex items-center max-w-screen-xl gap-3 px-3 pt-5 mx-auto ">
            <img
                src={backIcon}
                alt="back"
                className="w-10 cursor-pointer"
                onClick={() => navigate(backLink ?? "/")}
            />
            {backLabel ? (
                <h5 className="font-sans text-2xl font-bold text-primary">
                    {backLabel}
                </h5>
            ) : null}
        </div>
    );
}
