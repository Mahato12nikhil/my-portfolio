import React, {createContext, useContext, useEffect, useState } from "react";


const ThemeContext=createContext({theme:"light", toggleTheme:()=>{}});

export const ThemeProvider: React.FC<{children:React.ReactNode}>=({children})=>{

    const currentTheme=localStorage.getItem("theme") || "light";

    const [theme, setTheme]=useState(currentTheme);

    const toggleTheme=()=>{
        setTheme(prev=>(prev=="light")?"dark":"light");
    }

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme);
        localStorage.setItem("theme", theme);
    },[theme])

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
} 
export const useTheme=()=>useContext(ThemeContext);