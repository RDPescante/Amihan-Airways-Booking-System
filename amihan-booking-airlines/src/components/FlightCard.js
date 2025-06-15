import React from 'react';

function FlightCard({
  departTime,
  arriveTime,
  from,
  to,
  duration,
  code,
  price,
  note,
}) {
  return (
      <div className="flight-card border rounded p-3 mb-3">
      <div className="row align-items-center">
        <div className="col-md-2 text-center">
          <p className="flight-time mb-1">{departTime}</p>
          <p className="text-muted small">Depart - {from}</p>
        </div>
        <div className="col-md-1 text-center">
          <h3><i className="fa-solid fa-plane-departure"></i></h3>
        </div>
        <div className="col-md-2 text-center">
          <p className="flight-time mb-1">{arriveTime}</p>
          <p className="text-muted small">Arrive - {to}</p>
        </div>
        <div className="col-md-1 text-center">
          <p className="text-muted small">{duration}</p>
        </div>
        <div className="col-md-2 text-center">
          <p className="mb-0">{code}</p>
        </div>

        <div className="col-md text-end">
          {price && <p className="fw-bold text-primary mb-0">{price}</p>}
          {note && <p className="text-danger small">{note}</p>}
        </div>
      </div>
    </div>
  );
}

export default FlightCard;