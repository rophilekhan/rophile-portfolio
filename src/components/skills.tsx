"use client"

import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/useinView"; 

import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2 * index,
        },
    }),
}

export default function Skills() {
    const { ref } = useSectionInView ("#skills")
    return (
        <section 
        ref={ref}
        id="skills"
        className="mb-20 max-w-[53rem] scroll-t-28 text-center sm:mb-40"
        >
            <SectionHeading>
                {"My Skills"}
            </SectionHeading>
            <ul className=" flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {
                    skillsData.map((skill, index) => (
                        <motion.li 
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                        key={index}
                        className="bg-white border-black rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}