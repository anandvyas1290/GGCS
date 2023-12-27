import React from "react";

import { termsAndConditions } from "../../db/dummy";
import Container from "../../components/Layout/Layout";
import { H1Animate, TextAnimate, H5 } from "../../components/Typography";

export default function TermsAndCondition() {
    return (
        <main>
            <Container>
                <section className="py-14 md:py-28">
                    <H1Animate>{termsAndConditions?.title}</H1Animate>
                    <TextAnimate className="mt-3 text-xl text-center">
                        {termsAndConditions?.desc}
                    </TextAnimate>
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
