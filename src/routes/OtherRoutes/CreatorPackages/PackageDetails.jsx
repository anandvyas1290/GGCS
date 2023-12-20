import React from "react";

import { useLocation } from "react-router-dom";

import { packages } from "../dummyData";

export default function PackageDetails() {
    let location = useLocation();
    let routeData = location?.state?.category;
    return <div className="max-w-screen-xl mx-auto p-10 bg-red-200"></div>;
}
