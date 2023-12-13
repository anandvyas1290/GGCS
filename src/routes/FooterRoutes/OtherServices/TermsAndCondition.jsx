import React from 'react'
import { termsAndConditions } from '../../../db/dummy'
import { H1Animate, TextAnimate } from '../../../components/Animation/H1Animate'
import Container from '../../../components/Layout/Layout'

function TermsAndCondition() {
    return (
        <main>
            <Container>
                <section className='py-14 md:py-28'>
                    <H1Animate className='text-5xl text-center'>
                        {termsAndConditions?.title}
                    </H1Animate>
                    <TextAnimate className='text-xl text-center mt-3'>
                        {termsAndConditions?.desc}
                    </TextAnimate>
                </section>
                <section className='max-w-screen-lg mx-auto !mb-24 sm:mb-10'>
                    {termsAndConditions?.list?.map((item) => {
                        return (
                            <div key={item?.id} className='mb-6'>
                                <h3 className='text-xl font-semibold mb-2'>{item?.title}</h3>
                                <p className='text-lg  text-gray-600'>{item?.info}</p>
                            </div>
                        )
                    })}

                </section>
            </Container>
        </main>
    )
}

export default TermsAndCondition