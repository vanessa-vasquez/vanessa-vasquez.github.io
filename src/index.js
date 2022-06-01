import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CollegiateLibrarians from './components/CollegiateLibrarians.js'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
          <Route path="/collegiate-librarians" element={<CollegiateLibrarians />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
