"use client"

import { SectionName } from "@/lib/type";
import React, {useState, createContext, useContext} from "react";

type ActiveSectionContextProvideProps = {
    children: React.ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastCLick: number;
    setTimeOfLastCLick: React.Dispatch<React.SetStateAction<number>>;
}


export const ActiveSectionContext = 
createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
    children,
}:ActiveSectionContextProvideProps) {
    
    const [activeSection, setActiveSection] = useState<SectionName>("#home")
    const [timeOfLastCLick, setTimeOfLastCLick] = useState(0)
    return (
        <ActiveSectionContext.Provider
        value={{
            activeSection,
            setActiveSection,
            timeOfLastCLick,
            setTimeOfLastCLick,
        }}
        >
            {children}
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null){
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }
    return context;
}