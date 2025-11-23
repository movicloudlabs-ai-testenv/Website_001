// Animated Counter Component
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
    value: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}

export const AnimatedCounter = ({
    value,
    duration = 2,
    suffix = "",
    prefix = "",
    className = ""
}: AnimatedCounterProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const motionValue = useSpring(0, {
        stiffness: 50,
        damping: 20,
    });

    const rounded = useTransform(motionValue, (latest) =>
        Math.round(latest).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    return (
        <span ref={ref} className={`tabular-nums ${className}`}>
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};
