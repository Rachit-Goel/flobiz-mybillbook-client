import React from "react";

import Navbar from "../components/Navbar";
import About from "../components/About";
// import Stats from "../components/Stats";
import Plans from "../components/Plans";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      {/* <Stats /> */}
      <Plans />
      <Footer />
    </>
  );
};

export default Home;
