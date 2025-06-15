import React from 'react';
import '../index.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaAngleDoubleRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="home">
      <main className="main">
        <h1>Carried by the <span className="highlight">wind</span>, guided by Amihan.</h1>
        <div className="booking-form styled-booking-form">
          <div className="input-group">
            <FaMapMarkerAlt className="input-icon" />
            <input type="text" placeholder="Where To?" />
          </div>
          <div className="input-group">
            <FaCalendarAlt className="input-icon" />
            <input type="text" placeholder="DD/MM/YY" onFocus={e => (e.target.type = 'date')} onBlur={e => (e.target.type = 'text')} />
          </div>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="number" placeholder="Number Of Person" min="1" />
          </div>
          <button className="book-now styled-book-now">
            BOOK NOW <FaAngleDoubleRight className="arrow-icon" />
          </button>
        </div>
      </main>
    </div>
  );
}