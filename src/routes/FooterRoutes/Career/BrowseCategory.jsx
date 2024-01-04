import React from "react";
import uber from "../../../assets/Footer/uber-logo.svg";

import { Desc, H3, H5 } from "../../../components/Typography";

const BrowserCategory = () => {
    const arr = [
        { id: 1, Icon: uber, title: "Title", desc: "lorem ipsum " },
        { id: 2, Icon: uber, title: "Title", desc: "lorem ipsum" },
        { id: 3, Icon: uber, title: "Title", desc: "lorem ipsum " },
        { id: 4, Icon: uber, title: "Title", desc: "lorem ipsum " },
        { id: 5, Icon: uber, title: "Title", desc: "lorem ipsum " },
        { id: 6, Icon: uber, title: "Title", desc: "lorem ipsum " },
    ];
    return (
        <div className="py-10 md:py-20">
            <div className="max-w-screen-xl px-3 mx-auto xl:px-0">
                <H3 className="mb-3 text-center">Browse jobs by category</H3>
                <Desc className="mb-10 text-lg font-semibold text-center text-gray-600">
                    Choose form the list of most popular categories.
                </Desc>
                <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 ">
                    {arr?.map((item) => (
                        <div
                            key={item?.id}
                            className="group text-center bg-[#f8f9fa] border  lg:pb-8 py-5 lg:px-10 hover:bg-gray-100 "
                        >
                            <img
                                src={item?.Icon}
                                alt={item?.title}
                                className="h-24 mx-auto"
                            />
                            <H5 className="pb-1 "> {item?.title}</H5>
                            <Desc>{item?.desc} </Desc>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrowserCategory;
