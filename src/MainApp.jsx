import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./container/Navbar";
import Routes from "./routes";

const MainApp = (props) => {
    return (
        <Router>
            <Navbar />
            <Routes {...props} />
        </Router>
    );
};

export default MainApp;
