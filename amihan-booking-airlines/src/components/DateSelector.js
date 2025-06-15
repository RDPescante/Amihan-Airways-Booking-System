import React from 'react';

const DateSelector = ({ dates, selectedDate, onDateSelect, title }) => {
  return (
    <div className="mb-4">
      <h6 className="text-uppercase text-sm font-semibold mb-2">{title}</h6>
      <div className="d-flex align-items-center gap-2 overflow-auto">
        <div className="bg-gray-200 rounded-pill px-3 py-2 text-center">
          <span className="fw-bold">&lt;</span>
        </div>
        {dates.map((date, index) => (
          <div
            key={index}
            className={`min-w-[140px] text-center px-3 py-2 rounded border cursor-pointer ${
              selectedDate === date.day
                ? 'bg-white border-dark fw-bold'
                : 'bg-gray-200 border-gray-300'
            }`}
            onClick={() => onDateSelect(date.day)}
          >
            <div className="text-uppercase text-xs">{date.day}</div>
            <div className="text-sm">
              {date.price ? (
                <strong>{date.label}</strong>
              ) : (
                <span className="text-muted">NO FLIGHTS</span>
              )}
            </div>
          </div>
        ))}
        <div className="bg-gray-200 rounded-pill px-3 py-2 text-center">
          <span className="fw-bold">&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default DateSelector;