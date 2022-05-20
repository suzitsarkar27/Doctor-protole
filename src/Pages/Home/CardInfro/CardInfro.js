import React from "react";

const CardInfro = ({ img, titel, bgColor }) => {
  return (
    <div className={`card card-side bg-base-100shadow-xl mb-10 ${bgColor}`}>
      <figure className="pl-5">
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{titel}</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );
};

export default CardInfro;
