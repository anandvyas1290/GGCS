import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "./Home";
import Services from "./Services";

export default function MainRoutes(props) {
    const routes = useRoutes([
        { path: "/", element: <Home {...props} /> },
        { path: "/services", element: <Services {...props} /> },
    ]);
    return routes;
}
