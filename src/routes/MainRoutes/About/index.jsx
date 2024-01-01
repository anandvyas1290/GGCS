import React, { useEffect } from "react";

import HOS from "./components/HOS";
import Vision from "./components/Vision";
import AboutHero from "./components/AboutHero";
// import Team from './Team'

function About(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <AboutHero {...props} />
            <HOS {...props} />
            <Vision {...props} />
            {/* <Team {...props} /> */}
        </div>
    );
}

export default About;
