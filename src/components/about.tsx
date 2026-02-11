"use client"

import React, { useState } from 'react';
import SectionHeading from './section-heading';
import Image from 'next/image';
import { useSectionInView } from '@/lib/useinView';
import { motion, AnimatePresence } from "framer-motion"; // useScroll, useTransform removed as unused
import { Fade } from 'react-awesome-reveal';
import { 
    FaMobileAlt, FaQuoteLeft, FaTimes, FaCogs, 
    FaChartLine, FaWindowMaximize, FaServer, FaCloud 
} from 'react-icons/fa';

export default function About() {
    const { ref } = useSectionInView("#about");
    const [activeDetail, setActiveDetail] = useState<number | null>(null);

    const focusDetails = [
        { 
            icon: <FaMobileAlt />, 
            text: "React Native Mastery", 
            details: "I specialize in high-performance mobile engineering, focusing on smooth 60FPS animations, bridge optimization, and memory management for premium iOS and Android apps."
        },
        { 
            icon: <FaCloud />, 
            text: "SaaS Innovation", 
            details: "At Codesphinx, I architect scalable SaaS platforms, ensuring multi-tenant security, subscription-based logic, and cloud integration for modern business needs."
        },
        { 
            icon: <FaWindowMaximize />, 
            text: "Modern Web Frontend", 
            details: "Building responsive, SEO-friendly web interfaces using Next.js and Tailwind CSS, focusing on pixel-perfect designs and intuitive user experiences."
        },
        { 
            icon: <FaServer />, 
            text: "Supporting Backend", 
            details: "While focusing on the client-side, I design robust RESTful APIs and database schemas using Node.js and MongoDB to power full-stack applications."
        },
    ];

    return (
        <motion.section 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
            ref={ref}
            className="w-full text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28 mx-auto px-6 relative overflow-visible"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none w-full flex justify-center overflow-visible">
            <h1 className="text-[12vw] sm:text-[10vw] font-black uppercase tracking-tighter whitespace-nowrap">
                About Me
            </h1>
          </div>

            <div className="container max-w-[75rem] mx-auto relative z-10">
                <Fade direction="up" delay={200} triggerOnce={true}>
                    <SectionHeading>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight">
                            KNOW <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-2 uppercase italic">WHO I AM</span>
                        </h1>
                    </SectionHeading>
                </Fade>

                <div className="grid lg:grid-cols-[1.3fr,1fr] gap-12 lg:gap-20 items-center mt-16 lg:mt-20">
                    <div className="text-left space-y-8">
                        <Fade direction="up" delay={400} cascade damping={0.15} triggerOnce={true}>
                            <div className="space-y-6">
                                <p className="text-2xl sm:text-3xl font-light leading-tight text-gray-900 dark:text-gray-100">
                                    I am <span className="font-bold text-purple-600 dark:text-purple-400">Rophile Ahmed Khan</span> &mdash; A Frontend Architect and SaaS Visionary.
                                </p>

                                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                    As the <span className="text-purple-600 font-bold italic">Founder & CEO of Codesphinx</span>, I lead the charge in building scalable mobile and web applications. My expertise lies in creating immersive <span className="text-purple-600 font-bold">SaaS solutions</span> using <span className="text-purple-600 font-bold">React Native</span> and high-end <span className="text-purple-600 font-bold">Frontend technologies</span>.
                                </p>
                            </div>

                            <div className="relative p-8 rounded-3xl bg-white/50 dark:bg-white/5 border border-purple-500/20 backdrop-blur-md shadow-2xl">
                                <FaQuoteLeft className="text-purple-500/20 text-5xl absolute top-6 left-6" />
                                <p className="text-lg sm:text-xl leading-relaxed text-gray-800 dark:text-gray-200 italic relative z-10 pl-10 font-medium">
                                    &ldquo;Architecture is the silent language of code. At Codesphinx, we build the digital future.&rdquo;
                                </p>
                            </div>

                            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-bold flex items-center gap-3 text-gray-900 dark:text-white">
                                        <FaCogs className="text-purple-500" /> Strategic Specialization
                                    </h3>
                                    <span className="text-[10px] uppercase tracking-widest text-gray-400 animate-pulse">Tap for details</span>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {focusDetails.map((item, i) => (
                                        <motion.div 
                                            key={i}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setActiveDetail(activeDetail === i ? null : i)}
                                            className={`p-4 rounded-2xl cursor-pointer border transition-all duration-300 flex items-center gap-4 ${activeDetail === i ? 'bg-purple-600 text-white border-purple-400 shadow-xl' : 'bg-white dark:bg-white/5 border-gray-100 dark:border-white/10 hover:border-purple-500/50'}`}
                                        >
                                            <span className={`text-2xl ${activeDetail === i ? 'text-white' : 'text-purple-500'}`}>
                                                {item.icon}
                                            </span>
                                            <span className="font-bold tracking-tight">{item.text}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <AnimatePresence>
                                    {activeDetail !== null && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="mt-6 p-6 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-3xl shadow-2xl relative"
                                        >
                                            <button onClick={() => setActiveDetail(null)} className="absolute top-4 right-4 text-white/70 hover:text-white">
                                                <FaTimes />
                                            </button>
                                            <p className="text-base leading-relaxed font-medium">
                                                {focusDetails[activeDetail].details}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </Fade>
                    </div>

                    <div className="lg:sticky lg:top-32 w-full max-w-md mx-auto">
                        <Fade direction='right' delay={500} triggerOnce={true}>
                            <div className="relative group">
                                <div className="absolute -inset-8 bg-gradient-to-tr from-purple-600 via-pink-600 to-red-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
                                <div className="relative aspect-square overflow-hidden rounded-[3rem] border-8 border-white dark:border-gray-800 shadow-2xl transition-transform duration-500 group-hover:rotate-2">
                                    <Image
                                        src="/man.png"
                                        width={600}
                                        height={600}
                                        alt="Rophile Ahmed Khan"
                                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                                        priority
                                    />
                                </div>

                                <motion.div 
                                    animate={{ y: [0, -15, 0], rotate: [0, 2, 0, -2, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-10 -right-4 bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-2xl border-2 border-purple-500/30"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <FaChartLine className="text-purple-500" />
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Founder & CEO</p>
                                    </div>
                                    <p className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 uppercase italic">
                                        Codesphinx
                                    </p>
                                </motion.div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </motion.section>
    );   
}