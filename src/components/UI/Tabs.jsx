import React from "react";
import { message } from "antd";

export default function Tabs({ options, currentTab, currentTabHandler }) {
    return (
        <div className="flex justify-center w-full !mb-5">
            <div className="flex items-center text-xl font-semibold border-2 border-gray-200 rounded-full overflow-hidden transition-all duration-150 ease-in-out">
                {options?.map((item) => (
                    <div
                        key={item?.id}
                        className={`!px-9 !py-3 w-fit h-full ${
                            currentTab === item?.value
                                ? "bg-gradient-to-r from-[#501E9C] via-[#A44CEE] to-[#FF847F] text-white ease-in-out"
                                : "text-black"
                        } ${
                            item?.disabled
                                ? "cursor-not-allowed opacity-60"
                                : "cursor-pointer"
                        } rounded-full`}
                        onClick={() =>
                            item?.disabled
                                ? message?.info("Coming Soon!!")
                                : currentTabHandler(item?.value)
                        }
                    >
                        <h4 className="">{item?.label}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
