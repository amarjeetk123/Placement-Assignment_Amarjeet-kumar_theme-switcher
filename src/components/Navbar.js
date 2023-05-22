import React,{useContext} from 'react'
import ThemeContext from '../context/ThemeContext';
import themeColor from "../color"
import Themetoggler from "../components/Themetoggler"


export const Navbar = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = themeColor[theme]
  return (
    <div style={{backgroundColor:`${currentTheme.backgroundColor}`, height:"100vh"}}> 
      <Themetoggler  />
    </div>
  )
}
