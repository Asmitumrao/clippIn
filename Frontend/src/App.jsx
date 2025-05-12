import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Reviews from './Components/Reviews';
import Carousel from './LandingPage/Carousel'

function App() {
  return (
    <div className='grid grid-cols gap-20'>
      <Navbar/>
      <Carousel/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
