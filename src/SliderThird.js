import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function SliderThird() {
  // State to track if the screen is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile and desktop images
  const mobileImages = [
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Gummies_Slider_Banner_5_-_400px_X_520px.jpg?v=1724308030",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Gummies_Slider_Banner_4_-_400px_X_520px.jpg?v=1724308031",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Product_Slider_Banner_-_Pan_Masala_-_400px_X_520px_1_2.jpg?v=1724668206"
  ];

  const desktopImages = [
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Gummies_Slider_Banner_4_-_1500px_X_500px.jpg?v=1723525081",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Gummies_Slider_Banner_5_-_1500px_X_500px_1.jpg?v=1724307521",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Product_Slider_Banner_-_Pan_Masala_-_1500X_500px_1.jpg?v=1724668205"
  ];

  // Choose images based on screen size
  const images = isMobile ? mobileImages : desktopImages;

  return (
    <>
      {/* Slider */}
      <div className=" js relative mt-9 ">
       
        <div className="backdrop-blur-2xl hidden md:block md:h-[40px] md:p-[17px] p-[14px] absolute bottom-0 gap-6 w-full z-10 flex justify-center items-center" style={{background:'rgba(255, 255, 255, 0.3)'}}>
          {images.map((src, index) => (
            <div key={index}>
              <img  className=' md:h-24 h-[4.7rem]  md:p-3 ' src={src} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
       
        </div>
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index} className="relative">
              <img  loading='lazy' className="w-full object-contain " src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
