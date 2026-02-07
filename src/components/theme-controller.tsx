"use client";

import { useTheme } from "./theme-context";
import React from "react";
import Switch from "./switch";
import { motion } from "framer-motion";

export default function ThemeSwitch() {
    const { toggleTheme } = useTheme();
    
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-5 right-5 z-[999]"
        >
            <Switch setActiveButton={toggleTheme} />
        </motion.div>
    );
}