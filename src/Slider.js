import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AnimatedText({  heading, subtext,url, buttonText, isVisible }) {
  return (
    <div className="absolute  md:justify-start md:items-center  pt-[120px] inset-0 flex items-start justify-center px-6 md:px-12 ">
      <div
        className={`max-w-lg bg-opacity-75 p-6  text-white space-y-4 transition-all duration-[1000ms] ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-40'
        }`}
      >
       
        <h2 className="text-[22px] text-white md:text-3xl font-bold transition-all duration-[1000ms] ease-out delay-500">
          {heading}
        </h2>
        <div style={{borderLeft:'1px solid rgb(209, 162, 114', marginLeft:" 10px", padding:"0px 15px"}}>
        <p className="text-sm md:text-base font-light italic transition-all duration-[1000ms] ease-out delay-700  pb-3">
          {subtext}
        </p>
        <a href={url}>
        <button style={{backgroundColor:"  rgb(209, 162, 114"}} className="px-4 py-2  text-black font-medium rounded-md  transition-all duration-[1000ms] ease-out delay-900">
          {buttonText} →
        </button>
        </a>
        </div>
      </div>
    </div>
  );
}

export default function AnimatedSlider() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the slider is visible
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  const desktopImages = [
    {
      src: 'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Slider_Banner_1_-_1500px_X_500px_31d67136-0584-417e-bd8e-406a01092ff0.jpg?v=1734352062',
       heading: 'Life Long Wellness',
      subtext: 'Taste Wellness , Embrace Nutrition : Aayush Your Gatway To Good Health ',
      url:"/wellness/health-wellness",
      buttonText: 'Explore more',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Slider_Banner_3_-_1500px_X_500px_956612c4-8d96-4978-93c9-4b30b4669fd8.jpg?v=1734352063',
     heading: 'Your Health , Our Priority',
      subtext: 'Tobacco-Free, Ayurveda Rich Solution',
      url:"/wellness/modern-science",
      buttonText: 'View details',
    },
    {
      src:"https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Gummies_Slider_Banner_1_-_1500px_X_500px_f0fce8bd-7175-4f4f-9ebc-2c78e8d9f412.jpg?v=1734352063",
      heading: 'Introducing Gummies',
      subtext: 'That Go Beyond Ordinary',
      url:"/gummies",
      buttonText: 'View details',
    },

    {
      src:"https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Slider_Banner_2_-_1500px_X_500px_e0c7b8d3-c642-4516-8bbc-66b1e9b35414.jpg?v=1734352062",
        heading: 'Transforming Habits ',
      subtext: 'Transforming Lives',
      url:"/ayurveda",
      buttonText: 'Explore more',
    }
  ];

  const mobileImages = [
    {
      src: 'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/BANNER_2-1.jpg?v=1732362895',
      heading: 'Life Long Wellness',
      subtext: 'Taste Wellness , Embrace Nutrition : Aayush Your Gatway To Good Health ',
      url:"/wellness/health-wellness",
      buttonText: 'Explore more',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/BANNER_3-1.jpg?v=1732362895',
      heading: 'Your Health , Our Priority',
      subtext: 'Tobacco-Free, Ayurveda Rich Solution',
      url:"/wellness/modern-science",
      buttonText: 'View details',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/BANNER_4-1.jpg?v=1732362895',
      heading: 'Introducing Gummies',
      subtext: 'That Go Beyond Ordinary',
      url:"/gummies",
      buttonText: 'View details',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/BANNER_1-1.jpg?v=1732362895',
      heading: 'Transforming Habits ',
      subtext: 'Transforming Lives',
      url:"/ayurveda",
      buttonText: 'Explore more',
    },
  ];

  const images = isMobile ? mobileImages : desktopImages;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <div className="relative" ref={sliderRef}>
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              loading={index === 0 ? 'eager' : 'lazy'}
              className="w-full h-[100vh] "
              src={image.src}
              alt={`Slide ${index + 1}`}
            />
            <AnimatedText
            
              heading={image.heading}
              subtext={image.subtext}
              url ={image.url}
              buttonText={image.buttonText}
              isVisible={isVisible && currentSlide === index}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

