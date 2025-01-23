// src/app/page.tsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './about/page';
import Projects from "./Projects/page";
import Contact from './contact/page';
import Footer from "./components/Footer";

const HomePage = () => (
  <main className="bg-background text-foreground min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Projects /> {/* This will render the Projects section */}
    <Contact />
    <Footer />
  </main>
);

export default HomePage;
