import React from "react";

import { useLocation } from "react-router";
import { useRoutes } from "react-router-dom";

import { servicesData } from "../../db/dummy";
import BackNavigate from "../../components/UI/BackNavigate";
import { OtherServices } from "../../components/OtherServices";
import PricingDetails from "../../components/Pricing/PricingDetails";

export default function OtherRoutess(props) {
    let location = useLocation();

    let slug = location?.state
        ? location?.state?.slug
        : location?.pathname?.replace("/service/", "");

    let serviceData = servicesData?.filter((item) => {
        return item?.slug === slug;
    });

    const routes = useRoutes([
        {
            path: "/*",
            element: <OtherServices data={serviceData[0]} {...props} />,
        },
        {
            path: "/plans",
            element: <PricingDetails {...props} />,
        },
    ]);
    return (
        <div className="bg-gray-100">
            {location?.state ? (
                <BackNavigate backLabel={serviceData[0]?.heading} />
            ) : null}
            {routes}
        </div>
    );
}
