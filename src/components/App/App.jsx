import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

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