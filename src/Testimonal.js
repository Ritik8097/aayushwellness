import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Testimonal.css';


const testimonials = [
  {
    name: "Rajesh Verma",
    role: "Patient",
    feedback:
      "The comprehensive care I received at this hospital was truly outstanding. From diagnosis to treatment, every step was well-coordinated, and the medical team ensured I was comfortable throughout. Highly recommend their services!  ",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/testimonial_review_1.png?v=1738994293",
  },
  {
    name: "Karan Talreja",
    role: "Patient",
    feedback:
      "I recently explored their franchise model, and I must say, their approach to healthcare excellence is unmatched. The business model is well-structured, making it a lucrative opportunity for investors and entrepreneurs. ",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/testimonial_review_2.png?v=1738994293",
  },
  {
    name: "Prakash Iyer",
    role: "Patient",
    feedback:
      "Holistic wellness is at the core of this healthcare facility. They don't just treat illnesses; they focus on overall well-being with personalized diet plans, stress management, and fitness guidance. A true game-changer! ",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/testimonial_review_3.png?v=1738994294",
  },
  {
    name: "Anjali Sharma",
    role: "Patient",
    feedback:
      "I recently underwent an advanced surgery here, and the expertise of the doctors was remarkable. The modern technology and skilled surgeons made my recovery quick and smooth. Grateful for the care and attention! ",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/testimonial_review_4.png?v=1738994293",
  },
  {
    name: "Amit Tandon",
    role: "Patient",
    feedback:
      "The expert medical team here is highly knowledgeable and compassionate. They take the time to explain everything in detail and ensure patients feel safe and confident about their treatments. Truly professional!",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/testimonial_review_5.png?v=1738994293",
  },
  {
    name: " Vikram Mehta",
    role: "Patient",
    feedback:
      " I recently explored their franchise model, and I must say, their approach to healthcare excellence is unmatched. The business model is well-structured, making it a lucrative opportunity for investors and entrepreneurs. ",
    image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/testimonial_review_7.png?v=1738994294",
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
