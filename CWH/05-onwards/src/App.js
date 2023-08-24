import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// abb: imrs
import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState("light");

  

  const toggleMode = () => {
    // console.log('Toggle is clicked');
    if (darkMode === "light") {
      setDarkMode('dark');
    }
    else {
      setDarkMode('light');
    }
  }

  return (
    <>
      {/* <Navbar title="iTextUtils" aboutText="iAboutUs" /> */}
      {/* <Navbar title={45} aboutText="iAboutUs" /> */}
      <Navbar drk_mode={darkMode} toggleMode={toggleMode} />
      <TextForm heading='Enter the Text' drk_mode={darkMode} />
    </>
    
  );
}

export default App;
