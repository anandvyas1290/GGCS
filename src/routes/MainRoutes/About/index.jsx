import React from 'react'
import AboutHero from './AboutHero'
import HOS from './HOS'
import Vision from './Vision'
import Team from './Team'

function About(props) {
    return (
        <div>
            <AboutHero {...props} />
            <HOS {...props} />
            <Vision {...props} />
            <Team {...props} />

        </div>
    )
}

export default About