import React from 'react'
import { ourAlumni } from '../../../db/dummy'

function OurAlumni() {
    return (
        <section className='max-w-screen-lg mx-auto md:px-10 sm:px-6 px-3 '>
            <section className=" ">
                <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl pt-20 sm:pt-14">
                    <h2 className="mb-6 text-3xl font-bold">{ourAlumni.title}</h2>
                    {/* <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                        error amet numquam iure provident voluptate esse quasi, veritatis
                        totam voluptas nostrum quisquam eum porro a pariatur veniam.
                    </p> */}
                </div>

                <div className="grid gap-6 text-center md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-5">
                    {ourAlumni?.list?.map((item) => {
                        return (
                            <div key={item?.id} className='text-neutral-700' >
                                <div className="block rounded-lg bg-white shadow-lg ">
                                    <div className={`h-28 overflow-hidden rounded-t-lg ${item?.name ? `bg-[${item?.color}]` : ""}`}></div>
                                    <div
                                        className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                        <img
                                            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                                    </div>
                                    <div className="p-6">
                                        <h4 className="mb-4 text-2xl font-semibold">{item?.name}</h4>
                                        {/* <div
                                            className="mx-auto w-10 my-2 overflow-hidden rounded-full border-2 border-white bg-white">
                                            <img
                                                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                                        </div> */}
                                        <hr />
                                        <p className="mt-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="inline-block h-7 w-7 pr-2"
                                                viewBox="0 0 24 24">
                                                <path
                                                    d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                            </svg>
                                            Lorem ipsum dolor sit amet eos adipisci, consectetur
                                            adipisicing elit.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='flex justify-center mt-10'>
                    <button className='flex items-center uppercase border-2 border-red-500 bg-red-600  text-white rounded-lg px-6 py-3 '>
                        <span >  More Stories</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </button>
                </div>
            </section>
        </section>
    )
}

export default OurAlumni