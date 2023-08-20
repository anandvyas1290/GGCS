import React from "react";

import HeroSection from "./HeroSection";
import Services from "./Services";
import Contact from "./Contact";
import CompanyBlog from "./CompanyBlog";
import Awards from "./Awards";

export default function Home(props) {
    return (
        <div className="container w-full font-jakarta">
            <HeroSection {...props} />
            <Services {...props} />
            <CompanyBlog {...props} />
            <Contact {...props} />
            <Awards {...props} />
        </div>
    );
}
