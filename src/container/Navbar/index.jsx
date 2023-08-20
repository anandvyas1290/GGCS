import React from "react";
import StatusBar from "./StatusBar";
import NavbarContent from "./NavBarContent";

const Navbar = (props) => {
    return (
        <div className="max-w-screen-xl relative  mx-auto px-8 z-50">
            <StatusBar />
            <NavbarContent />
        </div>
    );
};

export default Navbar;
