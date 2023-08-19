import React from "react";

export default function PrimaryBtn({
    children,
    size,
    bgColor,
    font,
    className,
}) {
    return (
        <button
            className={`flex align-middle justify-center ${size} ${font} ${bgColor} hover:bg-opacity-95 transition-all duration-300 ${className}`}
        >
            {children}
        </button>
    );
}
