import React from "react";

import { hireUs } from "./Json";
import Container from "../../../components/Layout/Layout";
import { Desc, H1Animate } from "../../../components/Typography";

export const Card = ({ label, description, Icon, iconClassName = "" }) => {
    return (
        <div
            className={`group w-full shadow-xl border-[1px] !bg-white rounded-md text-center py-7 transform transition duration-500 hover:scale-110 ${iconClassName}`}
        >
            <div className={`w-20 h-20 mx-auto rounded-full border p-4 `}>
                <img src={Icon} alt={label} className="h-full" />
            </div>
            <div className="text-xl text-navLink pt-4 font-semibold group-hover:!text-white">
                {label}
            </div>
            <div className="text-sm font-semibold text-gray-400 group-hover:text-white">
                {description}
            </div>
        </div>
    );
};

function Hero() {
    return (
        <section className="relative py-20">
            <Container className="text-center">
                <H1Animate className="mb-5">Hire Us</H1Animate>
                <Desc className="xl:w-[90%] mx-auto">
                    {hireUs?.description}
                </Desc>
                <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 lg:grid-cols-5 text">
                    {hireUs?.list?.map((item, i) => (
                        <Card
                            key={i}
                            label={item?.label}
                            description={item?.desc}
                            Icon={item?.Icon}
                            iconClassName={item?.style}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Hero;
