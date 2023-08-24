import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./container/Navbar";
import Routes from "./routes";
import Footer from "./container/Footer";

const MainApp = (props) => {
    return (
        <Router>
            <Navbar />
            <Routes {...props} />
            <Footer />
        </Router>
    );
};

export default MainApp;
