import React from "react";
import { servicesData } from "../../../db/dummy";
import { OthersServices } from "../../../components/OtherServices";

function SEO() {
    return (
        <main>
            <OthersServices
                title={servicesData[0]?.heading}
                desc={servicesData[0]?.list}
                className
            />
        </main>
    );
}

export default SEO;
