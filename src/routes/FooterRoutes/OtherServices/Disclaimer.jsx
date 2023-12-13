import React from 'react'
import { disclaimer } from '../../../db/dummy'
import Container from '../../../components/Layout/Layout'
import { H1Animate, TextAnimate } from '../../../components/Animation/H1Animate'

function Disclaimer(props) {
    return (
        <main>
            <Container>
                <section className='py-14 md:py-28'>
                    <H1Animate className='text-5xl text-center'>
                        {disclaimer?.title}
                    </H1Animate>
                    <TextAnimate className='max-w-screen-lg mx-auto text-lg text-center mt-3 text-gray-700'>
                        {disclaimer?.desc}
                    </TextAnimate>
                </section>
                <section className='max-w-screen-lg mx-auto !mb-24 sm:mb-10'>
                    {disclaimer?.list?.map((item) => {
                        return (
                            <div key={item?.id} className='mb-6'>
                                <h3 className='text-xl font-semibold mb-2'>{item?.title}</h3>
                                <p className='text-lg text-gray-600 mb-2 '>{item?.info}</p>
                            </div>
                        )
                    })}

                </section>
            </Container>
        </main>
    )
}

export default Disclaimer