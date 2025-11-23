// Enterprise Animation Variants Library
import { Variants } from "framer-motion";
import { MOTION_CONSTANTS } from "./motion";

export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: MOTION_CONSTANTS.duration.normal,
            ease: MOTION_CONSTANTS.ease.decelerate,
        }
    },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: MOTION_CONSTANTS.duration.normal,
            ease: MOTION_CONSTANTS.ease.standard,
        }
    },
};

export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: MOTION_CONSTANTS.duration.normal,
            ease: MOTION_CONSTANTS.ease.decelerate,
        }
    },
};

export const slideInFromLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: MOTION_CONSTANTS.duration.slow,
            ease: MOTION_CONSTANTS.ease.decelerate,
        }
    },
};

export const slideInFromRight: Variants = {
    hidden: {
        opacity: 0,
        x: 40,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: MOTION_CONSTANTS.duration.slow,
            ease: MOTION_CONSTANTS.ease.decelerate,
        }
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        }
    },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: MOTION_CONSTANTS.duration.normal,
            ease: MOTION_CONSTANTS.ease.decelerate,
        }
    },
};

export const pageTransition: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: MOTION_CONSTANTS.duration.normal,
            ease: MOTION_CONSTANTS.ease.standard,
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: MOTION_CONSTANTS.duration.fast,
            ease: MOTION_CONSTANTS.ease.accelerate,
        }
    },
};
