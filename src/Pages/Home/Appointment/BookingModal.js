import React from "react";
import { format } from "date-fns/esm";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../UseFirebse/Firebase.init";
import { success } from "daisyui/src/colors";
import { toast } from "react-toastify";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const [user, loading] = useAuthState(auth);
  const formattedDate = format(date, "pp");

  const handelSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slots.value;
    const bookin = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      pasient: user.email,
      pasientName: user.displayName,
      phone: event.target.phone.value,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast(`Appointment is set${formattedDate}at ${slot}`);
        } else {
          toast.error(
            `You Already have and appointment on${data.bookin?.date}at ${date.bookin?.slot}`
          );
        }
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="Bookingmodal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="Bookingmodal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            {" "}
            ✕{" "}
          </label>
          <h3 className="font-bold text-lg">{name}</h3>
          <form
            onSubmit={handelSubmit}
            className="grid grid-cols-1 gap-4 my-5 justify-items-center"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slots"
              className="select select-bordered w-full max-w-xs"
            >
              {slots?.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              value={user?.displayName}
              disabled
              placeholder="Type Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email}
              placeholder="Type Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="Type Your Phone Nunber"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value={"Submit"}
              className="btn btn-secondary text-white w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
