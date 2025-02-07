import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import Specialities from './Specilalities'

import Service from './Service'
import Blog from './Blog'
import Testimonal from './Testimonal'
import Banner2 from './Banner2'


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
    <Banner2/>
     <Specialities/>
    <Service/>
    <Blog  items={items}/>
    <Testimonal items={items}/>
    
    <Footer/>
    </>
  )
}

export default Health;
