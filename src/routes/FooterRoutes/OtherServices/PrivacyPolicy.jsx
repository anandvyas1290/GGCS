import React from 'react'
import { privacyPolicy } from '../../../db/dummy'
import Container from '../../../components/Layout/Layout'
import { H1Animate } from '../../../components/Animation/H1Animate'

function PrivacyPolicy(props) {
    return (
        <main>
            <Container>
                <section>
                    <H1Animate className='text-5xl text-red-200'>
                        {privacyPolicy?.title}
                    </H1Animate>
                </section>
                <section>
                    {privacyPolicy?.list?.map((item) => {
                        return (
                            <div key={id}>
                                <h3>{item?.title}</h3>
                                <p>{item?.info}</p>
                                <ul>
                                    {item?.map((item, i) => {
                                        return (
                                            <li key={i}>{item?.content}</li>
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