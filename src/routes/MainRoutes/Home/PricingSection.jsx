import React from "react";

import Pricing from "../../../components/Pricing";
import {
    H1Animate,
    TextAnimate,
} from "../../../components/Animation/H1Animate";

export default function PricingSection() {
    return (
        <div className="max-w-screen-xl pb-5 mx-auto mxa-w-screen-lg">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                    <TextAnimate className="!text-3xl mx-auto font-tangerine font-semibold w-fit text-transparent bg-clip-text bg-gradient-to-r from-[#501E9C] via-[#A44CEE] to-[#FF847F]">
                        Pricing Plans
                    </TextAnimate>
                    <H1Animate className="mb-4 text-5xl font-semibold leading-tight">
                        Packages for everyone
                    </H1Animate>
                    <p className="mb-5 font-medium text-gray-500 sm:text-xl">
                        Here at GGCS we focus on markets where technology,
                        innovation, and capital can unlock long-term value and
                        drive economic growth.
                    </p>
                </div>
                <div className="space-y-8 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <Pricing />
                </div>
            </div>
        </div>
    );
}
