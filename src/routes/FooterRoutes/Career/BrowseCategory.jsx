import React from 'react'
import uber from "../../../assets/Footer/uber-logo.svg"
import { Desc, H3, H5 } from '../../../components/Typography'
const BrowserCategory = () => {

    const arr = [
        { id: 1, Icon: uber, title: "Title", desc: "lorem ipsum ", },
        { id: 2, Icon: uber, title: "Title", desc: "lorem ipsum", },
        { id: 3, Icon: uber, title: "Title", desc: "lorem ipsum ", },
        { id: 4, Icon: uber, title: "Title", desc: "lorem ipsum ", },
        { id: 5, Icon: uber, title: "Title", desc: "lorem ipsum ", },
        { id: 6, Icon: uber, title: "Title", desc: "lorem ipsum ", },
    ]
    return (
        <div className='md:py-20 py-10'>
            <div className='max-w-screen-xl mx-auto xl:px-0 px-3'>
                <H3 className='text-center  mb-3'>Browse jobs by category</H3>
                <Desc className='text-center font-semibold text-lg text-gray-600 mb-10'>Choose form the list of most popular categories.</Desc>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 '>
                    {arr?.map((item) => (
                        <div key={item?.id} className='group text-center bg-[#f8f9fa] border  lg:pb-8 py-5 lg:px-10 hover:bg-gray-100 '>
                            <img src={item?.Icon} alt={item?.title} className='h-24 mx-auto' />
                            <H5 className='pb-1 '> {item?.title}</H5>
                            <Desc>{item?.desc} </Desc>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default BrowserCategory