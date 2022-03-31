import React from "react";

import Navbar from "../components/Navbar";
import About from "../components/About";
import Plans from "../components/Plans";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Plans />
      <Footer />
    </>
  );
};

export default Home;
