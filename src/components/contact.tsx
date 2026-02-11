"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { useSectionInView } from "@/lib/useinView"
import SubmitBtn from "./submit-btn"
import { Fade } from "react-awesome-reveal"
import { sendEmail } from "@/app/actions"
import { Toaster, toast } from "react-hot-toast"
import { Mail, MessageSquare, User, ShieldCheck, Zap } from "lucide-react"

export default function Contact() {
  const { ref } = useSectionInView("#contact")

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full text-center relative px-4 overflow-visible"
    >
      <Toaster position="top-center" reverseOrder={false} />

      {/* REFINED WATERMARK - Optimized for all themes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none w-full flex justify-center overflow-visible">
  <h1 className="text-[12vw] sm:text-[10vw] font-black uppercase tracking-tighter whitespace-nowrap">
    Connect
  </h1>
</div>

      <div className="max-w-[42rem] mx-auto">
        <Fade direction="up" delay={200} triggerOnce={true}>
          <SectionHeading>
            <h1 className="text-4xl sm:text-6xl font-black mb-4 tracking-tighter uppercase italic">
              Get In <span className="text-purple-600 dark:text-purple-400">Touch</span>
            </h1>
          </SectionHeading>
        </Fade>

        <Fade direction="up" delay={400} triggerOnce={true}>
          <div className="flex flex-col items-center gap-2 -mt-4 mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[30rem]">
              Ready to initialize your next project? Let&apos;s discuss the <span className="text-purple-500 font-bold">architecture</span> and vision.
            </p>
            <div className="flex items-center gap-4 mt-2 text-[10px] uppercase tracking-widest text-gray-400 font-bold">
               <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-purple-500"/> Direct Access</span>
               <span className="flex items-center gap-1"><Zap size={12} className="text-purple-500"/> Fast Response</span>
            </div>
          </div>
        </Fade>

        <Fade direction="up" delay={600} triggerOnce={true}>
          <div className="relative group">
            {/* Ambient Glow for Depth */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            
            <form
              className="relative flex flex-col p-1 bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-2xl"
              action={async (formData) => {
                const { error } = await sendEmail(formData)

                if (error) {
                  toast.error(error)
                  return
                }

                toast.success("Inquiry transmitted successfully.")
              }}
            >
              <div className="flex flex-col gap-3 p-6 sm:p-8 bg-white/80 dark:bg-gray-950/50 rounded-[2.2rem]">
                {/* NAME INPUT */}
                <div className="relative group/input">
                   <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-purple-500 transition-colors" size={18} />
                   <input
                    className="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-transparent bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white placeholder:text-gray-500 focus:border-purple-500/30 focus:bg-white dark:focus:bg-white/10 transition-all outline-none font-medium"
                    name="senderName"
                    type="text"
                    required
                    placeholder="Full Name"
                  />
                </div>

                {/* EMAIL INPUT */}
                <div className="relative group/input">
                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-purple-500 transition-colors" size={18} />
                   <input
                    className="w-full h-14 pl-12 pr-4 rounded-2xl border-2 border-transparent bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white placeholder:text-gray-500 focus:border-purple-500/30 focus:bg-white dark:focus:bg-white/10 transition-all outline-none font-medium"
                    name="senderEmail"
                    type="email"
                    required
                    placeholder="Professional Email"
                  />
                </div>

                {/* MESSAGE INPUT */}
                <div className="relative group/input">
                   <MessageSquare className="absolute left-4 top-5 text-gray-400 group-focus-within/input:text-purple-500 transition-colors" size={18} />
                   <textarea
                    className="w-full h-52 pl-12 pr-4 pt-4 rounded-2xl border-2 border-transparent bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white placeholder:text-gray-500 focus:border-purple-500/30 focus:bg-white dark:focus:bg-white/10 transition-all outline-none resize-none font-medium"
                    name="message"
                    required
                    placeholder="Project Brief..."
                  />
                </div>

                <div className="flex justify-center mt-2">
                  <SubmitBtn text="Send " />
                </div>
              </div>
            </form>
          </div>
        </Fade>

        <div className="mt-16 flex flex-col items-center gap-4">
            <div className="w-10 h-[1px] bg-gray-300 dark:bg-gray-800" />
            <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-gray-400">
                Karachi, PK • Global Deployment
            </p>
        </div>
      </div>
    </motion.section>
  )
}