import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Reviews from './Components/Reviews';
import Carousel from './LandingPage/Carousel'
import Cards from './Components/Cards';

function App() {
  return (
    <div className='grid grid-cols gap-20'>
      <Navbar/>
      <Hero/>
      <Cards/>
      <Carousel/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
