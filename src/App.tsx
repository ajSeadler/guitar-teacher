// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Lessons from "./pages/Lessons";
import Contact from "./pages/Contact";
// import additional pages here (e.g., Lessons, About)

const App: React.FC = () => {
  return (
    <Router>
      <Layout />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
