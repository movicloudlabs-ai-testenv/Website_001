// Parallax Section Component
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxSectionProps {
    children: ReactNode;
    speed?: number;
    className?: string;
}

export const ParallaxSection = ({
    children,
    speed = 0.5,
    className = ""
}: ParallaxSectionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y, opacity }}>
                {children}
            </motion.div>
        </div>
    );
};
