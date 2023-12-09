import React from "react";
import { useRoutes } from "react-router-dom";
import SEO from "../MainRoutes/Home/SEO";
import SearchEngineMarketing from "./Services/SearchEngineMarketing";
import IOMarketing from "./Services/IOMarketing";
import AddOnServices from "./Services/AddOnServices";

export default function FooterRoutes(props) {
    const routes = useRoutes([
        { path: "/seo", element: <SEO {...props} /> },
        { path: "/social-media-marketing", element: <SocialMediaMarketing {...props} /> },
        { path: "/search-engine-marketing", element: <SearchEngineMarketing {...props} /> },
        { path: "/io-marketing", element: <IOMarketing {...props} /> },
        { path: "/add-on-service", element: <AddOnServices {...props} /> }
    ])
    return routes;
}
