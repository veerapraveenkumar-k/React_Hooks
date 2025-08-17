import { createContext, useState } from "react"
import Container from "./Container"

export const ThemeContext = createContext();

const ContextHook = () => {
    const [theme, setTheme] = useState("Light")

    const toggleTheme = () => {
        setTheme(cur => cur === "Light" ? 'Dark': 'Light')
    }
    
    return (
        <ThemeContext.Provider
        value={{
            theme,
            toggleTheme
        }}
        >
            <button onClick={toggleTheme}>Toggle Theme</button>
            <h1>Context Hook</h1>
            <Container/>
        </ThemeContext.Provider>
    )
}

export default ContextHook