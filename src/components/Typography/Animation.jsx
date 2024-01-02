import React from "react";
import { motion } from "framer-motion";

export function H1Animate({ className, children }) {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.025,
                ease: "linear",
            },
        }),
    };
    return (
        <motion.h1
            className={`text-[45px] font-bold ${className}`}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
            // custom={index}
        >
            {children}
        </motion.h1>
    );
}
export function TextAnimate({ className, children }) {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            x: 100,
        },
        animate: (index) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.025,
                ease: "linear",
            },
        }),
    };
    return (
        <motion.p
            className={`!text-2xl font-neuton font-semibold [letter-spacing:-0.3px] text-transparent bg-gradient-to-r from-[#501e9c] via-[#A44CEE] to-[#FF847F] bg-clip-text ${className} `}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
            // custom={index}
        >
            {children}
        </motion.p>
    );
}

export function Desc({ className, children }) {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            x: 100,
        },
        animate: (index) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.025,
                ease: "linear",
            },
        }),
    };
    return (
        <motion.p
            className={`text-[20px] font-semibold [letter-spacing:-0.3px] text-grey2 ${className} `}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
            // custom={index}
        >
            {children}
        </motion.p>
    );
}
