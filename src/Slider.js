import React from 'react';
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

export default function Sliding() {
  // Determine if the screen is mobile or desktop
  const isMobile = window.innerWidth < 768;

  // Mobile and desktop images
  const mobileImages = [
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/website_small_saches_banner_900x1120_5dfe17c8-7132-49da-b14b-b2bd0301ed12.jpg?v=1724759867",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Gummies_Slider_Banner_1_-_400px_X_520px_1.jpg?v=1724668205",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Slider_Banner_1_-_400px_X_520px_3.jpg?v=1724668205",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Slider_Banner_2_-_400px_X_520px_2.jpg?v=1724668205",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Slider_Banner_3_-_400px_X_520px_1.jpg?v=1724668205",
    
  ];

  const desktopImages = [
      "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/website_small_saches_banner_1500x500_54b677f9-96e4-4454-8989-1d2b0c00d429.jpg?v=1724759867",
"https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Gummies_Slider_Banner_1_-_1500px_X_500px_3.jpg?v=1724310810",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Slider_Banner_1_-_1500px_X_500px_1.jpg?v=1724307521",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/WhatsApp_Image_2024-08-20_at_11.35.51_AM_1.jpg?v=1724136184",
    "https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Slider_Banner_2_-_1500px_X_500px.jpg?v=1723547591",
  
  ];

  // Choose images based on screen size
  const images = isMobile ? mobileImages : desktopImages;

  return (
    <>
      {/* Slider */}
      <div className="relative ">
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index} className="relative">
              <img loading='lazy' className="w-full" src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
