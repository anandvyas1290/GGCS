import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Services from "./Services";

export default function MainRoutes(props) {
        const routes = useRoutes([
                { path: "/", element: <Home {...props} /> },
                { path: "/about", element: <About {...props} /> },
                { path: "/services", element: <Services {...props} /> },
        ]);
        return routes;
}
