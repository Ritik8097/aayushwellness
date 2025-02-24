
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Testimonal.css';


const testimonials = [
  {
    name: "Tejas Yadav",
    role: "Patient",
    feedback:
      "One of the best doctors in Mumbai would be an understatement. The staff at BHC are very polite, helpful, and approachable. The entire staff has created a very friendly atmosphere. The hospital is very neat, clean, and hygienic. Now about Dr. Kant Shah, he certainly knows how to keep the patients and their parents relaxed at all times while also encompassing ample patience to not only understand the condition of the patient but also answer each and every query no matter how long it takes.",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/testimonial_review_1.png?v=1738994293",
  },
  {
    name: "Karan Talreja",
    role: "Patient",
    feedback:
      "One of the best doctors in Mumbai would be an understatement. ",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/testimonial_review_2.png?v=1738994293",
  },
  {
    name: "Tasmay Ved",
    role: "Patient",
    feedback:
      "One of the best doctors in Mumbai would be an understatement. The staff at BHC are very polite, helpful, and approachable. The entire staff has created a very friendly atmosphere. The hospital is very neat, clean, and hygienic. .",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/testimonial_review_3.png?v=1738994294",
  },
  {
    name: "Radhika Singh",
    role: "Patient",
    feedback:
      "One of the best doctors in Mumbai would be an understatement. The staff at BHC are very polite, helpful, and approachable. The entire staff has created a very friendly atmosphere. The hospital is very neat, clean, and hygienic. Now about Dr. Kant Shah, he certainly knows how to keep the patients and their parents relaxed at all times while also encompassing ample patience to not only understand ",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/testimonial_review_4.png?v=1738994293",
  },
  {
    name: "CA Piyush Gupta",
    role: "Patient",
    feedback:
      "One of the best doctors in Mumbai would be an understatement. The staff at BHC are very polite, helpful, and approachable. The entire staff has created a very friendly atmosphere. The hospital is very neat, clean, and hygienic. Now about Dr. Kant Shah, he certainly knows how to keep the patients and their parents relaxed at all times while also encompassing ample patience to not only understand ",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/testimonial_review_5.png?v=1738994293",
  },
  {
    name: "Dhruv Shelke",
    role: "Patient",
    feedback:
      "One of the best doctors in Mumbai would be an understatement. The staff at BHC are very polite, helpful, and approachable. The entire staff has created a very friendly atmosphere. The hospital is very neat, clean, and hygienic. Now about Dr. Kant Shah, he certainly knows how to keep the patients and their parents relaxed at all times while also encompassing ample patience to not only understand ",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/testimonial_review_7.png?v=1738994294",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="testimonial-section">
      <div className="testimonial-wrapper">
        {/* Center Image */}
        <div className="testimonial-image">
        <img src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/testimonial_image_75b9bd68-d369-467a-bbc0-d968f4fa37e8.png?v=1740217643" alt="Testimonial" />

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
              <div className="sticky-comma">“</div>
                {/* Feedback Container */}
                <div className="testimonial-content" style={{ textAlign: "center" }}>
                  <p style={{ color: "white" }}>{testimonial.feedback}</p>
                </div>
            
                {/* Name & Image Container */}
                <div
                  className="client-info"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h5 className="name" style={{ color: "white", margin: 0 }}>
                    {testimonial.name}
                  </h5>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="client-img"
                  />
                </div>
            
                {/* Quote Icon */}
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
