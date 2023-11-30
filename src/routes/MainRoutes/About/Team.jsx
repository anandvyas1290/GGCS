import React from 'react'
import team1 from "../../../assets/about/team/team-1.webp"
import team2 from '../../../assets/about/team/team-2.webp'
import team3 from '../../../assets/about/team/team-3.webp'
import team4 from '../../../assets/about/team/team-4.webp'
import funfactBg from '../../../assets/about/team/funfact-1.webp'
import funfact1 from '../../../assets/about/team/funfact-2.webp'
import funfact2 from '../../../assets/about/team/funfact-3.webp'
import textBg from '../../../assets/about/hoc/text-bg.svg'
import icon1 from '../../../assets/about/team/funfact-icon1.webp'
import icon2 from '../../../assets/about/team/funfact-icon2.webp'
import icon3 from '../../../assets/about/team/funfact-icon3.webp'
import icon4 from '../../../assets/about/team/funfact-icon4.webp'
import img1 from "../../../assets/home/awards/award-shape-1.webp";

import Container from '../../../components/Layout/Layout'
import { PrimaryBtn } from "../../../components/Button"

const cards = [
    {
        leftIcon: icon1,
        leftLabel: "62 Countries",
        rightIcon: icon2,
        rightLabel: "28 Languages",
        label: "Keyword",
        count: "4.628.319.632",
    },
    {
        leftIcon: icon3,
        leftLabel: "4+ Billion Keywords",
        rightIcon: icon4,
        rightLabel: "36TB Data",
        label: "Keyword",
        count: "106,9 Billion",
    }
]
const team = [
    {
        icon: team1,
        name: "Danny Russell",
        position: "Founder & CEO"
    },
    {
        icon: team2,
        name: "Byron Conner",
        position: "Founder & CEO"
    },
    {
        icon: team3,
        name: "Annette Black",
        position: "Founder & CEO"
    }, {
        icon: team4,
        name: "Kathryn Murphy",
        position: "Founder & CEO"
    }
]
function Team() {
    return (
        <div>
            <Container>
                {/* <div className="block md:flex flex-wrap mt-28">
                    {[1, 1, 1]?.map((d, i) => {
                        return (
                            <div
                                key={i}
                                className="md:w-1/3 h-full mb-12 md:mb-0flex justify-center   "
                            >
                                <div className="">
                                    <img
                                        src={img1}
                                        alt={"icon"}
                                        className="mx-auto"
                                    />
                                    <div>
                                        <h4 className="text-2xl text-center mt-4 mb-1">
                                            Best of the Year
                                        </h4>
                                        <h6 className="text-center">
                                            Best Apps - Apple
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div> */}
                <div className='my-28 '>
                    <div>
                        <div className='relative bg-darkBg bg-darkBlue pt-20 pb-60 w-full overflow-hidden -z-10 rounded-3xl'>
                            <div className='flex justify-center  items-center text-center'>
                                <div>
                                    <div className='relative inline-block'>
                                        <img src={textBg} alt="" />
                                        <p className='absolute top-2 left-1 text-white'>Selected Project</p>
                                    </div>
                                    <h4 className='text-4xl font-semibold text-white'>
                                        We Believe In Our Success
                                    </h4>
                                </div>
                            </div>
                            <div className=''>
                                <div className='absolute -top-48 -left-24'>
                                    <img src={funfact1} alt="funfact" />
                                </div>
                                <div className='absolute -right-28 -bottom-32'>
                                    <img src={funfact2} alt="funfact2" />
                                </div>
                            </div>
                        </div>
                        <div className='-mt-48'>
                            <div className='flex flex-wrap justify-center'>
                                {
                                    cards?.map((item, i) => {
                                        return (
                                            <div className='w-2/5 mx-10' key={i}>
                                                <div className='bg-white px-10 py-12 rounded-xl shadow-shadow2 text-center'>
                                                    <p>Keywords</p>
                                                    <h4 className='text-darkBlue text-6xl font-bold mb-5'>
                                                        4
                                                        <span className='text-4xl'>.628.319.632</span>
                                                    </h4>
                                                    <div className='flex justify-between'>
                                                        <div className='flex '>
                                                            <img src={icon1} alt="" />
                                                            <span className='pl-2'>
                                                                62 Countries
                                                            </span>
                                                        </div>
                                                        <div className='flex'>
                                                            <img src={icon2} alt="" />
                                                            <span className='pl-2'>
                                                                62 Countries
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* Teams  */}
                {/* <div className='mt-20 mb-20'>
                    <div className='text-center '>
                        <div className='mb-5'>
                            <h4 className='text-5xl font-bold mb-5'>
                                Meet our team of <br />
                                expert
                            </h4>
                            <p className='mb-5'>We're a 100% remote team spread all across the world!

                                Join Our Team</p>

                        </div>
                        <div className='flex justify-center'>
                            <PrimaryBtn>
                                Join Our Team
                            </PrimaryBtn>
                        </div>
                    </div>
                    <div className='flex flex-wrap mt-24'>
                        {team?.map((item, i) => {
                            return (
                                <div key={i} className='w-1/4 px-10 text-center'>
                                    <div className='relative bg-pink-300 pt-5 mb-5 overflow-hidden rounded-tl-[200px] rounded-br-[200px] rounded-bl-[200px] rounded-tr'>
                                        <img src={item?.icon} alt="icon" />
                                        <div className='text-2xl  text-gray-400 absolute top-4 right-3 bg-white px-2  rounded-full'>
                                            +
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className='text-xl font-semibold'>
                                            {item?.name}
                                        </h4>
                                        <p>
                                            {item?.position}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div> */}
            </Container >
        </div >
    )
}

export default Team