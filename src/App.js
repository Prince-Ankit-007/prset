import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
// import About from './Component/About';
import React, { useState } from "react";
import Alert from "./Component/Alert";
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode On", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode On", "Success");
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="TextMaster" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes>
          <Route path="/" element={<TextForm/>}/>
          <Route path="/About" element={<About/>}/> */}
        <TextForm showAlert={showAlert} heading="Enter Your Text"/>
        {/* <About/> */}
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
