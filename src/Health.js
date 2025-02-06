import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import Specialities from './Specilalities'

import Service from './Service'


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

const Health = () => {
  return (
    <>
    <Header/>
    <Banner/>
   
    <Specialities/>
    <Service/>
     

    <Footer/>
    </>
  )
}

export default Health
