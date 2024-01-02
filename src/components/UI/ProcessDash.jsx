import React from "react";

export const Line1 = (props) => (
    <svg
        className="odd line-dash-path !animate-dashShape"
        width={50}
        height={120}
        viewBox="0 0 38 122"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0.279297 1C41.9846 20.0005 55.1988 87.9525 2.74393 121.294"
            stroke="#A7ACB3"
            strokeDasharray="5 5"
        />
    </svg>
);

export const Line2 = (props) => (
    <svg
        className="eve line-dash-path !animate-dashShape"
        width={50}
        height={120}
        viewBox="0 0 38 122"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M41.3076 1.22192C-1.33493 18.0137 -18.0874 85.181 32.5507 121.222"
            stroke="#A7ACB3"
            strokeDasharray="5 5"
        />
    </svg>
);

// hos
export const DashedLine = (props) => (
    <svg
        className="line-dash-path !animate-dashShape"
        width="112"
        height="15"
        viewBox="0 0 112 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M1 8.56464C18.4695 1.84561 64.9267 -6.52437 111 13.7479"
            stroke="#A6A8B0"
            strokeDasharray="4 5"
        ></path>
    </svg>
);
