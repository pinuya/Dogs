import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App(){
  return (
    <div> 
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
};



