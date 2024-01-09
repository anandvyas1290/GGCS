import React from "react";

import { termsAndConditions } from "../../db/dummy";
import Container from "../../components/Layout/Layout";
import { H1Animate, TextAnimate, H5, Desc } from "../../components/Typography";

export default function TermsAndCondition() {
    return (
        <main className="relative">
            {/* <div className='lg:absolute lg:flex none justify-center items-center left-0 lg:w-[40%]  lg:h-1/3 -z-10 bg-[#94d2bd] lg:rounded-br-full'>
                {/* <img src={careerHero} alt="career" className='lg:h-[500px] h-96 w-full lg:pt-0 lg:pb-0 pb-10 pt-20' /> */}
            {/* </div> * /} */}
            <Container>
                <section className="lg:py-28 pt-40 pb-14 text-center">
                    <H1Animate>{termsAndConditions?.title}</H1Animate>
                    <Desc className="mt-3">{termsAndConditions?.desc}</Desc>
                </section>
                <section className="max-w-screen-lg mx-auto !mb-24 sm:mb-10">
                    {termsAndConditions?.list?.map((item) => {
                        return (
                            <div key={item?.id} className="mb-8">
                                <div className="bg-[#2f3e46] rounded-tl-lg rounded-tr-lg box-border px-5 py-3">
                                    <H5 className="text-white">{item?.title}</H5>
                                </div>
                                <div className="bg-gray-100 p-5 h-full rounded-bl-lg rounded-br-lg">
                                    <p className="text-lg text-gray-600">
                                        {item?.info}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </section>
            </Container>
        </main >
    );
}
