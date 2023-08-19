import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "./Home";

export default function MainRoutes(props) {
    const routes = useRoutes([{ path: "/", element: <Home {...props} /> }]);
    return routes;
}
