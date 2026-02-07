"use client"

import About from "@/components/about";
import Intro from "../components/intro"
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
// Yahan import karein (check path: agar components folder mein hai to ye use karein)
import CodesphinxSection from "@/components/CodesphinxSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02] dark:opacity-[0.05] -z-10" />

      <section className="w-full pt-32 md:pt-48 pb-20 flex flex-col items-center">
        <Intro />
      </section>

      <div className="space-y-32 md:space-y-48 w-full flex flex-col items-center">
        <About />
        
        {/* YAHAN ADD KAREIN TAAKE YE ABOUT KE BAAD DIKHE */}
        <CodesphinxSection /> 
        
        <Projects />
        <Skills />
        <Contact />
      </div>

      <footer className="w-full py-12 mt-20 border-t border-black/5 dark:border-white/5 flex flex-col items-center gap-2">
        <small className="text-xs text-gray-500 font-medium">
          &copy; 2026 <span className="font-bold text-purple-600">Codesphix</span>. All rights reserved.
        </small>
      </footer>
    </main>
  );
}