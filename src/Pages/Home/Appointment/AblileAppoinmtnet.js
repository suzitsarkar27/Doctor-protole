import { format } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import AppoinmentService from "./AppoinmentService";

const AblileAppoinmtnet = ({ date }) => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h4 className="text-center text-secondary text-2xl mb-5">
        Available Appoinment on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {service.map((service) => (
          <AppoinmentService
            key={service._id}
            service={service}
          ></AppoinmentService>
        ))}
      </div>
    </div>
  );
};

export default AblileAppoinmtnet;
