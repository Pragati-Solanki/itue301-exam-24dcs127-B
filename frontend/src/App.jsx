import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import DoctorsPage from "./pages/DoctorsPage";
import BookingPage from "./pages/BookingPage";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </div>
    </>
  );
}
