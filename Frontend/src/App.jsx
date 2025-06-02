import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import Menu from './pages/Menu';
import About from './pages/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
    <div >
      <Navbar />
      {/* Define your routes here */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/cart" element={<Cart/>} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
