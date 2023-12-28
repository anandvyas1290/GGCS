import React from "react";

import { hireUs } from "./Json";
import Container from "../../../components/Layout/Layout";
import { H1Animate } from "../../../components/Typography";

export const Card = ({ title, description, Icon, iconClassName = "" }) => {
    return (
        <div
            className={`group w-full shadow-xl border-[1px] !bg-white rounded-md text-center py-7 transform transition duration-500 hover:scale-110 ${iconClassName}`}
        >
            <div className={`w-20 h-20 mx-auto rounded-full border p-4 `}>
                <img src={Icon} alt={title} className="h-full" />
            </div>
            <div className="text-xl text-navLink pt-4 font-semibold group-hover:!text-white">
                {title}
            </div>
            <div className="text-sm font-normal text-gray-400 group-hover:text-black">
                {description}
            </div>
        </div>
    );
};

function Hero() {
    return (
        <section className="relative pt-24 pb-10">
            <Container className="text-center">
                <H1Animate className="mb-5">Hire Us</H1Animate>
                <p>{hireUs?.description}</p>
                <div className="grid grid-cols-1 gap-5 my-12 sm:grid-cols-2 lg:grid-cols-5 text">
                    {hireUs?.list?.map((item, i) => (
                        <Card
                            key={i}
                            title={item?.title}
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
