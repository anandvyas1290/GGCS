import React from "react";
import { motion } from "framer-motion";

export function H1Animate({ className, children }) {
    let res = children?.split(" ");

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
            className={`flex flex-wrap gap-4 items-center justify-center md:!text-5xl text-4xl leading-7 font-bold mb-2.5 ${className}`}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
        // custom={index}
        >
            {/* {children} */}
            {res?.map((item, i) => (
                <p className={`${i < res?.length / 2 ? "" : "text-[#4ade80]"}`}>
                    {item}
                </p>
            ))}
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
            className={`!text-2xl font-neutn font-semibold [letter-spacing:-0.3px] text-transparent bg-gradient-to-r fro-g1 va-g2 t-g3 bg-clip-text !bg-[#7d7c83] ${className} `}
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
            className={`text-[19px] font-semibold [letter-spacing:-0.3px] text-grey2 ${className}`}
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
