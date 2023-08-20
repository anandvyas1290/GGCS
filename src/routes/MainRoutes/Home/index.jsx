import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";

export default function Home(props) {
    return (
        <div className="container w-full font-jakarta">
            <HeroSection {...props} />
            <Services {...props} />
        </div>
    );
}
