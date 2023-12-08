import React from "react";
import StatusBar from "./StatusBar";
import NavbarContent from "./NavbarContent";

import { useLocation } from "react-router-dom";

const Navbar = (props) => {
    let location = useLocation();
    let fullNav = location.pathname !== "/" ? true : false;
    return (
        <div
            className={`${
                fullNav ? "" : "max-w-screen-xl mx-auto px-3 sm:px-8 z-50"
            } relative !font-sans`}
        >
            {fullNav ? null : <StatusBar {...props} />}
            <NavbarContent {...props} fullNav={fullNav} />
        </div>
    );
};

export default Navbar;
