import React from "react";

import { termsAndConditions } from "../../db/dummy";
import Container from "../../components/Layout/Layout";
import { H1Animate, TextAnimate, H5, Desc } from "../../components/Typography";

export default function TermsAndCondition() {
    return (
        <main>
            <Container>
                <section className="py-14 md:py-28 text-center">
                    <H1Animate>{termsAndConditions?.title}</H1Animate>
                    <Desc className="mt-3">{termsAndConditions?.desc}</Desc>
                </section>
                <section className="max-w-screen-lg mx-auto !mb-24 sm:mb-10">
                    {termsAndConditions?.list?.map((item) => {
                        return (
                            <div key={item?.id} className="mb-6">
                                <H5 className="mb-2">{item?.title}</H5>
                                <p className="text-lg text-gray-600">
                                    {item?.info}
                                </p>
                            </div>
                        );
                    })}
                </section>
            </Container>
        </main>
    );
}
