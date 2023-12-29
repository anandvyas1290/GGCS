import React, { useEffect } from "react";
import Hero from "./Hero";
import HireUsForm from "./HireUsForm";

export default function HireUs() {
    // const
    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Hero />
            <HireUsForm />
        </main>
    );
}
