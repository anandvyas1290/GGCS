import React from "react";
import StatusBar from "./StatusBar";
import NavbarContent from "./NavbarContent";

import { useLocation } from "react-router-dom";

const Navbar = (props) => {
    let location = useLocation();
    let fullNav = location.pathname !== "/" ? true : false;
    return (
        <header
            className={`${
                fullNav ? "" : "max-w-screen-xl mx-auto px-3 sm:px-8 z-50"
            } absolute top-0 right-0 left-0 !font-roboto`}
        >
            {fullNav ? null : <StatusBar {...props} />}
            <NavbarContent {...props} fullNav={fullNav} />
        </header>
    );
};

export default Navbar;
