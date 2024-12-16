import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AnimatedText({  heading, subtext,url, buttonText, isVisible }) {
  return (
    <div className="absolute  md:hidden  pt-[120px] inset-0 flex items-start justify-center px-6 md:px-12">
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
      src: 'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/website_small_saches_banner_1500x500_54b677f9-96e4-4454-8989-1d2b0c00d429.jpg?v=1724759867',
      heading: 'Chairman Chandrasekaran on the AI-Vistara merger',
      subtext: '"An important milestone in our commitment to transform Air India into a world-class global airline with an Indian heart."',
      buttonText: 'Read note',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Gummies_Slider_Banner_1_-_1500px_X_500px_2_1.jpg?v=1731418666',
      heading: 'Driving Change Through Innovation',
      subtext: 'We aim to build sustainable and future-ready solutions.',
      buttonText: 'Learn more',
    },
    {
      src:"https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Slider_Banner_1_-_1500px_X_500px_1.jpg?v=1724307521"
    },

    {
      src:"https://cdn.shopify.com/s/files/1/0674/9614/9171/files/WhatsApp_Image_2024-08-20_at_11.35.51_AM_1.jpg?v=1724136184"
    },
    {
      src:"https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Slider_Banner_2_-_1500px_X_500px.jpg?v=1723547591"
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
    pauseOnHover: !isMobile,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <div className="relative" ref={sliderRef}>
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              loading={index === 0 ? 'eager' : 'lazy'}
              className="w-full h-[100vh] md:h-auto"
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

