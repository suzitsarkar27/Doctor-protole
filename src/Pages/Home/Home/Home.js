import React from "react";
import AppointmentReviews from "../Testmoniel/Testmonial";
import Appointments from "../AppoinmentReviews/AppoinmentReviews";
import Banner from "../Banner/Banner";
import Container from "../Container/Container";
import Infro from "../Infro/Infro";
import Services from "../Services/Services";
import ContactsFrom from "../ContactsFrom/ContactsFrom";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Infro></Infro>
      <Services></Services>
      <Container></Container>
      <Appointments></Appointments>
      <AppointmentReviews></AppointmentReviews>
      <ContactsFrom></ContactsFrom>
    </div>
  );
};

export default Home;
