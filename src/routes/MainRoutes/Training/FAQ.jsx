import React, { useState } from 'react'
import Container from '../../../components/Layout/Layout'
import { faq } from '../../../db/dummy'
import { ArrowDownOutlined, ArrowUpOutlined, CloseCircleFilled, DownOutlined, UpOutlined } from '@ant-design/icons'

function FAQ() {
    const [state, setState] = useState({
        accordion: {
            1: false
        }
    })
    const { accordion } = state
    return (
        <Container>
            <div className='md:pt-20 pt-14 pb-10'>
                <h1 className='text-3xl text-center'>{faq?.title}</h1>
            </div>
            <div className='pb-20'>
                {faq?.list?.map((item) =>
                    <div key={item?.id} className='mb-2'>
                        <div className={`flex justify-between py-5 px-5 rounded-lg hover:bg-red-50 cursor-pointer  ${accordion[item?.id] ? "bg-red-50" : ""}`}
                            onClick={() => {
                                setState((prev) => {
                                    return {
                                        ...prev,
                                        accordion: {
                                            [item?.id]: !prev.accordion[item?.id]
                                        }
                                    }
                                })
                            }}
                        >
                            <h3 className='font-semibold'>{item?.que}</h3>
                            {accordion[item?.id] ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            }
                        </div>
                        {accordion[item?.id] ?
                            <div className={`py-5 px-5 h-0 overflow-hidden transition-all duration-300 ease-in-out ${accordion[item?.id] ? "opacity-100" : "opacity-0"}`} >
                                <p>{item?.ans}</p>
                            </div> : null}
                    </div>
                )}
            </div>
        </Container >
    )
}

export default FAQ