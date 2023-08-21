import React from "react";

export default function PrimaryBtn({ children, bgColor, className }) {
    return (
        <button
            className={`px-11 py-2.5 flex align-middle justify-center text-base font-semibold text-white1 font-jakarta ${bgColor} border-2 rounded-full hover:bg-opacity-95 transition-all duration-300 ${className}`}
        >
            {children}
        </button>
    );
}
