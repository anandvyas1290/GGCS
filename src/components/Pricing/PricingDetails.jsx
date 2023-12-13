import React from "react";
import updating from "../../assets/animation/updating.webp";

export default function PricingDetails(props) {
    return (
        <div className="">
            dd
            <video className="w-full h-[480px]" autoPlay muted loop>
                <source src={updating} type="video/mp4" />
            </video>
        </div>
    );
}
