import React from "react";
import { useRoutes } from "react-router-dom";

import HireUs from "./HireUs";
import Disclaimer from "./Disclaimer";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndCondition from "./TermsAndCondition";
import Career from "./Career";

export default function footerRoutes(props) {
    let routes = useRoutes([
        {
            path: "/privacy-policy",
            element: <PrivacyPolicy {...props} />,
        },
        {
            path: "/terms-conditions",
            element: <TermsAndCondition {...props} />,
        },
        { path: "/disclaimer", element: <Disclaimer {...props} /> },
        { path: "/hire-us", element: <HireUs {...props} /> },
        { path: "/career", element: <Career {...props} /> },
    ]);

    return routes;
}
