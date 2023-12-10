import React from 'react'
import { motion } from "framer-motion"

export function H1Animate({ className, children }) {
    // animate txt
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
        <motion.h1 className={`${className}`}
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
    )
}
export function TextAnimate({ className, children }) {
    // animate txt
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
        <motion.p className={`${className}`}
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
    )
}

