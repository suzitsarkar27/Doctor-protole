import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "../Review/Review";

const AppointmentReviews = () => {
  const reviews = [
    {
      _id: 1,
      name: "winson Herry",
      review: "",
      location: "california",
      img: people1,
    },
    {
      _id: 1,
      name: "winson Herry",
      review: "",
      location: "california",
      img: people2,
    },
    {
      _id: 1,
      name: "winson Herry",
      review: "",
      location: "california",
      img: people3,
    },
  ];
  return (
    <section className="my-24">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary">Testimonial</h1>
          <h1 className="text-4xl">What Our Patients Says</h1>
        </div>

        <div className="mb-20">
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default AppointmentReviews;
