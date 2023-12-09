import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./container/Navbar";
import Routes from "./routes";
import Footer from "./container/Footer";

const MainApp = (props) => {
    return (
        <Router>
            <div className="min-h-[100vh] flex flex-col font-roboto">
                <div className="flex-1">
                    <Navbar {...props} />
                    <Routes {...props} />
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default MainApp;
