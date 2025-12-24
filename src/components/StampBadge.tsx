import React from 'react';
import { motion } from 'framer-motion';

interface StampBadgeProps {
    text?: string;
    className?: string;
}

const StampBadge = ({ text, className = "text-teal-800" }: StampBadgeProps) => {
    return (
        <div className="flex flex-col items-center group">
            {/* Stamp */}
            <motion.div
                initial={{ scale: 2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    mass: 1,
                    delay: 0.2
                }}
                className="w-52 flex items-center justify-center animate-spin-rotate"
            >
                <img
                    src="/Stamp.webp"
                    alt="Official Stamp"
                    className="w-full h-full object-contain drop-shadow-md"
                />
            </motion.div>

            {/* Text BELOW the stamp */}
            {text && (
                <span
                    className={`mt-2 font-bold text-lg tracking-widest uppercase opacity-90 font-heading drop-shadow-sm ${className}`}
                >
                    {text}
                </span>
            )}
        </div>
    );
};

export default StampBadge;
