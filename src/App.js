import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Layout from "./Layout";
import Pdf from "./Pdf";
import AdminPage from "./AdminPage";
import LifeCycle from "./LifeCycle";
import AboutUs from "./AboutUs";
import WaterRisk from "./WaterRisk";
import Ayurveda from "./Ayurveda";
import ErrorPage from "./ErrorPage";
import CsrAtAayush from "./CsrAtAayush";
import Investors from "./Investors";
import CompanyIntro from "./CompanyIntro";
import ModernScience from "./ModernScience";
import HealthWellness from "./HealthWellness";
import MissionVision from "./MissionVision";
import Malnutrition from "./Malnutrition";
import HealthCheck from "./HealthCheck";
import OurProduct from "./OurProduct";
import Sustnability from "./Sustnability";
import PressRelease from "./PressRelease";
import Career from "./Career";
import Support from "./Support";
import InTheNews from "./InTheNews";
import Library from "./Library";
import PrivacyPolicy from "./PrivacyPolicy";
import ProductCarousel from "./ProductPage";
import ProductGummies from "./ProductPageGummies";
import ProductPageSleep from "./ProductPageSleep";
import AayushVenture from "./AayushVenture";
import Health from "./Health"
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";
import Blog4 from "./Blog4";

import './index.css'
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route  path="/" element={<Layout />}/>
        <Route  path="sustainability" element={<Sustnability />}/>
        <Route  path="newsroom/in-the-news" element={<PressRelease/>}/>
        <Route  path="/career" element={<Career />}/>
        <Route  path="support" element={<Support />}/>
        <Route  path="newsroom/press-release" element={<InTheNews />}/>
        <Route  path="newsroom/library" element={<Library />}/>
        <Route  path="privacy-policy" element={<PrivacyPolicy />}/>
        <Route  path="gummies-sleep" element={<ProductPageSleep />}/>

        <Route  path="pan-masala" element={<ProductCarousel />}/>

        <Route  path="gummies" element={<ProductGummies />}/>


        
<Route  path="growth-accelerator" element={<AayushVenture />}/>

  <Route  path="health" element={<Health />}/>
  <Route path="/Blog1" element={<Blog1 />} />
  <Route path="/Blog2" element={<Blog2 />} />
   <Route path="/Blog3" element={<Blog3 />} />
   <Route path="/Blog4" element={<Blog4 />} />

        <Route  path="ourproduct" element={<OurProduct />}/>
        <Route path="csr-at-aayush/health-check" element={<HealthCheck/>}/>
        <Route path="csr-at-aayush/malnutrition" element={<Malnutrition/>}/>
        <Route path="investors" element={<Investors/>}/>
        <Route path="wellness/modern-science" element={<ModernScience/>}/>
        <Route path="about/company-intro" element={<CompanyIntro/>}/>
        <Route  path="wellness/health-wellness" element={<HealthWellness/>}/>
        <Route  path="about/mission-vision" element={<MissionVision/>}/>
  

        <Route path="ayurveda" element={<Ayurveda/>}/>
        <Route path="sustainability/csr-at-aayush" element={<CsrAtAayush/>}/>
        <Route path="ayurveda" element={<Ayurveda/>}/>
        <Route path="sustainability/waterrisk" element={<WaterRisk/>}/>
        <Route path="about" element={<AboutUs/>}/>
        <Route path="pdf" element={<Pdf/>}/>
        <Route path="sustainability/lifecycle" element={<LifeCycle/>}/>
        <Route path="adminpage" element={<AdminPage/>}/>
        <Route  path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  </>
  );
}


export default App;
