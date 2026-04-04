import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


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
    <Navbar title = "TextUtils" contactText = "Contact Us" mode = {mode} changeMode = {changeMode}/>
    {/*<Navbar/>*/}
    <Alert alert = {alert}/>
    <div className="container2 my-3">
      <TextForm heading = "Enter Your text" mode = {mode} showAlert = {showAlert}/>
    </div>
    {/*<div className="container1 my-3">
      <About/>
    </div>*/}
    </>
  );
}

export default App;
