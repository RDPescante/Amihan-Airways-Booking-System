import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


// Page
import AboutUs from './pages/AboutUs/About';
import Deals from './pages/Deals/Deals';

import './index.css';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
  <>

    <App />

    <Deals />
    <AboutUs />
    
  
  </>
  </React.StrictMode>

)





