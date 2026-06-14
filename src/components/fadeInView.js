import { motion, useInView } from "framer-motion";
import * as React from "react";
import { useRef } from "react";

export default function FadeInView({ children, delay = 0 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}
