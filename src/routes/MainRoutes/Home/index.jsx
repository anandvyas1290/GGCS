import React from "react";
import "./styles.css";

import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Process from "./components/Process";
import SEO from "./components/SEO";
import ContactUs from "../../../components/Layout/ContactUs";
import WhyGGCS from "../WhyGGCS";

// import Awards from "./Awards";
// import Review from "./Review";
// import Featured from "./components/Featured";
// import CompanyBlog from "./CompanyBlog";
// import CaseStudies from "./CaseStudies";
// import Testimonial from "./Testimonial";

export default function Home(props) {
    return (
        <div className="font-roboto ">
            <HeroSection {...props} />
            <Services {...props} />
            <WhyGGCS />
            {/* <Featured {...props} /> */}
            <Process {...props} />
            <SEO {...props} />
            {/* <CaseStudies {...props} /> */}
            {/* <Testimonial {...props} /> */}
            {/* <Review {...props} /> */}
            {/* <CompanyBlog {...props} /> */}
            {/* <Awards {...props} /> */}
            <ContactUs {...props} />
        </div>
    );
}
