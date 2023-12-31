import React from "react";
import { useRoutes } from "react-router-dom";
import SEO from "./Services/Seo";
import IOMarketing from "./Services/IOMarketing";
import AddOnServices from "./Services/AddOnServices";
import SocialMediaMarketing from "./Services/SocialMediaMarketing";
import ContentMarketing from "./Services/ContentMarketing";

export default function FooterRoutes(props) {
    window.scrollTo(0, 0)
    const routes = useRoutes([
        { path: "/seo", element: <SEO {...props} /> },
        { path: "/social-media-marketing", element: <SocialMediaMarketing {...props} /> },
        { path: "/content-marketing", element: <ContentMarketing {...props} /> },
        { path: "/io-marketing", element: <IOMarketing {...props} /> },
        { path: "/add-on-service", element: <AddOnServices {...props} /> }
    ])
    return routes;
}
