import React from "react";

export default function InfoModal({ title, children }) {
    console.log(title, children);
    return (
        <div>
            {/* <button
                type="button"
                className="inline-flex items-center px-4 py-3 text-sm font-semibold text-white bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-vertically-centered-modal"
            >
                Vertically centered modal 
            </button> */}

            <div
                id="hs-vertically-centered-modal"
                className="hs-overlay  w-full h-full fixed top-0 start-0 z-[60]  overflow-y-auto pointer-events-none"
            >
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                    <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div className="flex items-center justify-between px-4 py-3 border-b dark:border-gray-700">
                            <h3 className="font-bold text-gray-800 dark:text-white">
                                {title ?? ""}
                            </h3>
                            <button
                                type="button"
                                className="flex items-center justify-center text-sm font-semibold text-gray-800 border border-transparent rounded-full w-7 h-7 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-overlay="#hs-vertically-centered-modal"
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="flex-shrink-0 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 overflow-y-auto">
                            <p className="text-gray-800 dark:text-gray-400">
                                {children}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
