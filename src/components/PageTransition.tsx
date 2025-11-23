// Page Transition Wrapper
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { pageTransition } from "@/lib/variants";
import { ReactNode } from "react";

interface PageTransitionProps {
    children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};
