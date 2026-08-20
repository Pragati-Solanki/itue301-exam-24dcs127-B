import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../api';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`${API}/doctors`)
      .then((res) => setDoctors(res.data))
      .catch(() => setError('Unable to load doctors'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <main className="container"><h2>Loading...</h2></main>;
  if (error) return <main className="container"><h2>{error}</h2></main>;

  return (
    <main className="container">
      <h1>Doctors</h1>
      {doctors.map((doctor) => (
        <div className="doctor" key={doctor.id || doctor._id}>
          <h3>{doctor.name}</h3>
          <p>{doctor.specialisation}</p>
          <p>{doctor.available ? 'Available' : 'Unavailable'}</p>
        </div>
      ))}
    </main>
  );
}
