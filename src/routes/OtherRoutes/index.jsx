import React from "react";

import { useLocation } from "react-router";
import { useRoutes } from "react-router-dom";

import { OtherServices } from "../../components/OtherServices";
import { servicesData } from "../../db/dummy";

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
    ]);
    return routes;
}
