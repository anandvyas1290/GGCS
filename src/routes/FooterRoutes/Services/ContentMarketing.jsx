import React from "react";
import { servicesData } from "../../../db/dummy";
import { OthersServices } from "../../../components/OtherServices";

function ContentMarketing() {
    return (
        <main>
            <ServiceHeading
                title={servicesData[3]?.heading}
                desc={servicesData[1]?.list}
                className
            />
        </main>
    );
}

export default ContentMarketing;
