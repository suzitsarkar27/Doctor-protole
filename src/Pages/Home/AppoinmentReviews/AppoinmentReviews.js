import React from "react";
import img from "../../../assets/images/doctor.png";
import bg from "../../../assets/images/bg.png";
const Appointments = () => {
  return (
    <div className="footer p-10 bg-neutral text-neutral-content mt-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="hidden lg:block">
          <img src={img} className="max-w-sm rounded-lg  mt-[-150px]" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-secondary">Appointment</h1>
          <h1 className="text-4xl font-bold">Make an appointment Today</h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
