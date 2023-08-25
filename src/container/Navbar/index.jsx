import React from "react";
import StatusBar from "./StatusBar";
import NavbarContent from "./NavBarContent";

import { useLocation } from "react-router-dom";

const Navbar = (props) => {
    let location = useLocation();
    let fullNav = location.pathname !== "/" ? true : false;

    console.log(fullNav);
    return (
        <div className="max-w-screen-xl relative mx-auto px-8 z-50">
            {fullNav ? null : <StatusBar {...props} />}
            <NavbarContent {...props} fullNav={fullNav} />
        </div>
    );
};

export default Navbar;
