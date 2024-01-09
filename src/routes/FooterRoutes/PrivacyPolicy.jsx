import React from "react";

import { privacyPolicy } from "../../db/dummy";
import Container from "../../components/Layout/Layout";
import { H1Animate, H5 } from "../../components/Typography";

export default function PrivacyPolicy(props) {
    return (
        <main>
            <Container>
                <section className="lg:py-28 pt-40 pb-14 text-center">
                    <H1Animate>{privacyPolicy?.title}</H1Animate>
                </section>
                <section className="max-w-screen-lg mx-auto !mb-24 sm:mb-10">
                    {privacyPolicy?.list?.map((item) => {
                        return (
                            <div key={item?.id} className="mb-8">
                                <div className="bg-[#2f3e46] rounded-tl-lg rounded-tr-lg px-5 py-3">
                                    <H5 className="mb-2 text-white">
                                        {item?.title}</H5>
                                </div>
                                <div className="bg-gray-100 p-5 h-full rounded-bl-lg rounded-br-lg">
                                    <p className="text-lg">{item?.info}</p>
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
                            </div>
                        );
                    })}
                </section>
            </Container>
        </main>
    );
}
