import React from "react";
import MinCriteria from "./MinCriteria";
import AdmissionProcess from "./AdmissionProcess";
import OurAlumni from "./OurAlumni";
import FAQ from "./FAQ";

export default function CoursesDetails(props) {
    return <>
        <MinCriteria />
        <AdmissionProcess />
        <OurAlumni />
        <FAQ />
    </>;
}
