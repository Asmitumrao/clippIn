import React from 'react'

import Hero from '../Components/HomePageComponents/Hero';
import Reviews from '../Components/HomePageComponents/Reviews';
import Carousel from '../Components/HomePageComponents/Carousel';
import Cards from '../Components/HomePageComponents/Cards';

const HomePage = () => {
  return (
    <div className='grid grid-cols gap-20'>
      <Hero/>
      <Cards/>
      <Carousel/>
      <Reviews/>
    </div>
  );
}

export default HomePage