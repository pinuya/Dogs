import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login/Login';
import User from './components/User/User';
import ProtectedRouter from './components/Helper/ProtectedRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserStorage from './UserContext'
import Photo from './components/Photo/Photo';
import UserPorfile from './components/User/UserProfile';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login/*' element={<Login />} />
            <Route
              path='conta/*'
              element={
                <ProtectedRouter>
                  <User />
                </ProtectedRouter>
              }
            />
            <Route path='photo/:id' element={<Photo />} />
            <Route path='profile/:user' element={<UserPorfile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
};



