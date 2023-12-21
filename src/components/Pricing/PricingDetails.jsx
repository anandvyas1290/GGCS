import React from "react";
import UpdatingPage from "../Layout/UpdatingPage";
import BackNavigate from "../UI/BackNavigate";

export default function PricingDetails(props) {
    window.scrollTo(0, 0);
    return (
        <>
            <BackNavigate backLabel="Plan Details" backLink="/" />
            <UpdatingPage />
        </>
    );
}
