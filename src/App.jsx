import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import TourServices from "./pages/TourServices";
import Investment from "./pages/Investments";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import "./styles/App.css"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tour-services" element={<TourServices />} />
          <Route path="investment" element={<Investment />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
