import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import Specialities from './Specilalities'
import WhatsAppButton from './Whatsapp'
import Service from './service'
import Blog from './Blog'

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

const Heath = () => {
  return (
    <>
    <Header/>
    <Banner/>
   
    <Specialities/>
    <Service/>
      <Blog  items={items}/>
    <WhatsAppButton/>
    <Footer/>
    </>
  )
}

export default Heath