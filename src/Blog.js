import React, { useState } from 'react';
import './Blog.css'; 


const Carousel = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!Array.isArray(items) || items.length === 0) { 
    console.error("Carousel received an invalid or empty items array:", items);
    return <p>No items to display</p>;
  }

  const totalItems = items.length;
  const itemsPerSlide = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= totalItems ? 0 : prevIndex + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerSlide < 0 ? Math.max(totalItems - itemsPerSlide, 0) : prevIndex - itemsPerSlide
    );
  };

  const translateXValue = currentIndex * (360 + 20);

  return (
    <>
    <div className="testimonal-titlee ">
    
    <h2>BLOGS</h2>
   
  </div>
    <div className="carousell-container">
      <button className="prev" onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      <div className="carousell">
        <div
          className="carousell-inner"
          style={{
            transform: `translateX(-${translateXValue}px)`,
            width: `${Math.ceil(totalItems / itemsPerSlide) * (360 + 20)}px`,
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="slidee">
              <div className="cardd">
                <div className="card-contentt">
                  {item.text.map((line, idx) => (
                    <p style={{color: "white"}}key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="nextt" onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>  
    </div>
    
    </>
  );
};

export default Carousel;