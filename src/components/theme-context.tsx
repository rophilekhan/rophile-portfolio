"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
    children: React.ReactNode;
};

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>("light");

    // SIMPLIFIED: Direct toggle function without useCallback
    const toggleTheme = () => {
        setTheme((currentTheme) => {
            const newTheme = currentTheme === "light" ? "dark" : "light";
            
            // Update localStorage
            if (typeof window !== "undefined") {
                window.localStorage.setItem("theme", newTheme);
            }
            
            // Update document class
            if (newTheme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            
            return newTheme;
        });
    };

    useEffect(() => {
        // Run only once on mount
        const storedTheme = window.localStorage.getItem("theme") as Theme | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (storedTheme) {
            setTheme(storedTheme);
            if (storedTheme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        } else if (prefersDark) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []); // Empty dependency array - runs once

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }
    return context;
}