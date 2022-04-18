
import React from "react";
 import bgImage from '../../image/slide_4.jpg'
import "./LandingSection.css";

const LandingSection = () => {
  return (
    <div className="landing-section min-h-screen text-white"  style={{ backgroundImage: 'url(' + bgImage + ')'}} >
      <div className="text-section  w-full h-full flex justify-center relative  ">
        <div className=" absolute bottom-44 text-center text-3xl lg:text-4xl ml-0 lg:ml-11 space-y-4">
        <h1 className=""><span className="font-lavishly">Hi, My name is <span className="text-2xl lg:text-5xl ">Alex Novo</span> ,</span></h1>
        <h1 className=""> I’m a Professional <span className="text-red-500 block text-4xl lg:text-6xl  font-poppins">Photographer</span></h1>
        </div>
      </div>

    </div>

  );
};

export default LandingSection;
