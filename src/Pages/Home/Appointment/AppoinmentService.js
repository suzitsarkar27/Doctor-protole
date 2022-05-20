import React from "react";

const AppoinmentService = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card mx-w:lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]} </span>
          ) : (
            <span className="text-red-500">No Slot Abailable</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"}Available
        </p>

        <div className="card-actions justify-center">
          <label
            htmlFor="Bookingmodal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-secondary text-white"
          >
            {" "}
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentService;
