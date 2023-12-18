import React from "react";
import updating from "../../assets/animation/updating.webp";

export default function PricingDetails(props) {
    window.scrollTo(0, 0);
    return (
        <div className="max-w-screen-xl mx-auto text-center">
            <video className="mt-10 w-full h-[400px]" autoPlay muted loop>
                <source src={updating} type="video/mp4" />
            </video>
            <h1 className="text-5xl mb-10 text-red-950">Updating Soon</h1>
        </div>
    );
}
