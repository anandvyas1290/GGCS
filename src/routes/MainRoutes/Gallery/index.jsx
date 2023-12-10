import React, { useState } from "react";
import { galleryData } from "../../../db/dummy";
import checkbox from "../../../assets/icons/checkbox.webp";

export default function Gallery(props) {
    const [state, setState] = useState({
        currentPlatform: galleryData[0] ?? {},
    });
    console.log(state.currentPlatform);
    return (
        <div className="max-w-screen-xl mx-auto py-10">
            <div className="grid grid-cols-[0.3fr_1fr] gap-6">
                <aside className="bg-gray-">
                    <div className="border-2 border-grey7 rounded-xl overflow-hidden">
                        <h4 className="text-2xl font-bold text-primary bg-gray-200 p-3">
                            Filters
                        </h4>
                        <hr className="mb-5" />
                        <section className="p-3">
                            <ul>
                                {galleryData?.map((item) => (
                                    <li
                                        key={item?.id}
                                        className={`flex gap-4 my-3 text-lg text-grey2 font-semibold cursor-pointer transition-all duration-200 ${
                                            state?.currentPlatform?.platform ===
                                            item?.platform
                                                ? "grayscale-1 text-blue-600"
                                                : "grayscale-[1]"
                                        }`}
                                        onClick={() => {
                                            console.log(
                                                item?.platform?.toLowerCase()
                                            );
                                            setState((prev) => {
                                                return {
                                                    ...prev,
                                                    currentPlatform: item,
                                                };
                                            });
                                        }}
                                    >
                                        <img
                                            src={checkbox}
                                            className="w-6 h-6"
                                        />
                                        <p>{item?.platform}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </aside>
                <main className="">
                    <section className="text-xl font-bold p-3 mb-4 text-primary border-2 rounded-xl border-grey7 bg-gray-200">
                        Header Filters
                    </section>
                    <section className="grid grid-cols-1 overflow-hidden border-2 border-grey7 rounded-3xl bg-red-50">
                        <figure>
                            <img src={state?.currentPlatform?.image} />
                        </figure>
                    </section>
                </main>
            </div>
        </div>
    );
}

// <main className="">
// <div className="-m-1 flex flex-wrap md:-m-2">
//     <div className="flex w-1/2 flex-wrap">
//         <div className="w-1/2 p-1 md:p-2">
//             <img
//                 alt="gallery"
//                 className="block h-full w-full rounded-lg object-cover object-center"
//                 src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
//         </div>
//         <div className="w-1/2 p-1 md:p-2">
//             <img
//                 alt="gallery"
//                 className="block h-full w-full rounded-lg object-cover object-center"
//                 src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
//         </div>
//         <div className="w-full p-1 md:p-2">
//             <img
//                 alt="gallery"
//                 className="block h-full w-full rounded-lg object-cover object-center"
//                 src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
//         </div>
//     </div>
//     <div className="flex w-1/2 flex-wrap">
//         <div className="w-full p-1 md:p-2">
//             <img
//                 alt="gallery"
//                 className="block h-full w-full rounded-lg object-cover object-center"
//                 src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
//         </div>
//         <div className="w-1/2 p-1 md:p-2">
//             <img
//                 alt="gallery"
//                 className="block h-full w-full rounded-lg object-cover object-center"
//                 src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
//         </div>
//         <div className="w-1/2 p-1 md:p-2">
//             <img
//                 alt="gallery"
//                 className="block h-full w-full rounded-lg object-cover object-center"
//                 src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
//         </div>
//     </div>
// </div>
// </main>
