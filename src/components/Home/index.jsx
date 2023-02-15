import React from "react";
import GenCorousel from "../corousel";
import HouseCard from "../HouseCard";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <GenCorousel />
      <HouseCard />
    </Container>
  );
};

export default Home;
