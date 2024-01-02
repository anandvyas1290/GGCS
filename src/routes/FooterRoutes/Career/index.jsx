import React from "react";
import Hero from "./Hero";
import ExploreOpportunities from "./ExploreOpportunities";
import BrowserCategory from "./BrowseCategory";
import LatestJob from "./LatestJob";

export default function Career() {
    return (
        <main>
            <Hero />
            <ExploreOpportunities />
            <BrowserCategory />
            <LatestJob />
        </main>
    );
}
