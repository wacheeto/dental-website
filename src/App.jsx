import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './screens/Home';

export default function App() {
  return (
    <Router >
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </main>
    </Router>
  );
}