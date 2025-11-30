import React from 'react';
import { motion } from 'framer-motion';

const StampBadge = () => {
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
                    src="/Stamp.png"
                    alt="Official Stamp"
                    className="w-full h-full object-contain drop-shadow-md"
                />
            </motion.div>
        </div>
    );
};

export default StampBadge;
