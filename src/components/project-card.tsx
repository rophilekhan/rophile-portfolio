"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { ProjectInfo } from "@/lib/type"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function Project({ title, description, imageUrl, link, tags = [] }: ProjectInfo) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  })
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-12 last:mb-0"
    >
      <section className="relative bg-white/70 dark:bg-white/5 backdrop-blur-xl max-w-[54rem] border border-purple-500/10 dark:border-white/10 rounded-[3rem] overflow-hidden sm:pr-8 relative sm:h-[30rem] hover:bg-white dark:hover:bg-white/10 transition-all duration-500 shadow-2xl group-even:sm:pl-8">
        
        {/* TEXT CONTENT CONTAINER */}
        <div className="pt-8 pb-8 px-6 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[22rem]">
          
          <div className="flex items-center gap-2 mb-3">
             <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-widest text-purple-600 dark:text-purple-400">Featured Innovation</span>
          </div>

          <h3 className="text-3xl font-black tracking-tighter text-gray-950 dark:text-white uppercase italic">
            {title}
          </h3>
          
          {/* DESCRIPTION AREA: Larger view, clean scrolling */}
          <div className="mt-4 pr-4 overflow-y-auto max-h-[160px] custom-scrollbar flex-grow">
            <p className="leading-relaxed text-gray-700 dark:text-white/70 text-sm sm:text-base font-medium">
              {description}
            </p>
          </div>

          {/* ACTION AREA: Tags & Button stay at the bottom */}
          <div className="mt-auto pt-4">
            <ul className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                    <li key={tag} className="bg-purple-600/10 dark:bg-white/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-widest text-purple-700 dark:text-white rounded-lg border border-purple-500/20">
                        {tag}
                    </li>
                ))}
            </ul>

            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 px-8 py-3 bg-gray-950 dark:bg-purple-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-purple-500/20"
            >
                Launch App <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* ORIGINAL STYLE IMAGE: Large, floating, and tilting to top-right */}
        <Image
          src={imageUrl}
          alt={title}
          quality={100}
          width={600}
          height={400}
          className="absolute hidden sm:block top-12 -right-40 w-[30rem] rounded-t-2xl shadow-2xl
          transition-all duration-700
          
          group-hover:scale-[1.06]
          group-hover:-translate-x-6
          group-hover:-translate-y-4
          group-hover:-rotate-2

          group-even:group-hover:translate-x-6
          group-even:group-hover:-translate-y-4
          group-even:group-hover:rotate-2
          group-even:right-[initial] group-even:-left-40"
        />
      </section>

      {/* Internal CSS for clean scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #a855f7;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </motion.div>
  )
}