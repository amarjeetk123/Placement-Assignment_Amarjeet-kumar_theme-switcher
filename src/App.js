import './App.css';
import { useContext, useState } from 'react';
import Themetoggler from './components/Themetoggler';
import themeColor from "./color"
import ThemeContext from './context/ThemeContext';
import { Navbar } from './components/Navbar';

function App() {
 
  const theme1 = useState("light")
  return (
    <ThemeContext.Provider value={theme1} >
     <Navbar />
     
    </ThemeContext.Provider>
  );
}

export default App;
