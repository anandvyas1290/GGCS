import React from "react";
import messenger from "../assets/animation/message-bubble.gif";
import uposGTP from "../assets/animation/uposGTP.gif";
import { MessageOutlined } from "@ant-design/icons";

import { useRoutes } from "react-router-dom";

import MainRoutes from "./MainRoutes";
import FooterRoutes from "./FooterRoutes";

export default function Routes(props) {
    const routes = useRoutes([
        { path: "/*", element: <MainRoutes {...props} /> },
        { path: "/service/*", element: <FooterRoutes {...props} /> },
    ]);
    return (
        <main className="">
            <div className="fixed -left-[60px] top-1/2 -rotate-90 z-50 imgBorder px-4 py-3 bg-gradient-to-r from-g1 to-g2 border rounded-b-xl  text-white cursor-pointer">
                <p className="font-bold">DOWNLOAD PPT</p>
            </div>
            <div className="fixed h-14  overflow-hidden z-50 bg-gray-200 border rounded-full bottom-28 right-14">
                <video className="h-full w-full" autoPlay muted loop>
                    <source src={uposGTP} type="video/mp4" />
                </video>
            </div>
            <div className="flex justify-center items-center fixed bottom-16 right-16 z-50 !w-10 h-10 bg-white shadow-xl border rounded-full ">
                <MessageOutlined className="!text-xl " />
                {/* <img src={messenger} alt="" className="!w-20 h-20 " /> */}
            </div>
            {/* </div> */}
            {routes}

            {/* <div className="sticky right-0 z-50 px-3 py-2 -rotate-90 bg-gray-200 border rounded top-1/2 w-fit">
                <p className="font-bold">DOWNLOAD PPT</p>
            </div> */}
            <div className="">
                <img />
            </div>
        </main>
    );
}
