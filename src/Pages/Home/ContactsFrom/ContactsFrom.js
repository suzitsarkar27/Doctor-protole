import React from "react";
import "./ContactFrom.css";

const ContactsFrom = () => {
  return (
    <section className="Background-img">
      <div className="text-center pt-10">
        <h4 className="text-2xl text-secondary font-normal">Contact Us</h4>
        <h1 className="text-4xl text-white">Stay connected with us</h1>
      </div>
      <div className="text-center flex">
        <form action="# " className="mt-10 mx-auto">
          <input
            type="email"
            placeholder="Type Your Email"
            className="input input-bordered input-info w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type Subject"
            className="input input-bordered input-info w-full max-w-xs mt-5"
          />
          <textarea
            className="textarea textarea-info w-full max-w-xs mt-5"
            placeholder="Bio"
          ></textarea>
          <br />
          <div className="text-center mt-5">
            <button className="mx-auto btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactsFrom;
