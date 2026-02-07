"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "./theme-context";

interface SwitchProps {
    setActiveButton: () => void;
}

export default function Switch({ setActiveButton }: SwitchProps) {
    const [isHovered, setIsHovered] = useState(false);
    const { theme } = useTheme();

    const containerVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.1, rotate: 5 },
        tap: { scale: 0.9, rotate: -5 }
    };

    const tooltipVariants = {
        hidden: { opacity: 0, y: 15, x: "-50%", scale: 0.5 },
        visible: { 
            opacity: 1, 
            y: -10, 
            x: "-50%", 
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        },
        exit: { opacity: 0, y: 10, scale: 0.5, transition: { duration: 0.15 } }
    };

    return (
        <div className="relative group">
            {/* 1. Floating Preview Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={tooltipVariants}
                        className="absolute -top-14 left-1/2 z-50 pointer-events-none"
                    >
                        <div className="relative flex items-center justify-center px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-500/30">
                            <span className="text-[10px] font-bold uppercase tracking-widest mr-2 dark:text-white">
                                Switch to {theme === "light" ? "Dark" : "Light"}
                            </span>
                            {theme === "light" ? 
                                <Moon size={14} className="text-purple-600 animate-pulse" /> : 
                                <Sun size={14} className="text-yellow-500 animate-spin-slow" />
                            }
                            {/* Little Arrow */}
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/80 dark:bg-gray-900/80 border-r border-b border-purple-500/30 rotate-45" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 2. Main Toggle Button */}
            <motion.button
                onClick={setActiveButton}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                variants={containerVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className={`
                    relative w-14 h-14 rounded-2xl flex items-center justify-center 
                    transition-all duration-500 shadow-xl overflow-hidden
                    ${theme === "light" 
                        ? "bg-white border-2 border-gray-200 text-gray-900 shadow-purple-500/10" 
                        : "bg-gray-950 border-2 border-white/10 text-white shadow-purple-500/20"
                    }
                `}
            >
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 opacity-20 blur-xl transition-colors duration-500 ${theme === 'light' ? 'bg-purple-400' : 'bg-blue-600'}`} />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={theme}
                        initial={{ y: 20, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: -20, opacity: 0, rotate: 90 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                        {theme === "light" ? (
                            <div className="relative">
                                <Sun className="w-6 h-6 text-orange-500" strokeWidth={2.5} />
                                <motion.div 
                                    animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -top-1 -right-1"
                                >
                                    <Sparkles size={10} className="text-orange-300" />
                                </motion.div>
                            </div>
                        ) : (
                            <div className="relative">
                                <Moon className="w-6 h-6 text-purple-400" strokeWidth={2.5} />
                                <motion.div 
                                    animate={{ x: [-2, 2, -2] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute -top-1 -right-1 opacity-50"
                                >
                                    <div className="w-1 h-1 bg-white rounded-full blur-[1px]" />
                                </motion.div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </motion.button>
        </div>
    );
}