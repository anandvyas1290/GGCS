import React from "react";

import { privacyPolicy } from "../../db/dummy";
import Container from "../../components/Layout/Layout";
import { H1Animate, H5 } from "../../components/Typography";

export default function PrivacyPolicy(props) {
    return (
        <main >
            <Container>
                <section className="lg:py-28 pt-40 pb-14 text-center">
                    <H1Animate>{privacyPolicy?.title}</H1Animate>
                </section>
                <section className="max-w-screen-lg mx-auto !mb-24 sm:mb-10">
                    {privacyPolicy?.list?.map((item) => {
                        return (
                            <div key={item?.id} className="mb-6">
                                <H5 className="mb-2">{item?.title}</H5>
                                <p className="mb-2 text-lg">{item?.info}</p>
                                <ul className="list-disc pl-4">
                                    {item?.data?.map((data, i) => {
                                        return (
                                            <li
                                                key={i}
                                                className="text-gray-600"
                                            >
                                                {data?.content}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </section>
            </Container>
        </main>
    );
}
