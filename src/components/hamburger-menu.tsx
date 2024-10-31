"use client";

import React, { useState } from "react";
import { Link } from "@/lib/type";
import clsx from "clsx";
import Nextlink from "next/link";
import Hamburger from "hamburger-react";
import { useActiveSectionContext } from "@/container/active-section";

//Animation
import { AnimatePresence, motion } from "framer-motion";
import { link } from "fs";

type HamburgMenuProps = { links: Link[] };

const HamburgerMenu: React.FC<HamburgMenuProps> = ({ links }) => {

const [isOpen, setIsOpen] = useState(false);

const { activeSection, setActiveSection, setTimeOfLastCLick } = useActiveSectionContext();

const menuTrigger = {
    visible: { scale:1, opacity:0.7, y:0 },
    tap: { scale:0.85 },
    hover: { scale: 1.2 },
}

const menuList = {
    start:{scale: 0.6, opacity: 0.7, y:-20},
    visible:{scale: 1, opacity: 0.9, y:0},
} 

    return (
        <div className="md:hidden top-5 right-5 fixed w-60 z-[999] flex 
        flex-col items-end gap-2">
            <motion.button
            variants={menuTrigger}
            initial="visible"
            whileTap="tap"
            whileHover="hover"
            className="bg-white w-[3rem] h-[3rem] drop-shadow backdrop-blur-[0.5rem] border border-slate-400
            dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center dark:bg-gray-950"
            >
                <Hamburger toggled={isOpen} toggle={setIsOpen} size={20}/>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                    variants={menuList}
                    initial="start"
                    animate="visible"
                    className="w-full bg-white drop-shadow border border-slate-400
                dark:border-white border-opacity-60 shadow-2xl rounded-2xl flex flex-col
                 items-center justify-center dark:bg-gray-950 p-1">
                        {links.map((link, index) => (
                            <motion.div
                            className="w-full"
                            key={link.hash}
                            initial={{y: -100, opacity:0}}
                            animate={{y:0, opacity:1}}
                            >
                                <Nextlink
                                className={clsx(
                                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 cursor-pointer",
                                    {
                                        "text-gray-950 bg-slate-200 dark:text-gray-200 dark:bg-gray-700 rounded":
                                        activeSection === link.hash,
                                        "rounded-t-xl round": index === 0,
                                        "rounded-b-xl round": index === links.length -1
                                    }
                                )}
                                href= {link.hash}
                                onClick={()=> {
                                    setActiveSection(link.hash);
                                    setTimeOfLastCLick(Date.now());
                                }}
                                >
                                    {link.nameEng}
                                </Nextlink>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default HamburgerMenu;

// export default function Hamburger() {
//     return (
//         <div>
//             Hamburger
//         </div>
//     )
// }