import React from 'react';
import { motion } from 'framer-motion';

interface StampBadgeProps {
    text?: string;
    className?: string;
}

const StampBadge = ({ text, className = "text-teal-800" }: StampBadgeProps) => {
    return (
        <div className="relative group">
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
                className="relative w-52 h-52 flex items-center justify-center animate-spin-rotate"
            >
                <img
                    src="/Stamp.webp"
                    alt="Official Stamp"
                    className="w-full h-full object-contain drop-shadow-md"
                />

                {text && (
                    <div className="absolute inset-x-0 top-[55%] flex items-center justify-center pointer-events-none">
                        <span className={`font-bold text-lg tracking-widest uppercase opacity-90 font-heading drop-shadow-sm transform rotate-[-12deg] ${className}`}>
                            {text}
                        </span>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default StampBadge;
