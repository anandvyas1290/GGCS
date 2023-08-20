import React from "react";
import Navbar from "./container/Navbar";
import CompanyBlog from "./container/CompanyBlog";
import Footer from "./container/Footer";
import Awards from "./container/Awards";
import Contact from "./container/Contact";

const MainApp = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Contact />
            <CompanyBlog />
            <Awards />
            <Footer />
        </>
    )
};

export default MainApp;
