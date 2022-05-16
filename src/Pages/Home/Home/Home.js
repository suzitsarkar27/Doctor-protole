import React from "react";
import Banner from "../Banner/Banner";
import Container from "../Container/Container";
import Infro from "../Infro/Infro";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Infro></Infro>
      <Services></Services>
      <Container></Container>
    </div>
  );
};

export default Home;
