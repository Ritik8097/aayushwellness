import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner2 from './Banner2';

// Slider settings
const sliderSettings = {
//   dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnHover: false,
};

const Banner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const videoRefs = useRef([]);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile and desktop content (images & videos)
  const mobileContent = [
    { type: 'image', src: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/Slider_banner_2.jpg?v=1738756117" },
    
  ];

  const desktopContent = [
    { type: 'image', src: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/Slider_banner_2_b15b76a2-c104-406d-be51-b70d53c7422d.jpg?v=1738758495" },
    { type: 'video', src: "https://cdn.shopify.com/videos/c/o/v/cda1ad9527b3403e852d0dbd1ce058ee.mp4" }, 
  ];

  // Choose content based on screen size
  const content = isMobile ? mobileContent : desktopContent;

  // Start all videos when they load
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play().catch((err) => console.log("Autoplay prevented:", err));
      }
    });
  }, []);

  return (
    <div style={{ marginTop: '-80px' }}>
    <Slider {...sliderSettings}>
      {content.map((item, index) => (
        <div key={index} className="w-full">
          {item.type === 'image' ? (
            <img
              loading="lazy"
              className="w-full object-contain"
              src={item.src}
              alt={`Slide ${index + 1}`}
              style={{ height: '1019px' }}
            />
          ) : (
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="w-full object-contain"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '1410px', height: '1090px' }}
              onLoadedData={() => {
                videoRefs.current[index]?.play().catch((err) => console.log("Autoplay prevented:", err));
              }}
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
    </Slider>
    <Banner2/>
    </div>);
};

export default Banner;