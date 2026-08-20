import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";


import "./App.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function App() {

  const [darkMode, setDarkMode] =
    useState(false);

  return (
    <div
      className={
        darkMode
          ? "app dark"
          : "app"
      }
    >

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>

        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />

      </main>

      <Footer />

    </div>
  );
}

export default App;