
import React, { useState, useEffect, useRef } from 'react';


const HoverCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef(null);

  const items = [
    { 
      id: 1, 
      image: "/api/placeholder/800/400", 
      title: "Mountain Landscape",
      description: "Beautiful mountain scenery with a lake view"
    },
    { 
      id: 2, 
      image: "/api/placeholder/800/400", 
      title: "Beach Sunset",
      description: "Golden sunset over calm ocean waters" 
    },
    { 
      id: 3, 
      image: "/api/placeholder/800/400", 
      title: "Forest Path",
      description: "A serene path through a dense forest" 
    },
    { 
      id: 4, 
      image: "/api/placeholder/800/400", 
      title: "City Skyline",
      description: "Urban skyline with skyscrapers at dusk" 
    }
  ];

  useEffect(() => {
    if (isHovering) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 2000); // 3 seconds
    } else {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [isHovering, items.length]);

  return (
    <div className='flex flex-col items-center justify-center h-full w-full'>
      <div 
        className='h-full w-full relative overflow-hidden' 
        onMouseEnter={() => setIsHovering(true)} 
        onMouseLeave={() => setIsHovering(false)}
      >

        {/* sides------------------------------------------------------------------- */}
        <div 
          className='h-full w-full flex transition-transform duration-1000 ease-in-out ' 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="min-w-full h-full relative flex-shrink-0  bg-gray-500 rounded-lg">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0  p-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const Reviews = () => {

    const images = ['https://picsum.photos/1000/500','https://picsum.photos/500/500','https://picsum.photos/600/600']
  return (
    <div className='flex flex-row  mx-auto justify-center items-center gap-10 overflow-hidden p-6 mb-30'>   
        <div className='h-100 w-100 grid grid-cols-2 grid-rows-2 items-center justify-center gap-4'>
            <div className='col-span-2 w-full h-full rounded-lg shadow-lg bg-gray-200'>
                <img src={images[0]} alt="" className="object-cover rounded-lg shadow-lg h-full w-full" />
            </div>
            <div className='h-full w-full rounded-lg shadow-lg bg-gray-200'>
            <img src={images[1]} alt="" className="object-cover rounded-lg shadow-lg h-full w-full" />

            </div>
            <div className='h-full w-full rounded-lg shadow-lg bg-gray-200'>
            <img src={images[2]} alt="" className="object-cover rounded-lg shadow-lg h-full w-full" />
            </div>
        </div>
        <div className=' h-100 w-100 '>
            <div className='flex flex-col items-start justify-center h-96 w-full bg-gray-100 rounded-xl shadow-sm p-8 border border-gray-100'>
              {/* Header */}
              <div className='flex flex-col justify-center mb-8'>
                <h2 className='text-amber-300 text-lg  font-bold mb-2'>What they say</h2>
                <h1 className='text-3xl font-bold text-gray-900 leading-tight'>
                  What Our Customers Say<br />
                  <span className='text-gray-700'>About Us</span>
                </h1>
              </div>

              {/* Carousel */}
              <div className='flex-1 w-full'>
                <HoverCarousel/>
              </div>
            </div>
          </div>
        
    </div>
  )
}

export default Reviews