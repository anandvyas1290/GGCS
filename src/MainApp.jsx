import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./container/Navbar";
import Routes from "./routes";
import Contact from "./container/Contact";
import CompanyBlog from "./container/CompanyBlog";
import Footer from "./container/Footer";

const MainApp = (props) => {
    return (
        <Router>
            <Navbar />
            <Routes {...props} />
            <Contact />
            <CompanyBlog />
            <Awards />
            <Footer />
        </Router>
    );
};

export default MainApp;
