import React from "react";

import journey from "../../../../assets/about/vision/journey.svg";
import counter1 from "../../../../assets/about/vision/trophy.webp";
import counter2 from "../../../../assets/about/vision/multiuser.webp";
import counter3 from "../../../../assets/about/vision/counter3.webp";
import business2 from "../../../../assets/about/vision/business2.svg";
import business3 from "../../../../assets/about/vision/business3.webp";
import floatIcon1 from "../../../../assets/about/vision/floatIcon1.png";

import { Desc, H5 } from "../../../../components/Typography";
import Container from "../../../../components/Layout/Layout";

const counterData = [
    {
        Icon: counter1,
        num: "1 +",
        label: (
            <p className="pl-3 text-base">
                Years <br />
                Of Experience
            </p>
        ),
    },

    {
        Icon: counter2,
        num: "10 +",
        label: (
            <p className="pl-3 text-base">
                Project <br />
                Complete
            </p>
        ),
    },

    {
        Icon: counter3,
        num: "6 +",
        label: (
            <p className="pl-3 text-base">
                Satisfied Clients On <br />
                India
            </p>
        ),
    },
];
function Vision() {
    return (
        <div>
            <Container>
                <div className="pt-10 pb-24">
                    <div className="sm:flex">
                        <div className="w-full mb-5 md:w-1/2 lg:mb-0 ">
                            <div className="px-3 py-8 bg-red-100 rounded-lg sm:px-6 md:px-14 md:py-14">
                                {/* <span className="hidden md:block">
                                    <img
                                        src={mission}
                                        alt="mission"
                                        className="w-full mb-5 h-14"
                                    />
                                </span> */}
                                <H5 className="mb-2">
                                    GGCS: Your Go-To Tech Team for Growing Your
                                    Business!
                                </H5>
                                <Desc className="text-lg">
                                    GGCS or Global Garner Consultancy Services,
                                    stands out as a leading digital marketing
                                    company utilizing advanced technology and a
                                    team of seasoned professionals to elevate
                                    businesses' brand presence and growth.
                                </Desc>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <img
                                src={floatIcon1}
                                alt="floatIcon"
                                className="w-32 h-32"
                            />
                        </div>
                    </div>
                    <div className="md:flex">
                        <div className="hidden md:w-2/5 md:block">
                            <div className="relative flex">
                                <img
                                    src={journey}
                                    alt="floatIcon"
                                    className="absolute w-40 h-40 -top-1 right-2"
                                />
                            </div>
                        </div>
                        <div className="relative md:w-3/5">
                            <div className="px-3 py-8 bg-green-100 rounded-lg sm:px-6 md:px-14 md:py-14 ">
                                <H5 className="mb-2">Our Journey</H5>
                                <Desc className="text-lg">
                                    The genesis of GGCS traces back to the
                                    firsthand challenges faced by Global Garner
                                    Sales Services Limited in 2016. They needed
                                    help finding an effective yet affordable
                                    digital marketing solution, so they created
                                    GGCS. This initiative not only resolved
                                    their issues but also became a catalyst for
                                    numerous other businesses seeking success in
                                    the online realm.
                                </Desc>
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex">
                        <div className="w-full mb-5 md:w-1/2 lg:mb-0 ">
                            <div className="px-3 py-8 bg-red-100 rounded-lg sm:px-6 md:px-14 md:py-14">
                                {/* <span className="hidden md:block">
                                    <img
                                        src={mission}
                                        alt="mission"
                                        className="w-full mb-5 h-14"
                                    />
                                </span> */}
                                <H5 className="mb-2 text-xl">
                                    What Distinguishes Us
                                </H5>
                                <Desc className="text-lg">
                                    At GGCS, our primary goal is to ensure
                                    brands and businesses appear on platforms
                                    like Google and experience significant
                                    growth in the digital business marketplace.
                                    We achieve this through in-depth market
                                    research and industry best practices. What
                                    sets GGCS apart is our unwavering commitment
                                    to transparency and ethical practices,
                                    demonstrated through real-time display of
                                    statistics for our clients using advanced
                                    tools and industry benchmarks.
                                </Desc>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <img src={business3} alt="ggcs" />
                        </div>
                    </div>
                    <div className="md:flex">
                        <div className="hidden md:w-2/5 md:block">
                            <div className="relative flex">
                                <img
                                    src={business2}
                                    alt="business"
                                    className="w-56 h-56"
                                />
                            </div>
                        </div>
                        <div className="relative md:w-3/5">
                            <div className="px-3 py-8 bg-green-100 rounded-lg sm:px-6 md:px-14 md:py-14 ">
                                <Desc className="text-lg">
                                    However, GGCS is not merely a provider of
                                    digital marketing services. We consider
                                    ourselves a digital partner, taking the time
                                    to understand the intricacies of your
                                    business and expectations. GGCS aspires to
                                    leave a lasting mark as a trusted digital
                                    ally in the ever-evolving digital landscape
                                    by positioning itself as more than just a
                                    service.
                                </Desc>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid justify-center grid-cols-1 mb-8 lg:grid-cols-3 sm:justify-between sm:mb-14">
                    {counterData?.map((item, i) => {
                        return (
                            <div
                                className="relative z-10 flex items-center py-6"
                                key={i}
                            >
                                <div className="absolute bottom-0 left-0 -z-10">
                                    <img src={item?.Icon} alt="counter" />
                                </div>
                                <div className="flex ml-10">
                                    <h3 className="text-5xl font-bold text-blue-500">
                                        {item?.num}
                                    </h3>
                                    {item?.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default Vision;
