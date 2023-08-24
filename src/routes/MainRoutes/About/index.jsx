import React from 'react'
import AboutHero from './AboutHero'
import HOS from './HOS'

function About(props) {
    return (
        <div>
            <AboutHero {...props} />
            <HOS {...props} />
        </div>
    )
}

export default About