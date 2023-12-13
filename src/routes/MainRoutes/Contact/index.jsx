import React, { useEffect } from "react";



import ContactUs from "../../../components/Layout/ContactUs";

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <ContactUs />
    );
}

export default Contact;
