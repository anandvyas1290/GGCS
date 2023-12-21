import React from "react";

import ppt from "../assets/PDF/GGCS-PPT.pdf";
import uposGTP from "../assets/animation/uposGTP.gif";

import { useRoutes, useNavigate } from "react-router-dom";

import MainRoutes from "./MainRoutes";
import FooterRoutes from "./FooterRoutes";
import OtherRoutes from "./OtherRoutes";

export default function Routes(props) {
    const navigate = useNavigate();
    const routes = useRoutes([
        {
            path: "/*",
            element: [
                <MainRoutes {...props} />,
                <FooterRoutes {...props} />,
                <OtherRoutes {...props} />,
            ],
        },
    ]);
    return (
        <main className="">
            <div className="fixed -left-[60px] top-1/2 -rotate-90 z-50 imgBorder px-4 py-3 bg-gradient-to-r from-g1 to-g2 border rounded-b-xl  text-white cursor-pointer">
                <a
                    download
                    onClick={() => {
                        window.open(ppt, "_blank", "fullscreen=yes");
                    }}
                    className="font-bold block py-2 pl-3 pr-4 !text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                >
                    DOWNLOAD PPT
                </a>
            </div>
            <div
                className="fixed z-50 overflow-hidden bg-gray-200 border rounded-full cursor-pointer h-14 bottom-28 right-14"
                onClick={() => navigate("/upos-details")}
            >
                <video className="w-full h-full" autoPlay muted loop>
                    <source src={uposGTP} type="video/mp4" />
                </video>
            </div>
            {routes}
        </main>
    );
}
