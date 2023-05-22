import React, {useContext} from "react";
import ThemeContext from "../context/ThemeContext";

const Themetoggler = () => {
    const [themeMode, setThemeMode ] = useContext(ThemeContext);
    console.log(themeMode)

    return(
        <div onClick={ () => { setThemeMode(themeMode==="light" ? "dark" : "light") } }>
            <button  > { themeMode === "light" ? "dark" : "light" } </button>
        </div>
    )
}
export default Themetoggler;