import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>🏥 MedCare Plus</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/booking">Booking</Link>
      </div>
    </nav>
  );
}