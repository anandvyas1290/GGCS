import React from "react";
import "./styles.css";

import Services from "./Services";
import Process from "./Process";
import HeroSection from "./HeroSection";
import SEO from "./SEO";
import PricingSection from "./PricingSection";
import ContactUs from "../../../components/Layout/ContactUs";

// import Awards from "./Awards";
// import Review from "./Review";
// import Featured from "./Featured";
// import CompanyBlog from "./CompanyBlog";
// import CaseStudies from "./CaseStudies";
// import Testimonial from "./Testimonial";

export default function Home(props) {
    return (
        <div className="font-roboto ">
            <HeroSection {...props} />
            <Services {...props} />
            <PricingSection {...props} />
            {/* <Featured {...props} /> */}
            <Process {...props} />
            <SEO {...props} />
            {/* <CaseStudies {...props} /> */}
            {/* <Testimonial {...props} /> */}
            {/* <Review {...props} /> */}
            <ContactUs {...props} />
            {/* <CompanyBlog {...props} /> */}
            {/* <Awards {...props} /> */}
        </div>
    );
}
