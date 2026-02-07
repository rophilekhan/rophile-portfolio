import type { Metadata } from "next";
import { Sora } from "next/font/google"
import "./globals.css";
import Providers from "@/container/providers";
import Navbar from "@/components/navbar";
import ThemeSwitch from "@/components/theme-controller";
import { Toaster } from "react-hot-toast";

const sora = Sora({
  subsets: ["latin"],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800'],
});

export const metadata: Metadata = {
  title: "Rophile Ahmed Khan | Frontend Architect & CEO",
  description: "Official portfolio of Rophile Ahmed Khan, Founder & CEO of Codesphix. Specializing in React Native, SaaS, and high-stakes digital infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body 
        className={`${sora.variable} font-Sora min-h-screen bg-slate-50
        text-gray-950 relative dark:bg-[#030014] dark:text-gray-50 
        dark:text-opacity-90 transition-colors duration-300 antialiased overflow-x-hidden`}
      >
        {/* PREMIUM AMBIENT BACKGROUNDS */}
        {/* Purple Glow (Top Right) */}
        <div className="bg-[#f0e7ff] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full 
          blur-[10rem] sm:w-[68.75rem] dark:bg-[#2d1b4e] opacity-50 dark:opacity-40 transition-colors duration-500"></div>

        {/* Indigo/Blue Glow (Top Left) */}
        <div className="bg-[#e0e7ff] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full 
          blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem]
          2xl:left-[-5rem] dark:bg-[#1a1c3a] opacity-50 dark:opacity-40 transition-colors duration-500"></div>

        <Providers>
          {/* Global Toast Notifications for Contact Form */}
          <Toaster 
            position="top-center"
            toastOptions={{
              className: 'dark:bg-[#0f0715] dark:text-white dark:border dark:border-white/10 rounded-2xl font-medium',
              duration: 4000,
            }}
          />
          
          <Navbar />
          <main className="relative flex flex-col items-center">
            {children}
          </main>
          <ThemeSwitch />
        </Providers>
      </body>
    </html>
  );
}