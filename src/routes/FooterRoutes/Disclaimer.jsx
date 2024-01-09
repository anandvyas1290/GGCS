import React from "react";

import { disclaimer } from "../../db/dummy";
import Container from "../../components/Layout/Layout";
import { H1Animate, H5, Desc } from "../../components/Typography";

export default function Disclaimer(props) {
    return (
        <main>
            <Container>
                <section className="lg:py-28 pt-40 pb-14 !text-center">
                    <H1Animate>{disclaimer?.title}</H1Animate>
                    <Desc className="max-w-screen-lg mx-auto mt-3">
                        {disclaimer?.desc}
                    </Desc>
                </section>
                <section className="max-w-screen-lg mx-auto !mb-24 sm:mb-10">
                    {disclaimer?.list?.map((item) => {
                        return (
                            <div key={item?.id} className="mb-8">
                                <div className="bg-[#2f3e46] rounded-tl-lg rounded-tr-lg box-border px-5 py-3">
                                    <H5 className="text-white">{item?.title}</H5>
                                </div>
                                <p className="mb-2 bg-gray-100 p-5 h-full rounded-bl-lg rounded-br-lg text-lg text-gray-600 ">
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
