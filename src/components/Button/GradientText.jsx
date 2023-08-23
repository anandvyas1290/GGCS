import React from 'react'

function GradientText({ children, className }) {
    return (
        <p className={`text-lg font-semibold text-transparent bg-gradient-to-r from-[#501e9c] via-[#A44CEE] to-[#FF847F] bg-clip-text ${className}`} >
            {children}
        </p>
    )
}

export default GradientText