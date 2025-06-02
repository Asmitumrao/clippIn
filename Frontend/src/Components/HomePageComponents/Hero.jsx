import React from 'react';
import item from '../../assets/food.png';
export default function Hero() {
  return (
    <div className="bg-white w-full max-w-6xl mx-auto pt-20 px-4 md:px-8 my-4">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Smart Canteen Solutions at Your{' '}
            <span className="text-yellow-500">Fingertips.</span>
          </h1>
          
          <p className="text-gray-700 text-lg">
            Order meals, track status, pay easily, and enjoy 
            a smarter canteen experience with Clipin.
          </p>
          
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 px-8 rounded-full mt-4 transition-colors">
            Get Started
          </button>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full h-64 md:h-80 flex items-center justify-center">
            <div className="text-gray-400 text-lg">
              <img src={item}/>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full">
      </div>
    </div>
  );
}