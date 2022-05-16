import React from "react";
import chaire from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen px-11 ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chaire} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold ">Your New Smile Starts Here!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
