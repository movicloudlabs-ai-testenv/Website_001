// Magnetic Button Component - Apple-style interaction
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { MOTION_CONSTANTS } from "@/lib/motion";

interface MagneticButtonProps {
    children: React.ReactNode;
    strength?: number;
    className?: string;
    onClick?: () => void;
}

export const MagneticButton = ({
    children,
    strength = 0.3,
    className = "",
    onClick
}: MagneticButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, MOTION_CONSTANTS.spring.medium);
    const springY = useSpring(y, MOTION_CONSTANTS.spring.medium);

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = (e.clientX - centerX) * strength;
        const distanceY = (e.clientY - centerY) * strength;

        x.set(distanceX);
        y.set(distanceY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{ x: springX, y: springY }}
            whileTap={{ scale: 0.97 }}
            className={`relative overflow-hidden ${className}`}
        >
            {/* Shimmer effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};
