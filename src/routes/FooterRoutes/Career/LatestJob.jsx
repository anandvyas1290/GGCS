import React from 'react'
const LatestJob = () => {
    // const arr = [
    //     { id: 1, Icon: uber, title: "Title", desc: "lorem ipsum ", },
    //     { id: 1, Icon: uber, title: "Title", desc: "lorem ipsum", },
    //     { id: 1, Icon: uber, title: "Title", desc: "lorem ipsum ", },
    //     { id: 1, Icon: uber, title: "Title", desc: "lorem ipsum ", },
    //     { id: 1, Icon: uber, title: "Title", desc: "lorem ipsum ", },
    //     { id: 1, Icon: uber, title: "Title", desc: "lorem ipsum ", },
    // ]
    return (
        <div className='md:py-20 py-10'>
            <div className='max-w-screen-xl mx-auto xl:px-0 px-3'>
                <div className="antialiased font-sans bg-gray-200">
                    <div className="container mx-auto px-4 sm:px-8">
                        <div className="py-8">
                            <div>
                                <h2 className="text-2xl font-semibold leading-tight">Latest Jobs</h2>
                            </div>

                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                {/* <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-600  ">
                                                    Latest Jobs
                                                </th> */}
                                                {/* <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Rol
                                                </th>
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Created at
                                                </th> */}

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 w-10 h-10">
                                                            <img className="w-full h-full rounded-full"
                                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                                alt="" />
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-gray-900  text-lg font-semibold whitespace-no-wrap">
                                                                Lorem ipsum...
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900  font-semibold whitespace-no-wrap">Full Time</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 font-semibold whitespace-no-wrap">
                                                        Ahmedabad
                                                    </p>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* <div
                                        className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                        <span className="text-xs xs:text-sm text-gray-900">
                                            Showing 1 to 4 of 50 Entries
                                        </span>
                                        <div className="inline-flex mt-2 xs:mt-0">
                                            <button
                                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                                Prev
                                            </button>
                                            <button
                                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
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
        </div >
    )
}

export default LatestJob