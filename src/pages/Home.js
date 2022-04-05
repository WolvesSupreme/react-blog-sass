import React from "react";
import Contact from "../components/pages/contacto";
import About from "../components/pages/Home/About";
import Courses from "../components/pages/Home/Courses";
import Features from "../components/pages/Home/Features";
import Header from "../components/pages/Home/Header";
import Offer from "../components/pages/Home/Offer";
const Home = () => {
  return (
    <>
      <Header />
      <About/>
      <Features/>
      <Courses/>
      <Offer/>
      <Contact/>
    </>
  );
};

export default Home;
