import React from "react";

import { CoverVideo, Logo, NavBar } from "../../components";

import { Section } from "./styles";

const Home = () => {
  return (
    <Section id="home">
      <CoverVideo />
      <Logo />
      <NavBar />
    </Section>
  );
};

export default Home;
