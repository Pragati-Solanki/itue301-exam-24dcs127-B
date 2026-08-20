import React from "react";
import AppointmentCard from "../components/AppointmentCard";

export default function HomePage() {
  const appointment = {
    patientName: "Pragati Solanki",
    doctorName: "Dr. Mehta",
    date: "22 Aug 2026",
    timeSlot: "10:00 AM",
    status: "confirmed",
  };

  return (
    <>
      <h1>Hospital Appointment System</h1>
      <p>Welcome to MedCare Plus.</p>

      <AppointmentCard {...appointment} />
    </>
  );
}