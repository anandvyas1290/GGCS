import React, { useEffect } from "react";
// import { whyGGCS } from '../../../db/dummy'
import HeroSection from "./HeroSection";
import HOS from "./HOS";
import Container from "../../../components/Layout/Layout";

function WhyGGCS() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Container>
                <HOS />
            </Container>
            <div className="bg-slate-100 border-b-2 ">
                <Container>
                    <HeroSection />
                </Container>
            </div>
        </>
    );
}

export default WhyGGCS;
