import { createContext, useState } from "react";

   export const ThemeContext = createContext();

export const ThemeContextProvider = ({children})=>{
    const [theme, setTheme] = useState("light")
    const handleToggleTheme=()=>{
    return setTheme((prev)=> prev==="light" ? "dark" : "light")
}
  
    return <ThemeContext.Provider value={{theme, handleToggleTheme}}>
        {children}
    </ThemeContext.Provider>
}

