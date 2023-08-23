import React from "react";

import HeroSection from "./HeroSection";
import Services from "./Services";
import Featured from "./Featured";
import Process from "./Process";
import CaseStudies from "./CaseStudies";
import Contact from "./Contact";
import CompanyBlog from "./CompanyBlog";
import Awards from "./Awards";
import Testimonial from "./Testimonial";
import Review from "./Review";
import Pricing from "./Pricing";

export default function Home(props) {
    return (
        <div className="font-jakarta">
            <HeroSection {...props} />
            <Services {...props} />
            <Featured {...props} />
            <Process {...props} />
            <Pricing {...props} />
            <CaseStudies {...props} />
            <Testimonial {...props} />
            <Review {...props} />
            <Contact {...props} />
            <CompanyBlog {...props} />
            <Awards {...props} />
        </div>
    );
}
