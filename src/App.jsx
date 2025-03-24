import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Investment from "./pages/Investments";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import { useTranslation } from "react-i18next";
import "./styles/App.css"; 
import TravelPackages from "./pages/TravelPackages";
import ScrollToTop from "./components/layout/Header/components/ScrollToTop";
import BookTrip from "./pages/BookTrip";

const App = () => {
  const { t, i18n } = useTranslation("global");

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="travel-packages" element={<TravelPackages />} />
          <Route path="investment" element={<Investment />} />
          <Route path="book-trip" element={<BookTrip />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
