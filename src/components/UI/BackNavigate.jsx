import React from "react";
import backIcon from "../../assets/icons/backBtn.webp";

import { useNavigate } from "react-router-dom";

export default function BackNavigate({ backLabel }) {
    let navigate = useNavigate();
    return (
        <div className="max-w-screen-xl mx-auto px-3 mt-5 flex items-center gap-3 ">
            <img
                src={backIcon}
                alt="back"
                className="w-10 cursor-pointer"
                onClick={() => navigate("/")}
            />
            {backLabel ? (
                <h5 className="text-2xl font-bold font-sans text-primary">
                    {backLabel}
                </h5>
            ) : null}
        </div>
    );
}
