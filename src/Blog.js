import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Blog.css";

const Carousel = ({ items = [] }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <p>No items to display</p>;
  }

  const settings = {
    dots: true, // Shows navigation dots
    infinite: true, // Infinite scrolling
    speed: 500,
    slidesToShow: 3, // Default: Show 3 slides
    slidesToScroll: 1, // Scroll 1 item at a time
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // Every 3 seconds
    responsive: [
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">BLOGS</h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="slide">
            <div className="card">
              <div className="card-content">
                {item.text.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
