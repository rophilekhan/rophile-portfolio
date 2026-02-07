"use client"

import React, { useState } from 'react';
import { projectsData, categoriesData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project-card";
import { useSectionInView } from "@/lib/useinView";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaRocket } from "react-icons/fa";

export default function Projects() {
    const { ref } = useSectionInView("#projects", 0.1);
    const [activeCategory, setActiveCategory] = useState("All");
    const [displayLimit, setDisplayLimit] = useState(4);

    const filteredProjects = projectsData.filter((project) =>
        activeCategory === "All" ? true : project.category === activeCategory
    );

    const handleCategoryChange = (cat: string) => {
        setActiveCategory(cat);
        setDisplayLimit(4); 
    };

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28 px-6 relative">
            {/* Background Watermark for Depth */}
           <div className="absolute top-10 left-1/2 -translate-x-1/2 -z-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none overflow-visible">
    <h1 className="text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-none">
        Portfolio
    </h1>
</div>

            <SectionHeading>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl sm:text-6xl font-black mb-4 tracking-tighter uppercase italic">
                        Recent <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">Innovation</span>
                    </h1>
                    <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-[32rem] mx-auto">
                        High-stakes digital infrastructure and SaaS solutions engineered at <span className="text-purple-600 font-bold">Codesphinx</span>.
                    </p>
                </motion.div>
            </SectionHeading>

            {/* Premium Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-[50rem] mx-auto">
                {categoriesData.map((category) => {
                    const count = projectsData.filter(p => category === "All" ? true : p.category === category).length;
                    
                    return (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`group relative px-6 py-2 rounded-2xl border transition-all duration-500 flex items-center gap-2
                            ${activeCategory === category 
                                ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 border-transparent shadow-2xl scale-105" 
                                : "bg-white/50 dark:bg-white/5 dark:text-white border-gray-200 dark:border-white/10 hover:border-purple-400 backdrop-blur-sm"
                            }`}
                        >
                            <span className="font-semibold tracking-wide">{category}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors
                                ${activeCategory === category 
                                    ? "bg-purple-500 text-white" 
                                    : "bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 group-hover:bg-purple-500/20 group-hover:text-purple-500"
                                }`}>
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Project Grid */}
            <motion.div 
                layout
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[75rem] mx-auto"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.slice(0, displayLimit).map((project, index) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <Project {...project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-20 bg-gray-50 dark:bg-white/5 rounded-[3rem] border border-dashed border-gray-200 dark:border-white/10">
                    <FaRocket className="mx-auto text-4xl text-purple-500/30 mb-4" />
                    <p className="text-gray-500 dark:text-gray-400 italic font-medium">
                        Upcoming Codesphix projects are currently under development.
                    </p>
                </div>
            )}

            {/* Advanced "Load More" */}
            {filteredProjects.length > displayLimit && (
                <div className="flex justify-center mt-20">
                    <button
                        onClick={() => setDisplayLimit(prev => prev + 4)}
                        className="group relative flex items-center gap-3 bg-white dark:bg-gray-950 border-2 border-purple-500 text-purple-500 dark:text-purple-400 px-10 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-purple-500 hover:text-white transition-all duration-500 shadow-xl"
                    >
                        Load More Records
                        <FaChevronDown className="group-hover:translate-y-1 transition-transform" />
                    </button>
                </div>
            )}
        </section>
    );
}