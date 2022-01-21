import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/mastermind/Mastermind" element={<Mastermind />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Index />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
