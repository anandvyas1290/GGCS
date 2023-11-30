import React from "react";
import "./styles.css";

import HeroSection from "./HeroSection";
import Services from "./Services";
import Featured from "./Featured";
import Process from "./Process";
// import CaseStudies from "./CaseStudies";
import Contact from "./Contact";
// import CompanyBlog from "./CompanyBlog";
// import Awards from "./Awards";
// import Testimonial from "./Testimonial";
// import Review from "./Review";
import SEO from "./SEO";
import PricingSection from "./PricingSection";

export default function Home(props) {
    return (
        <div className="font-jakarta">
            <HeroSection {...props} />
            <Services {...props} />
            <PricingSection {...props} />
            <Featured {...props} />
            <Process {...props} />
            <SEO {...props} />
            {/* <CaseStudies {...props} /> */}

            {/* <Testimonial {...props} /> */}
            {/* <Review {...props} /> */}
            <Contact {...props} />
            {/* <CompanyBlog {...props} /> */}
            {/* <Awards {...props} /> */}
        </div>
    );
}
