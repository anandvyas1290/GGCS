import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
// import Blog from "./Blog";
import Contact from "./Contact";
import Training from "./Training";
import Gallery from "./Gallery";
import WhyGGCS from "./WhyGGCS";
import UposPackage from "./UposPackage/UposPackage";

import { navMenu } from "../../db/dummy";
import BackNavigate from "../../components/UI/BackNavigate";
import PrivacyPolicy from "../FooterRoutes/OtherServices/PrivacyPolicy";
import TermsAndCondition from "../FooterRoutes/OtherServices/TermsAndCondition";
import Disclaimer from "../FooterRoutes/OtherServices/Disclaimer";
import CoursesDetails from "./Training/CoursesDetails";

export default function MainRoutes(props) {
    const [state, setState] = useState({ title: "" });
    let path = window.location.pathname;

    useEffect(() => {
        let page = navMenu?.filter((item) => {
            return item?.slug === path;
        });

        setState((prev) => {
            return { ...prev, title: page[0]?.label };
        }, []);
    }, [path]);

    const routes = useRoutes([
        { path: "/", element: <Home {...props} /> },
        { path: "/about", element: <About {...props} /> },
        { path: "/services", element: <Services {...props} /> },
        { path: "/why-ggcs", element: <WhyGGCS {...props} /> },
        {
            path: "/training",
            children: [
                { path: "", element: <Training {...props} /> },
                { path: "*", element: <CoursesDetails /> },
            ],
        },
        { path: "/gallery", element: <Gallery {...props} /> },
        // { path: "/blog", element: <Blog {...props} /> },
        { path: "/contact", element: <Contact {...props} /> },
        { path: "/upos-details", element: <UposPackage {...props} /> },
        { path: "/privacy-policy", element: <PrivacyPolicy {...props} /> },
        {
            path: "/terms-conditions",
            element: <TermsAndCondition {...props} />,
        },
        { path: "/disclaimer", element: <Disclaimer {...props} /> },
    ]);
    return (
        <div>
            {state?.title ? <BackNavigate backLabel={state?.title} /> : null}
            {routes}
        </div>
    );
}
