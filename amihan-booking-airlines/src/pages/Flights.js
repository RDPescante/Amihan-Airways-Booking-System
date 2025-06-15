import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FlightCard from '../components/FlightCard';

const dates = [
  { date: 'SUN 18 May', available: false },
  { date: 'MON 19 May', available: false },
  { date: 'TUE 20 May', available: false },
  { date: 'WED 21 May', available: false },
  { date: 'THU 22 May', available: false },
];

function Flights() {
  const [departingFlights, setDepartingFlights] = useState([]);
  const [returnFlights, setReturnFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch both departing and return flights in parallel
    Promise.all([
      axios.get('http://localhost:4000/flights/departing'),
      axios.get('http://localhost:4000/flights/return'),
    ])
      .then(([departRes, returnRes]) => {
        setDepartingFlights(departRes.data);
        setReturnFlights(returnRes.data);
      })
      .catch((err) => console.error('Error fetching flights:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading flights...</p>;
  }

  return (
    <div className="container pt-5">
      {/* Departing Flights */}
      <section className="mb-5">
        <h4 className="fw-bold text-uppercase">Select Your Departing Flight</h4>
        <h2 className="text-primary">MNL ✈ BCD</h2>
        <div className="d-flex gap-3 overflow-auto py-4">
          {dates.map((d, i) => (
            <div className="border rounded p-3 text-center min-w-150" key={i}>
              <strong>{d.date}</strong>
              <p className="mb-0 text-muted small">No Flights</p>
            </div>
          ))}
        </div>
        {departingFlights.length ? (
          departingFlights.map((flight, index) => (
            <FlightCard key={index} {...flight} />
          ))
        ) : (
          <p>No departing flights found.</p>
        )}
      </section>

      {/* Return Flights */}
      <section>
        <h4 className="fw-bold text-uppercase">Select Your Return Flight</h4>
        <h2 className="text-primary">BCD ✈ MNL</h2>
        <div className="d-flex gap-3 overflow-auto py-4">
          {dates.map((d, i) => (
            <div className="border rounded p-3 text-center min-w-150" key={i}>
              <strong>{d.date}</strong>
              <p className="mb-0 text-muted small">No Flights</p>
            </div>
          ))}
        </div>
        {returnFlights.length ? (
          returnFlights.map((flight, index) => (
            <FlightCard key={index} {...flight} />
          ))
        ) : (
          <p>No return flights found.</p>
        )}
      </section>
    </div>
  );
}

export default Flights;