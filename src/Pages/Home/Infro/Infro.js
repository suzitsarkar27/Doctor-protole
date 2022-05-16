import React from "react";
import CardInfro from "../CardInfro/CardInfro";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Infro = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 text-white gap-5">
      <CardInfro
        bgColor="bg-gradient-to-r from-secondary to-primary "
        titel="Opning Hours"
        img={clock}
      ></CardInfro>
      <CardInfro
        bgColor="bg-accent"
        titel="Visit our location"
        img={marker}
      ></CardInfro>
      <CardInfro
        bgColor="bg-gradient-to-r from-secondary to-primary "
        titel="Contact us now"
        img={phone}
      ></CardInfro>
    </div>
  );
};

export default Infro;
