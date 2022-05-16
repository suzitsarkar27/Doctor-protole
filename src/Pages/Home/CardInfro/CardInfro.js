import React from "react";

const CardInfro = ({ img, titel, bgColor }) => {
  return (
    <div class={`card card-side bg-base-100 shadow-xl ${bgColor}`}>
      <figure className="pl-5">
        <img src={img} alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{titel}</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );
};

export default CardInfro;
