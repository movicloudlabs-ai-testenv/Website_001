// Morphing Card Component with Layout Animations
import { motion } from "framer-motion";
import { useState, ReactNode } from "react";
import { MOTION_CONSTANTS } from "@/lib/motion";

interface MorphingCardProps {
    title: string;
    description: string;
    image?: string;
    icon?: ReactNode;
    expandedContent?: ReactNode;
    className?: string;
}

export const MorphingCard = ({
    title,
    description,
    image,
    icon,
    expandedContent,
    className = ""
}: MorphingCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            onClick={() => setIsExpanded(!isExpanded)}
            className={`bg-white rounded-2xl overflow-hidden cursor-pointer border border-gray-200 ${className}`}
            whileHover={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                y: -4
            }}
            transition={{
                layout: {
                    duration: MOTION_CONSTANTS.duration.slow,
                    ease: MOTION_CONSTANTS.ease.smooth
                }
            }}
        >
            {image && (
                <motion.div layout="position" className="relative overflow-hidden">
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full object-cover"
                        style={{ height: isExpanded ? 300 : 200 }}
                        transition={{ duration: MOTION_CONSTANTS.duration.slow }}
                    />
                </motion.div>
            )}

            <motion.div layout="position" className="p-6">
                {icon && (
                    <motion.div layout="position" className="mb-4">
                        {icon}
                    </motion.div>
                )}

                <motion.h3 layout="position" className="text-2xl font-bold mb-2">
                    {title}
                </motion.h3>

                <motion.p
                    layout="position"
                    initial={false}
                    animate={{ opacity: isExpanded ? 1 : 0.7 }}
                    className="text-muted-foreground"
                >
                    {description}
                </motion.p>

                {isExpanded && expandedContent && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4"
                    >
                        {expandedContent}
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
};
