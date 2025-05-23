import React from "react";
import "./styles/App.css"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Investment from "./pages/Investments";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import TravelPackages from "./pages/TravelPackages";
import TravelPackageDetails from "./pages/TravelPackageDetails";
import ScrollToTop from "./components/layout/Header/components/ScrollToTop";
import DestinationDetails from "./pages/DestinationDetails";
import BookTrip from "./pages/BookTrip";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="travel-packages" element={<TravelPackages />} />
          <Route path="investments" element={<Investment />} />
          <Route path="book-trip" element={<BookTrip />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/travel-package-details" element={<TravelPackageDetails />} />
          <Route path="/destination/:name" element={<DestinationDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
