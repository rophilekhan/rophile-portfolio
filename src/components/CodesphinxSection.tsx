"use client"

import React from 'react';
import { motion } from "framer-motion";
import { FaGlobe, FaMobile, FaLayerGroup, FaArrowRight, FaShieldAlt } from 'react-icons/fa';

const services = [
    {
        title: "Custom App Development",
        desc: "High-performance iOS & Android apps built with React Native.",
        icon: <FaMobile className="text-pink-500" />,
    },
    {
        title: "Enterprise Solutions",
        desc: "Scalable MERN stack web applications for modern businesses.",
        icon: <FaLayerGroup className="text-purple-500" />,
    },
    {
        title: "Digital Transformation",
        desc: "Helping brands transition from local to global digital presence.",
        icon: <FaGlobe className="text-blue-500" />,
    }
];

export default function CodesphinxSection() {
    return (
        <section className="py-24 w-full max-w-[85rem] mx-auto overflow-visible relative px-6">
            
            {/* UPDATED WATERMARK - Responsive and Centered */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none w-full flex justify-center overflow-visible">
  <h1 className="text-[12vw] sm:text-[10vw] font-black uppercase tracking-tighter whitespace-nowrap">
    Codesphinx
  </h1>
</div>

            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Left Side: Professional Branding */}
                    <div className="flex-1 text-left relative">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
                        >
                            <FaShieldAlt className="text-purple-500 text-xs" />
                            <span className="text-[10px] font-black tracking-[0.2em] text-purple-600 uppercase">
                                Official Agency Section
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-black mb-8 dark:text-white leading-none uppercase italic tracking-tighter">
                            Innovating at <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
                                Codesphinx
                            </span>
                        </h1>

                        <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed font-medium max-w-[35rem]">
                            As the <span className="text-purple-600 font-bold">Founder & CEO</span>, I architect digital success stories. From high-performance <span className="text-purple-600 font-bold">React Native</span> apps to global <span className="text-purple-600 font-bold">SaaS infrastructure</span>, we engineer for scale.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 bg-gray-950 dark:bg-white dark:text-gray-950 text-white px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-xs transition-all shadow-2xl"
                            >
                                Start a Project <FaArrowRight />
                            </motion.a>
                        </div>
                    </div>

                    {/* Right Side: High-End Service Cards */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full relative">
                        {/* Decorative Background Glow */}
                        <div className="absolute -inset-10 bg-purple-500/10 blur-[120px] -z-10 rounded-full"></div>
                        
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 bg-white dark:bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-gray-100 dark:border-white/10 hover:border-purple-500/50 transition-all duration-500 group shadow-xl ${index === 1 ? 'sm:mt-8' : ''}`}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-purple-500/10 transition-all duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-black mb-3 dark:text-white uppercase tracking-tight leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}