import React from "react";
import Service from "../Service/Service";
import flaioud from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import teeth from "../../../assets/images/whitening.png";

const Services = () => {
  return (
    <div>
      <div className="mb-20 ">
        <h1 className="text-center mt-20 text-lg font-bold text-secondary">
          OUR SERVICE
        </h1>
        <h1 className="text-center text-2xl text-accent font-normal">
          Services We Provide
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Service titel="Fluoride Treatment" img={flaioud}></Service>
        <Service titel="Cavity Filling" img={cavity}></Service>
        <Service titel="Teeth Whitening" img={teeth}></Service>
      </div>
    </div>
  );
};

export default Services;
