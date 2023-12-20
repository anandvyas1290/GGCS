import React from 'react'
import Container from '../../../components/Layout/Layout'
import { hireUs } from './Json';

export const Card = ({ title, description, Icon, iconClassName = '' }) => {
    return (
        <div className={`group w-full shadow-xl border-[1px] !bg-white rounded-md text-center py-7 transform transition duration-500 hover:scale-110 ${iconClassName}`}>
            <div className={`w-20 h-20 mx-auto rounded-full border p-4 `}>
                <img src={Icon} alt={title} className='h-full' />
            </div>
            <div className="text-xl text-navLink pt-4 font-semibold group-hover:!text-white">{title}</div>
            <div className="text-gray-400 font-normal text-sm group-hover:text-black">{description}</div>
        </div>
    );
};

function Hero() {
    return (
        <section>
            <section className="py-24 relative">
                <Container className="text-center">
                    <h1 className='text-3xl font-semibold text-center mb-5'>Hire Us</h1>
                    <p>{hireUs?.description}</p>
                    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 my-12 text">
                        {hireUs?.list?.map((item, i) => (
                            <Card
                                key={i}
                                title={item?.title}
                                description={item?.desc}
                                Icon={item?.Icon}
                                iconClassName={item?.style}
                            />
                        ))}
                    </div>
                </Container>
            </section>
        </section>
    )
}

export default Hero