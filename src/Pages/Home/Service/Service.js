import React from "react";

const Service = ({ img, titel }) => {
  return (
    <div>
      <div className="card card-compact mx-w:lg bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-center fs-2">{titel}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
