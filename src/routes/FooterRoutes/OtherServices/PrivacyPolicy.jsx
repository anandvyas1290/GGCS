import React from 'react'
import { privacyPolicy } from '../../../db/dummy'
import Container from '../../../components/Layout/Layout'
import { H1Animate } from '../../../components/Animation/H1Animate'

function PrivacyPolicy(props) {
    return (
        <main>
            <Container>
                <section className='py-14 md:py-28'>
                    <H1Animate className='text-5xl text-center'>
                        {privacyPolicy?.title}
                    </H1Animate>
                </section>
                <section className='max-w-screen-lg mx-auto !mb-24 sm:mb-10'>
                    {privacyPolicy?.list?.map((item) => {
                        return (
                            <div key={item?.id} className='mb-6'>
                                <h3 className='text-xl font-semibold mb-2'>{item?.title}</h3>
                                <p className='text-lg mb-2'>{item?.info}</p>
                                <ul className='list-disc'>
                                    {item?.data?.map((data, i) => {
                                        return (
                                            <li key={i} className='text-gray-600'>{data?.content}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}

                </section>
            </Container>
        </main>
    )
}

export default PrivacyPolicy