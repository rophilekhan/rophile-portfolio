"use client";

import React from "react";
import NextLink from "next/link";
import clsx from "clsx";
import { Link } from "@/lib/type";
import { useActiveSectionContext } from "@/container/active-section";
import { motion } from "framer-motion";

export default function Header({ links }: { links: Link[] }) {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <motion.header 
            className="hidden md:flex items-center justify-center fixed z-[999] w-full mt-8"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
        >
            <motion.div 
                className="flex p-1.5 rounded-full border border-white/20 bg-white/60 dark:bg-gray-950/60 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all"
            >
                <ul className="flex items-center justify-center gap-1 text-[0.75rem] font-black uppercase tracking-[0.2em]">
                    {links?.map((link) => (
                        <li className="relative flex items-center" key={link.hash}>
                            <NextLink
                                className={clsx(
                                    "px-5 py-2.5 transition-all duration-500 rounded-full hover:text-purple-600 dark:hover:text-purple-400",
                                    activeSection === link.hash ? "text-purple-600 dark:text-purple-400" : "text-gray-500"
                                )}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.hash);
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                {link.nameEng}
                                {link.hash === activeSection && (
                                    <motion.span
                                        layoutId="activeSection"
                                        className="absolute inset-0 bg-purple-500/10 dark:bg-purple-400/10 rounded-full -z-10 border border-purple-500/20"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </NextLink>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.header>
    );
}