import React from 'react';

const FlightCard = ({ flight }) => {
  return (
    <div className="bg-white p-3 border rounded mb-3 hover:shadow-sm transition-shadow">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-4 align-items-center">
          <div className="text-center">
            <div className="fw-bold text-primary">{flight.departTime}</div>
            <div className="text-muted small">✈ Depart - {flight.departCode}</div>
          </div>
          <div className="text-center">
            <div className="fw-bold text-primary">{flight.arriveTime}</div>
            <div className="text-muted small">✈ Arrive - {flight.arriveCode}</div>
          </div>
          <div className="text-center">
            <div className="text-sm">{flight.duration}</div>
            <div className="text-muted small">{flight.flightNumber}</div>
          </div>
        </div>
        <div className="text-end">
          <div className="text-muted small">All-in Fare/guest</div>
          <div className="fw-bold text-primary">{flight.price}</div>
          {flight.seatsLeft && (
            <div className="small text-warning">{flight.seatsLeft}</div>
          )}
          <div className="text-end mt-1 text-secondary" style={{ fontSize: '0.75rem' }}>
            ▼
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;