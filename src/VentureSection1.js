import React, { useEffect, useState } from "react";
import "./venture.css"; // Import the CSS file

const VentureSection1 = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation after 2 seconds
    setTimeout(() => {
      setAnimate(true);
    }, 1000);
  }, []);

  return (
    <div  className={`containe ${animate ? "animate" : ""}` }>
      <h1 class="text" >Digital. Brand. Accelerator.</h1>
     
      <div className="overlay"></div>
       {/* Get in Touch Button */}
       <button className="absolute bottom-10 left-10 md:left-24 flex items-center gap-2 px-6 py-3 text-black bg-white rounded-full text-lg font-medium hover:scale-105 transition">
  <span>➝</span> Get in touch
</button>

      {/* Scroll Down Button 
      <button className="absolute bottom-10 right-10 w-14 h-14 flex items-center justify-center rounded-full border border-white text-white text-2xl hover:scale-105 transition">
        ⬇
      </button>
      */}
    </div>
  );
};

export default VentureSection1;
