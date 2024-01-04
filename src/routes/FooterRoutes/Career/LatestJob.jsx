import React from "react";

const LatestJob = () => {
    return (
        <div className="py-10 md:py-20">
            <div className="max-w-screen-xl px-3 mx-auto xl:px-0">
                <div className="font-sans antialiased bg-gray-200">
                    <div className="container px-4 mx-auto sm:px-8">
                        <div className="py-8">
                            <div>
                                <h2 className="text-2xl font-semibold leading-tight">
                                    Latest Jobs
                                </h2>
                            </div>

                            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                                <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                {/* <th
                                                    className="px-5 py-3 text-2xl font-semibold text-left text-gray-600 bg-gray-100 border-b-2 border-gray-200 ">
                                                    Latest Jobs
                                                </th> */}
                                                {/* <th
                                                    className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                                    Rol
                                                </th>
                                                <th
                                                    className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                                                    Created at
                                                </th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 w-10 h-10">
                                                            <img
                                                                className="w-full h-full rounded-full"
                                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-lg font-semibold text-gray-900 whitespace-no-wrap">
                                                                Lorem ipsum...
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <p className="font-semibold text-gray-900 whitespace-no-wrap">
                                                        Full Time
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <p className="font-semibold text-gray-900 whitespace-no-wrap">
                                                        Ahmedabad
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* <div
                                        className="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between ">
                                        <span className="text-xs text-gray-900 xs:text-sm">
                                            Showing 1 to 4 of 50 Entries
                                        </span>
                                        <div className="inline-flex mt-2 xs:mt-0">
                                            <button
                                                className="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400">
                                                Prev
                                            </button>
                                            <button
                                                className="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400">
                                                Next
                                            </button>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestJob;
