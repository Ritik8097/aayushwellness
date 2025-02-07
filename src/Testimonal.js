
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Testimonal.css';


const testimonials = [
  {
    name: "Evelyn Vaz",
    role: "Patient",
    feedback:
      "One of the best doctors in Mumbai would be an understatement. The staff at BHC are very polite, helpful, and approachable. The entire staff has created a very friendly atmosphere. The hospital is very neat, clean, and hygienic. Now about Dr. Kant Shah, he certainly knows how to keep the patients and their parents relaxed at all times while also encompassing ample patience to not only understand the condition of the patient but also answer each and every query no matter how long it takes.",
    image: "path-to-image1.jpg",
  },
  {
    name: "Kajal Talreja",
    role: "Patient",
    feedback:
      "One of the best doctors in Mumbai would be an understatement. The staff at BHC are very polite, helpful, and approachable. The entire staff has created a very friendly atmosphere. The hospital is very neat, clean, and hygienic. Now about Dr. Kant Shah, he certainly knows how to keep the patients and their parents relaxed at all times while also encompassing ample patience to not only understand the condition of the patient but also answer each and every query no matter how long it takes.",
    image: "path-to-image2.jpg",
  },
  {
    name: "Tasmay Ved",
    role: "Patient",
    feedback:
      "One of the best doctors in Mumbai would be an understatement. The staff at BHC are very polite, helpful, and approachable. The entire staff has created a very friendly atmosphere. The hospital is very neat, clean, and hygienic. Now about Dr. Kant Shah, he certainly knows how to keep the patients and their parents relaxed at all times while also encompassing ample patience to not only understand the condition of the patient but also answer each and every query no matter how long it takes.",
    image: "path-to-image3.jpg",
  },
  {
    name: "CA Piyush Gupta (F/o Nitya Gupta)",
    role: "Patient",
    feedback:
      "One of the best doctors in Mumbai would be an understatement. The staff at BHC are very polite, helpful, and approachable. The entire staff has created a very friendly atmosphere. The hospital is very neat, clean, and hygienic. Now about Dr. Kant Shah, he certainly knows how to keep the patients and their parents relaxed at all times while also encompassing ample patience to not only understand the condition of the patient but also answer each and every query no matter how long it takes.",
    image: "path-to-image4.jpg",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="testimonial-section">
      <div className="testimonial-wrapper">
        {/* Center Image */}
        <div className="testimonial-image">
        <img src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/testimonial_image.png?v=1738913790" alt="Testimonial" />

        </div>

        {/* Right Side Testimonial Slider */}
        <div className="testimonial-container">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation={{
              nextEl: ".test-btn-next",
              prevEl: ".test-btn-prev",
            }}
            pagination={{ clickable: true }}
            loop={true}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-bx">
                  <div className="testimonial-content">
                    <p style={{ color: "white" }}>{testimonial.feedback}</p>
                  </div>
                  <div className="client-info">
                    <h5 className="name" style={{ color: "white" }}>
                      {testimonial.name}
                    </h5>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="client-img"
                    />
                  </div>
                  <div className="quote-icon">
                    <i className="fas fa-quote-left" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}





