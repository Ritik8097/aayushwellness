import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Blog.css";

const Carousel = () => {
  const items = [
    {
      id: 1,
      imageUrl: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_1_2.jpg?v=1739438063",
      title: "How the Landscape of Indian Healthcare is Shifting",
      shortDescription: "India’s healthcare sector is undergoing a massive transformation....",
      readMoreLink: "/Blog1",
    },
    {
      id: 2,
      imageUrl: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_2_2.jpg?v=1739438065",
      title: "Focus on Preventive Healthcare and Nutrition Post-COVID",
      shortDescription: "The COVID-19 pandemic......... ",
      readMoreLink: "/Blog2",
    },
   {
      id: 3,
      imageUrl: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_3_insurance.jpg?v=1739601042",
      title: "Why Health Insurance is a Must-Have: Benefits & Coverage Explained",
      shortDescription: "In today's fast-paced world.....",
      readMoreLink: "/Blog3",
    },
    {
      id: 4,
      imageUrl: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_4_health_check.jpg?v=1739601043",
      title: "Essential Health Checkups: What Tests You Need & Why",
      shortDescription: "Your health is your greatest asset, and regular.....",
      readMoreLink: "/Blog4",
    }
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(items.length, 3),
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(items.length, 2),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">BLOGS</h2>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="slide">
            <div className="mantine-card">
              <div className="mantine-card-section">
                <img className="mantine-card-image" src={item.imageUrl} alt={item.title} />
              </div>
              <div className="mantine-card-content">
                <p className="mantine-card-title">{item.title}</p>
                <p className="mantine-card-description">{item.shortDescription}</p>
                <Link to={item.readMoreLink} className="mantine-card-button">
                  Know More....
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
