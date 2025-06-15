import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Flights from './pages/Flights';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Flights />} />
      
      </Routes>
    </Router>
  );
}

export default App;