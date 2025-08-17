import { useContext } from "react"
import { ThemeContext } from "./index"

const User = () => {

    const themeContextValue = useContext(ThemeContext);
    const {theme, toggleTheme} = themeContextValue

    const textStyle = {
        backgroundColor: theme === 'Light' ? 'white' : 'black',
        color: theme === 'Light' ? 'black': 'white'
    }

    return (
        <div>
            <h1 style={textStyle}>User</h1>
            <button onClick={toggleTheme}>toggle theme</button>
        </div>
    )
}

export default User