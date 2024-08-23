import Header from "./Header";
import React from "react";
import { Suspense } from "react";
import SectionFirst from "./SectionFirst";
import SectionSecond from "./Second";
import SectionThird from "./SectionThird";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import Footer from "./Footer";
import HeaderLoad from "./HeaderLoad";
import SectionFload from "./SectionFload";
import FooterCopyright from "./FooterCopyright";
import SliderThird from "./SliderThird";

import Sliding from "./Slider";
import SectionSix from "./SectionSix";
import SectionSixAbove from "./SectionSixAbove";
import SectionMissionHome from "./SectionMissionHome";
import NewsletterSignup from "./NewsLetter";



import './index.css'
function Layout() {
  return (
    <>
 <Suspense fallback={<HeaderLoad />}>
    <Header  />
</Suspense>
<Sliding/>
<Suspense fallback={<SectionFload />}>
<SectionFirst/>
</Suspense>
   
   <SectionSecond />
   <SliderThird/>
  

   <SectionSixAbove/>
   <SectionFive/>
   <SectionSix></SectionSix>
   <NewsletterSignup/>
  <Footer />
  <FooterCopyright />
  </>
  );
}

export default Layout;