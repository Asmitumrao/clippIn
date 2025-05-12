import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const foodItems = [
    {
      id: 1,
      name: 'Straw Cake',
      image: '/assets/4.jpg',
      rating: 4.4,
    },
    {
      id: 2,
      name: 'Pancake',
      image: '/assets/2.jpg',
      rating: 4.5,
    },
    {
      id: 3,
      name: 'Special Pizza',
      image: '/assets/1.jpg',
      rating: 4.5,
    },
    {
      id: 4,
      name: 'Spageti',
      image: '/assets/6.jpg',
      rating: 4.7,
    },
    {
      id: 5,
      name: 'Burger',
      image: '/assets/3.jpg',
      rating: 4.3,
    },
    {
      id: 6,
      name: 'White Pasta',
      image: '/assets/5.jpg',
      rating: 4.6,
    },
    {
      id: 7,
      name: 'Pav Bhaji',
      image: '/assets/7.jpg',
      rating: 4.4,
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex === foodItems.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex === 0 ? foodItems.length - 1 : prevIndex - 1));
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Calculate positions for each card
  const getCardStyle = (index) => {
    const diff = index - activeIndex;
    
    // Calculate position based on distance from active index
    if (diff === 0) {
      return "z-40 scale-125 translate-y-0 opacity-100"; // Center card (featured)
    } else if (diff === -1 || (diff === foodItems.length - 1 && activeIndex === 0)) {
      return "z-30 -translate-x-40 scale-90 opacity-80"; // Left of center
    } else if (diff === -2 || (diff === foodItems.length - 2 && activeIndex === 0) || (diff === foodItems.length - 1 && activeIndex === 1)) {
      return "z-20 -translate-x-64 scale-75 opacity-60"; // Far left
    } else if (diff === 1 || (diff === -(foodItems.length - 1) && activeIndex === foodItems.length - 1)) {
      return "z-30 translate-x-40 scale-90 opacity-80"; // Right of center
    } else if (diff === 2 || (diff === -(foodItems.length - 2) && activeIndex === foodItems.length - 1) || (diff === -(foodItems.length - 1) && activeIndex === foodItems.length - 2)) {
      return "z-20 translate-x-64 scale-75 opacity-60"; // Far right
    } else {
      return "opacity-0"; // Hide others
    }
  };

  // Render star ratings
  const renderRating = (rating) => {
    return (
      <div className="flex items-center">
        <span className="text-sm font-medium mr-1">{rating}</span>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${
                i < Math.floor(rating)
                  ? 'text-yellow-400 fill-yellow-400'
                  : i < rating
                  ? 'text-yellow-400 fill-yellow-400 opacity-50'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-15">
        <p className="text-orange-500 font-medium">Popular Delivery</p>
        <h2 className="text-4xl font-bold mt-2">
          Trending
          <br />
          food
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative h-90">
        <div className="absolute inset-0 flex justify-center items-center">
          {foodItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute transition-all duration-300 rounded-2xl overflow-hidden shadow-lg ${getCardStyle(
                index
              )}`}
            >
              <div className="relative w-80 h-80 bg-white rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>      
                {/* Food name and rating */}
                <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  {renderRating(item.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>

{/* Navigation Buttons */}
<button
  onClick={prevSlide}
  className="absolute right-130 top-1/2 -translate-y-1/2 z-50 bg-white rounded-full p-2 shadow-md hover:bg-orange-500"
  aria-label="Previous slide"
>
  <ChevronLeft size={24} />
</button>
<button
  onClick={nextSlide}
  className="absolute left-130 top-1/2 -translate-y-1/2 z-50 bg-white rounded-full p-2 shadow-md hover:bg-orange-500"
  aria-label="Next slide"
>
  <ChevronRight size={24} />
</button>

{/* Indicators */}
<div className="mt-2 flex justify-center space-x-1 ">
  {foodItems.map((_, index) => (
    <button
      key={index}
      onClick={() => goToSlide(index)}
      className={`h-2 rounded-full transition-all duration-300 mt-5 ${
        index === activeIndex ? "w-6 bg-orange-500" : "w-2 bg-gray-300"
      }`}
      aria-label={`Go to slide ${index + 1}`}
    />
  ))}
</div>

      </div>
    </div>
  );
}