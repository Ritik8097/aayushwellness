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
      imageUrl: "https://img.freepik.com/premium-vector/woman-doing-yoga-home-studio-flat-vector-illustration_647688-24.jpg?uid=R186725298&ga=GA1.1.1760057800.1738908057&semt=ais_hybrid",
      title: "Health Benefits of Yoga",
      shortDescription: "Yoga is a great way to improve flexibility, strength, and mental clarity. Learn more about how yoga can enhance your health.",
      readMoreLink: "/health-benefits-of-yoga",
    },
    {
      id: 2,
      imageUrl: "https://img.freepik.com/free-photo/pile-fresh-fruits_144627-17253.jpg?uid=R186725298&ga=GA1.1.1760057800.1738908057&semt=ais_hybrid",
      title: "10 Superfoods You Should Try",
      shortDescription: "Discover the best superfoods that will help you boost your immune system and maintain overall health.",
      readMoreLink: "/superfoods",
    },
    {
      id: 3,
      imageUrl: "https://img.freepik.com/free-vector/athletic-legs-sport-fitness-hand-drawn-sketch-vector-illustration_460848-14558.jpg?uid=R186725298&ga=GA1.1.1760057800.1738908057&semt=ais_hybrid",
      title: "How to Stay Active in Winter",
      shortDescription: "Staying active during winter can be challenging. Here are some tips to keep fit and healthy.....",
      readMoreLink: "/stay-active-winter",
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
                <button className="mantine-card-button">Know More....</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
