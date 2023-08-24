import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "./Home";
import Services from "./Services";
import Blog from "./Blog";

export default function MainRoutes(props) {
    const routes = useRoutes([
        { path: "/", element: <Home {...props} /> },
        { path: "/services", element: <Services {...props} /> },
        { path: "/blog", element: <Blog {...props} /> },
    ]);
    return routes;
}
