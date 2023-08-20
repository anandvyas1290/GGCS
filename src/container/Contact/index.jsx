import React from 'react'
import Bg from "../../assets/Contact/contact-4-bg.webp"
function Contact() {
    return (
        <div className='relative'>
            <div className='absolute b-0 -z-1 l-0 r-0'>
                <img src={Bg} alt="icon" />
            </div>
            <div>

            </div>
            <div className=' max-w-screen-lg lg:max-w-screen-xl mx-auto '>
                <div className=' '>
                    <div>
                        <p>Get In Touch</p>
                        <h4>Lets Work Together</h4>
                        <h6>Just tell us your requirements and we will help you!</h6>
                        <div>
                            <h5>
                                +(800) 2563 123
                            </h5>
                            <h6>
                                info@company.com
                            </h6>
                        </div>
                        <div>
                            <button>Call Us Now</button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact