import React from "react";

import { useLocation } from "react-router";
import { useRoutes } from "react-router-dom";

import { servicesData } from "../../db/dummy";
import CreatorPackages from "./CreatorPackages";
import OtherServices from "../../components/OtherServices";
import PackageDetails from "./CreatorPackages/PackageDetails";
import PricingDetails from "../../components/Pricing/PricingDetails";

export default function OtherRoutes(props) {
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
            element: (
                <OtherServices
                    data={serviceData[0]}
                    samePage={location?.state}
                    {...props}
                />
            ),
        },
        {
            path: "/plans",
            element: <PricingDetails {...props} />,
        },
        {
            path: "/creator-packages",
            children: [
                { path: "", element: <CreatorPackages {...props} /> },
                { path: "*", element: <PackageDetails /> },
            ],
        },
        { path: "/service/*", element: <OtherRoutes {...props} /> },
    ]);
    return <div>{routes}</div>;
}
