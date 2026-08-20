import React from "react";
import { useState } from 'react';

export default function BookingPage() {
  const [patient, setPatient] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <main className="container">
      <h1>Book Appointment</h1>
      <input placeholder="Patient Name" value={patient} onChange={(event) => setPatient(event.target.value)} />
      <input placeholder="Doctor Name" value={doctor} onChange={(event) => setDoctor(event.target.value)} />
      <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
      <input placeholder="Time Slot" value={time} onChange={(event) => setTime(event.target.value)} />
      <div className="preview">
        <h3>Live Preview</h3>
        <p>Patient: {patient}</p>
        <p>Doctor: {doctor}</p>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
      </div>
    </main>
  );
}
