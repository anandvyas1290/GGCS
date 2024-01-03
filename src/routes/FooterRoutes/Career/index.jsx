import React, { useEffect } from "react";
import Hero from "./Hero";
import ExploreOpportunities from "./ExploreOpportunities";
import BrowserCategory from "./BrowseCategory";
import LatestJob from "./LatestJob";

export default function Career() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <main>
            <Hero />
            <ExploreOpportunities />
            <BrowserCategory />
            <LatestJob />
        </main>
    );
}
