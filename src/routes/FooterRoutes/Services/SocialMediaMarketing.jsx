import React from "react";
import { servicesData } from "../../../db/dummy";
import { OthersServices } from "../../../components/OtherServices";

function SocialMediaMarketing() {
    return (
        <main>
            <OthersServices
                title={servicesData[1]?.heading}
                desc={servicesData[1]?.list}
                className
            />
        </main>
    );
}

export default SocialMediaMarketing;
