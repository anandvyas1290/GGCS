import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
// import WhyGGCS from "./WhyGGCS";
import Services from "./Services";
import Training from "./Training";
import UposPackage from "./UposPackage/UposPackage";
import CoursesDetails from "./Training/CoursesDetails";

import { navMenu } from "../../db/dummy";
import BackNavigate from "../../components/UI/BackNavigate";

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
        // { path: "/why-ggcs", element: <WhyGGCS {...props} /> },
        {
            path: "/training",
            children: [
                { path: "", element: <Training {...props} /> },
                { path: "*", element: <CoursesDetails /> },
            ],
        },
        { path: "/gallery", element: <Gallery {...props} /> },
        { path: "/contact", element: <Contact {...props} /> },
        { path: "/upos-details", element: <UposPackage {...props} /> },
    ]);
    return (
        <div>
            {state?.title ? <BackNavigate backLabel={state?.title} /> : null}
            {routes}
        </div>
    );
}
