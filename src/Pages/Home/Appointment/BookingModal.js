import React from "react";
import { format } from "date-fns/esm";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { name, slots } = treatment;

  const handelSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slots.value;
    console.log(slot, name);
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="Bookingmodal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="Bookingmodal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            {" "}
            ✕{" "}
          </label>
          <h3 class="font-bold text-lg">{name}</h3>
          <form
            onSubmit={handelSubmit}
            className="grid grid-cols-1 gap-4 my-5 justify-items-center"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-xs"
            />
            <select name="slots" class="select select-bordered w-full max-w-xs">
              {slots?.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              placeholder="Type Your Name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Type Email"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone number"
              placeholder="Type Your Phone Nunber"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value={"Submit"}
              class="btn btn-secondary text-white w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
