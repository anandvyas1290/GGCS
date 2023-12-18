import React from "react";
import "./styles.css";

import digitalMarketing1 from "../../assets/otherServices/packages/digitalMarketing1.jpg";
import digitalMarketing2 from "../../assets/otherServices/packages/digitalMarketing2.jpg";
import smm1 from "../../assets/otherServices/packages/smm1.jpg";
import smm2 from "../../assets/otherServices/packages/smm2.jpg";
import it1 from "../../assets/otherServices/packages/it1.jpg";
import it2 from "../../assets/otherServices/packages/it2.jpg";

const packages = [
    {
        id: 1,
        title: "Digital Marketing",
        coverImg: digitalMarketing1,
        mainImg: digitalMarketing2,
    },
    {
        id: 2,
        title: "Social Media Marketing",
        coverImg: smm1,
        mainImg: smm2,
    },
    {
        id: 3,
        title: "IT Services",
        coverImg: it1,
        mainImg: it2,
    },
];

export default function CreatorPackages(props) {
    return (
        <>
            <section className="bg-[#08AEEA] bg-[linear-gradient(90deg,#08AEEA_5%,#2AF598_93%)]">
                <h1 className="text-4xl text-center py-5 text-white  bg-[#08AEEA] bg-[linear-gradient(90deg,#08AEEA_5%,#2AF598_93%)]">
                    Packages for the Creators
                </h1>
            </section>
            <section className="max-w-screen-2xl p-20 mx-auto grid grid-cols-3 gap-14 bg-gray-200">
                {packages?.map((item) => (
                    <div
                        className="package-card rounded-lg overflow-hidden"
                        key={item?.id}
                    >
                        <div className="packages-wrapper">
                            <img
                                src={item?.coverImg}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                        <h2 className="title absolute bottom-10 left-3 right-2 text-3xl text-center bg-gradient-to-r from-g1 via-g2 to-g3 text-transparent bg-clip-text !bg-card3">
                            {item?.title}
                        </h2>
                        <img src={item?.mainImg} className="mainImg" />
                    </div>
                ))}
            </section>
        </>
    );
}
