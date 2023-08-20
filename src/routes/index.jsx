import React from "react";
import { useRoutes } from "react-router-dom";

import MainRoutes from "./MainRoutes";
import Footer from '../container/Footer'
import CompanyBlog from '../container/CompanyBlog'

export default function Routes(props) {
    const routes = useRoutes([
        { path: "/*", element: <MainRoutes {...props} /> },
    ]);
    return (<main className="container h-[100vh]">
        {routes}
        {/* <CompanyBlog /> */}
        {/* <Footer /> */}
    </main>)
}
