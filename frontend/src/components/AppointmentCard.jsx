import React from "react";
export default function AppointmentCard({
  patientName,
  doctorName,
  date,
  timeSlot,
  status,
}) {
  return (
    <div className="card">
      <h3>{patientName}</h3>
      <p>Doctor: {doctorName}</p>
      <p>Date: {date}</p>
      <p>Time: {timeSlot}</p>
      <span className={`status ${status}`}>{status}</span>
    </div>
  );
}
