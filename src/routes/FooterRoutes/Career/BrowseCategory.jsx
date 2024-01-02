import React from 'react'
import uber from "../../../assets/Footer/uber-logo.svg"
const BrowserCategory = () => {

    const arr = [
        { id: 1, Icon: uber, title: "Title", desc: "lorem ipsum ", },
        { id: 1, Icon: uber, title: "Title", desc: "lorem ipsum", },
        { id: 1, Icon: uber, title: "Title", desc: "lorem ipsum ", },
        { id: 1, Icon: uber, title: "Title", desc: "lorem ipsum ", },
        { id: 1, Icon: uber, title: "Title", desc: "lorem ipsum ", },
        { id: 1, Icon: uber, title: "Title", desc: "lorem ipsum ", },
    ]
    return (
        <div className='md:py-20 py-10'>
            <div className='max-w-screen-xl mx-auto xl:px-0 px-3'>
                <div>
                    <h3 className='text-center font-semibold text-3xl mb-5'>Browse jobs by category</h3>
                    <p className='text-center font-semibold text-lg text-gray-600 mb-10'>Choose form the list of most popular categories.</p>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 '>
                        {arr?.map((item) => (
                            <div key={item?.id} className='group text-center bg-[#f8f9fa] border  lg:pb-8 py-5 lg:px-10 hover:bg-gray-100 '>
                                <img src={item?.Icon} alt={item?.title} className='h-24 mx-auto' />
                                <h6 className='text-xl font-semibold pb-1 '> {item?.title}</h6>
                                <p className=' text-lg text-gray-700'>{item?.desc} </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BrowserCategory