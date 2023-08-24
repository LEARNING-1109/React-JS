import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// abb: imrs
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [darkMode, setDarkMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    console.log('Toggle is clicked');
    if (darkMode === "light") {
      setDarkMode('dark');
      showAlert("Dark Mode has been Enabled", "success");
      setInterval(() => {
        document.title = "TextUtils-(2 Notifiation )"
      }, 500)
      setInterval(() => {
        document.title = "TextUtils"
      }, 1000)
    }
    else {
      setDarkMode('light');
      showAlert("Dark Mode has been Disabled.", "danger");
      document.title = "TextUtils - Home"
    }
  }

  return (
    <>
      {/* <Navbar title="iTextUtils" aboutText="iAboutUs" /> */}
      {/* <Navbar title={45} aboutText="iAboutUs" /> */}
      <Navbar drk_mode={darkMode} toggleMode={toggleMode} />
      <div>
        <Alert alert={alert} />
        <TextForm heading='Enter the Text' drk_mode={darkMode} showAlert={showAlert} />
      </div>
    </>

  );
}

export default App;
