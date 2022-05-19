import { format } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import AppoinmentService from "./AppoinmentService";
import BookingModal from "./BookingModal";

const AblileAppoinmtnet = ({ date }) => {
  const [service, setService] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/data`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h4 className="text-center text-secondary text-2xl mb-5 mt-10">
        Available Appoinment on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {service.map((service) => (
          <AppoinmentService
            key={service._id}
            setTreatment={setTreatment}
            service={service}
          ></AppoinmentService>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          date={date}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AblileAppoinmtnet;
