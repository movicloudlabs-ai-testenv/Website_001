// Enterprise Motion Design System - Core Constants
// Based on Material Design and Apple Human Interface Guidelines

export const MOTION_CONSTANTS = {
    // Durations (in seconds)
    duration: {
        instant: 0.1,
        fast: 0.2,
        normal: 0.3,
        slow: 0.5,
        slower: 0.7,
    },

    // Easing curves - Bezier values
    ease: {
        // Default for most interactions
        standard: [0.4, 0.0, 0.2, 1] as const,

        // Entering elements
        decelerate: [0.0, 0.0, 0.2, 1] as const,

        // Exiting elements
        accelerate: [0.4, 0.0, 1, 1] as const,

        // Smooth, natural motion
        smooth: [0.4, 0.0, 0.6, 1] as const,

        // Sharp, precise
        sharp: [0.4, 0.0, 0.6, 1] as const,
    },

    // Spring physics configurations
    spring: {
        // Snappy, responsive
        tight: { stiffness: 400, damping: 30 },

        // Balanced
        medium: { stiffness: 300, damping: 25 },

        // Smooth, gentle
        loose: { stiffness: 200, damping: 20 },

        // Very bouncy
        bouncy: { stiffness: 500, damping: 15 },
    },
} as const;
