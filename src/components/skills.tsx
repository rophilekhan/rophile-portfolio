"use client"

import React from 'react';
import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/useinView"; 
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 30,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.04 * index,
            ease: "easeOut"
        },
    }),
}

export default function Skills() {
    const { ref } = useSectionInView("#skills");

    // Define core branding skills for special styling
    const coreSkills = ["React Native", "Next.js", "MERN Stack", "SaaS Architecture", "Mobile Development", "Web Systems", "Business Logic"];

    return (
        <section 
            ref={ref}
            id="skills"
            className="mb-28 max-w-[64rem] scroll-mt-28 text-center sm:mb-40 mx-auto px-6 relative"
        >
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none flex items-center justify-center">
                <h1 className="text-[15vw] font-black uppercase tracking-tighter">Expertise</h1>
            </div>

            <SectionHeading>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl sm:text-6xl font-black mb-4 tracking-tighter uppercase italic">
                        Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">Arsenal</span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 max-w-[30rem] mx-auto text-sm sm:text-base leading-relaxed">
                        A curated collection of technologies I use to build scalable digital ecosystems at <span className="text-purple-600 font-bold"></span>.
                    </p>
                </motion.div>
            </SectionHeading>

            <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800 mt-16">
                {skillsData.map((skill, index) => {
                    const isCore = coreSkills.includes(skill);
                    
                    return (
                        <motion.li 
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            whileHover={{ 
                                scale: 1.08, 
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            viewport={{ once: true }}
                            custom={index}
                            key={index}
                            className={`
                                relative group px-6 py-3 rounded-2xl cursor-default transition-all duration-300 overflow-hidden
                                ${isCore 
                                    ? "bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600 text-white shadow-[0_10px_20px_-5px_rgba(168,85,247,0.4)] font-bold border-none" 
                                    : "bg-white border border-gray-200 dark:bg-white/5 dark:text-white/80 dark:border-white/10 hover:shadow-lg dark:hover:bg-white/10"
                                }
                            `}
                        >
                            {/* Animated Background Shine for Core Skills */}
                            {isCore && (
                                <motion.div 
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                />
                            )}
                            
                            <span className="relative z-10 flex items-center gap-2">
                                {isCore && <span className="text-yellow-300 animate-pulse">⚡</span>}
                                {skill}
                            </span>
                        </motion.li>
                    );
                })}
            </ul>

            {/* Advanced Categorization Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
                {[
                    { 
                        title: "Mobile Mastery", 
                        desc: "High-performance React Native apps with 60FPS fluidity.", 
                        color: "border-purple-500/30",
                        tag: "iOS & Android" 
                    },
                    { 
                        title: "Frontend Vision", 
                        desc: "Scalable SaaS dashboards built with Next.js & Tailwind.", 
                        color: "border-pink-500/30",
                        tag: "Web Systems" 
                    },
                    { 
                        title: "Architecture", 
                        desc: "Robust full-stack logic and multi-tenant SaaS ecosystems.", 
                        color: "border-orange-500/30",
                        tag: "Business Logic" 
                    }
                ].map((category, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 * i }}
                        className={`p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border-2 ${category.color} text-left group hover:bg-gradient-to-br hover:from-transparent hover:to-purple-500/5 transition-all duration-500`}
                    >
                        <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em] mb-3 block">{category.tag}</span>
                        <h4 className="text-xl font-black dark:text-white mb-2 group-hover:text-purple-500 transition-colors">{category.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{category.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}