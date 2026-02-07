"use client";

import React, { useState } from "react";
import { Link } from "@/lib/type";
import clsx from "clsx";
import Nextlink from "next/link";
import Hamburger from "hamburger-react";
import { useActiveSectionContext } from "@/container/active-section";
import { AnimatePresence, motion } from "framer-motion";

type HamburgMenuProps = { links: Link[] };

const HamburgerMenu: React.FC<HamburgMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const menuTrigger = {
    visible: { scale: 1, opacity: 1, y: 0 },
    tap: { scale: 0.9 },
    hover: { scale: 1.1 },
  };

  const menuList = {
    start: { scale: 0.9, opacity: 0, y: -10 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        staggerChildren: 0.1
      }
    },
    exit: { scale: 0.9, opacity: 0, y: -10 }
  };

  return (
    <div className="md:hidden top-5 right-5 fixed w-64 z-[999] flex flex-col items-end gap-3">
      {/* PREMIUM TRIGGER BUTTON */}
      <motion.button
        variants={menuTrigger}
        initial="visible"
        whileTap="tap"
        whileHover="hover"
        className="group bg-white/70 dark:bg-gray-950/70 w-[3.5rem] h-[3.5rem] backdrop-blur-[1rem] border border-white dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] rounded-2xl flex items-center justify-center transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Hamburger toggled={isOpen} size={22} color={isOpen ? "#9333ea" : "#6b7280"} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuList}
            initial="start"
            animate="visible"
            exit="exit"
            className="w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-[1.5rem] border border-white dark:border-white/10 shadow-2xl rounded-[2rem] flex flex-col items-center justify-center p-2 overflow-hidden"
          >
            {links.map((link, index) => (
              <motion.div
                className="w-full"
                key={link.hash}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <Nextlink
                  className={clsx(
                    "flex w-full items-center justify-center px-4 py-4 text-sm font-bold uppercase tracking-widest transition-all relative group",
                    activeSection === link.hash 
                      ? "text-purple-600 dark:text-purple-400" 
                      : "text-gray-500 hover:text-purple-600 dark:hover:text-purple-400"
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.hash);
                    setTimeOfLastClick(Date.now());
                    setIsOpen(false); // Auto-close on click
                  }}
                >
                  {link.nameEng}
                  
                  {/* ACTIVE INDICATOR DOT */}
                  {activeSection === link.hash && (
                    <motion.div 
                      layoutId="activeSection"
                      className="absolute left-6 w-1.5 h-1.5 bg-purple-500 rounded-full"
                    />
                  )}
                </Nextlink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;