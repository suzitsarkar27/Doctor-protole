import React, { useState } from "react";
import Footer from "../../Sheard/Footer/Footer";
import AblileAppoinmtnet from "./AblileAppoinmtnet";
import AppoinmentBanner from "./AppoinmentBanner";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
      <AblileAppoinmtnet date={date}></AblileAppoinmtnet>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
