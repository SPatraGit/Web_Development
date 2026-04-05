import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react';
import Alert from './Components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }



  const changeMode = () => {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#08091C";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextUtils-Dark Mode";
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title = "TextUtils" contactText = "Contact Us" mode = {mode} changeMode = {changeMode}/>
    {/*<Navbar/>*/}
    <Alert alert = {alert}/>
    <div className="container my-3">
       <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm heading = "Enter Your text" mode = {mode} showAlert = {showAlert}/>} />
      </Routes>
    </div>
   </BrowserRouter>
    </>
  );
}

export default App;
