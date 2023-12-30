import React from "react";

export default function RadientBtn({ children, onClick }) {
    return (
        <div className="group relative">
            <button
                className="relative px-8 p-3 rounded-xl text-lg font-bold bg-clip-padding border-4 z-10 border-white/30 text-black bg-white"
                onClick={onClick}
            >
                {children}
            </button>
            <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden blur-lg transition-transform duration-500 will-change-transform group-hover:scale-110">
                <div className="aspect-square w-full scale-110">
                    <div className="h-full w-full bg-gradient-to-tr from-amber-600 to-teal-600 group-hover:animate-spin" />
                </div>
            </div>
        </div>
    );
}
