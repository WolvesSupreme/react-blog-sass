import React from "react";
import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
//
import Navbar from "./components/sections/navbar/Navbar";
import Nahomi from "./components/sections/navbarScroll/Nahomi";
import Footer from "./components/sections/Footer";
import SocialIcons from "./components/Button/SocialIcons";
import Scrolltop from "./components/Button/Scrolltop";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Nahomi/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <SocialIcons/>
      <Scrolltop/>
      <Footer/>
    </Router>
  );
}

export default App;
