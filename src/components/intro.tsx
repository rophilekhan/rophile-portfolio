"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { Mail } from "lucide-react";

//Animation
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useinView";
import { useActiveSectionContext } from "@/container/active-section";

export default function Intro() {
 
  const { ref } = useSectionInView("#home", 0.5);
  const { setActiveSection, setTimeOfLastCLick } = useActiveSectionContext();
  return (
    <section
    ref={ref}
    id="home" className="mb-2 max-w-[75rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            <Image
              src="/boy.png"
              width="480"
              height="480"
              alt="portrait"
              quality="100"
              priority={true}
              className="rounded-full shadow-xl object-cover"
            />
          </motion.div>
          <motion.span
            className="text-6xl absolute bottom-8 right-12"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
      <h1 className="mb-10 mt-4 px-4 text-2xl sm:text-4xl">
        <span className="font-medium !leading-[1.5]">
          Grow your business with new website or app.
        </span>
        <p className="text-[14px]">
          I am providing you a full-service creative studio creating beautiful
          digital eperiences and products.
        </p>
      </h1>
      </Fade>
      <motion.div
        className=" flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 125,
          damping: 10,
          duration: 0.2,
        }}
      >
        <Link
          href="#"
          className="group bg-gray-900 text-white px-7 py-3 flex
                items-center gap-2 rounded-full outline-none focus:scale-110
                hover:scale-110 hover:bg-gray-950 dark:bg-white/10 
                active:scale-105 transition"
        >
          Connect <Mail color={"#9ca3af"} />
        </Link>

        <a
          className="group bg-gray-900 text-white px-4 py-3 flex
                items-center gap-2 rounded-full outline-none focus:scale-110
                hover:scale-110 hover:bg-gray-950 dark:bg-white/10 
                active:scale-105 transition 
                "
          href="#"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="group bg-gray-900 text-white px-4 py-3 flex
                items-center gap-2 rounded-full focus:scale-[1.15]  hover:scale-[1.15] 
                 active:scale-105 transition cursor-pointer borderBlack  
                 dark:text-white/60 dark:bg-white/10 
                "
          href="#"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
