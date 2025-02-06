import React, { useState } from 'react';
import './specilities.css'; // Make sure the CSS is imported from your CSS file
import Service from './service';
import Blog from './Blog'

const services = [
  { name: 'Neurology', icon: 'flaticon-man', description: 'Neurology deals with disorders of the nervous system.' },
  { name: 'Orthopedic Care', icon: 'flaticon-walker', description: 'Orthopedic care focuses on bones, joints, and muscles.' },
  { name: 'Paediatrics', icon: 'flaticon-man', description: 'Paediatrics focuses on medical care for infants and children.' },
  { name: 'Medicine', icon: 'flaticon-liver', description: 'General medicine covers a wide range of health concerns.' },
  { name: 'Gynecology', icon: 'flaticon-kidney', description: 'Gynecology focuses on women’s reproductive health.' },
  { name: 'Nutrition & Dietetics', icon: 'flaticon-heart', description: 'Nutrition helps maintain a balanced and healthy diet.' },
  { name: 'Dermatology', icon: 'flaticon-brain', description: 'Dermatology deals with skin-related issues and care.' },
  { name: 'Diabetology', icon: 'flaticon-walker', description: 'Diabetology specializes in diabetes management.' }
];

const items = [
    { text: ["Aayush Wellness Healthcare Offers World-Class Healthcare Services in Mumbai Suburbs with Affordable Medical Treatments", ] },
    { text: ["Aayush Wellness Healthcare Offers World-Class Healthcare Services in Mumbai Suburbs with Affordable Medical Treatments", ] },
    { text: ["Aayush Wellness Healthcare Offers World-Class Healthcare Services in Mumbai Suburbs with Affordable Medical Treatments", ] },
    { text: ["Aayush Wellness Healthcare Offers World-Class Healthcare Services in Mumbai Suburbs with Affordable Medical Treatments", ] },
    { text: ["Aayush Wellness Healthcare Offers World-Class Healthcare Services in Mumbai Suburbs with Affordable Medical Treatments", ] },
    { text: ["Aayush Wellness Healthcare Offers World-Class Healthcare Services in Mumbai Suburbs with Affordable Medical Treatments", ] },
    { text: ["Aayush Wellness Healthcare Offers World-Class Healthcare Services in Mumbai Suburbs with Affordable Medical Treatments", ] },
    { text: ["Aayush Wellness Healthcare Offers World-Class Healthcare Services in Mumbai Suburbs with Affordable Medical Treatments", ] },
    { text:["Aayush Wellness Healthcare Offers World-Class Healthcare Services in Mumbai Suburbs with Affordable Medical Treatments", ] },
  ];

const Specialities = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="relative container snipcss-ZeGaQ">
      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl h-auto md:h-[500px] text-center relative">
            <h3 className="text-2xl font-semibold mb-4">{selectedService.name}</h3>
            <p className="text-gray-600 mb-6">{selectedService.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      
      <div className="section-title">
        <h2>Our Specialities</h2>
      </div>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-lg-3 col-sm-6">
            <div className="single-services">
              <span className={service.icon} />
              <h3>{service.name}</h3>
              <button className="read-more" onClick={() => openModal(service)}>Learn More <i className="bx bx-plus" /></button>
              <div className="services-shape">
                <img src="https://www.xpresscure.com/img/services-card-shape.png" alt="Image" />
              </div>
            </div>
          </div>
        ))}
      </div>
   
    
    </div>


  );
};

export default Specialities;