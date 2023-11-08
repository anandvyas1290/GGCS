import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
// import Blog from "./Blog";
import Contact from "./Contact";
import WhyGGCS from "./WhyGGCS";

export default function MainRoutes(props) {
    const routes = useRoutes([
        { path: "/", element: <Home {...props} /> },
        { path: "/about", element: <About {...props} /> },
        { path: "/services", element: <Services {...props} /> },
        { path: "/why-ggcs", element: <WhyGGCS {...props} /> },
        // { path: "/blog", element: <Blog {...props} /> },
        { path: "/contact", element: <Contact {...props} /> }
    ]);
    return routes;
}
