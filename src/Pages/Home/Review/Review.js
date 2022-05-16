import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          magni consequatur officiis nam mollitia accusantium eveniet saepe nemo
          quod cumque.
        </p>
      </div>
      <div className="flex items-center pl-10 mb-5">
        <div class="avatar">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://api.lorem.space/image/face?hash=3174" />
          </div>
        </div>

        <div className="ml-10">
          <h4>{review.name}</h4>
          <p>{review.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
