// Glassmorphism Modal Component
import { motion, AnimatePresence } from "framer-motion";
import { MOTION_CONSTANTS } from "@/lib/motion";
import { ReactNode } from "react";
import { X } from "lucide-react";

interface GlassModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
}

export const GlassModal = ({
    isOpen,
    onClose,
    children,
    title
}: GlassModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{
                                duration: MOTION_CONSTANTS.duration.normal,
                                ease: MOTION_CONSTANTS.ease.standard,
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl max-w-2xl w-full border border-white/20 overflow-hidden"
                        >
                            {/* Header */}
                            {title && (
                                <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
                                    <h2 className="text-2xl font-bold">{title}</h2>
                                    <button
                                        onClick={onClose}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            )}

                            {/* Content */}
                            <div className="p-8">
                                {children}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
