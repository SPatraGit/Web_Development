import './App.css'
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize = {5} country = "us" category = "General"/>} />
            <Route exact path="/business" element={<News key="business" pageSize = {5} country = "us" category = "Business"/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize = {5} country = "us" category = "Entertainment"/>} />
            <Route exact path="/general" element={<News key="general" pageSize = {5} country = "us" category = "General"/>} />
            <Route exact path="/health" element={<News key="health" pageSize = {5} country = "us" category = "Health"/>} />
            <Route exact path="/science" element={<News key="science" pageSize = {5} country = "us" category = "Science"/>} />
            <Route exact path="/technology" element={<News key="technology" pageSize = {5} country = "us" category = "Technology"/>} />
            <Route exact path="/sports" element={<News key="sports" pageSize = {5} country = "us" category = "Sports"/>} />
          </Routes>
      </BrowserRouter>
      </div>
    );
  }
}
