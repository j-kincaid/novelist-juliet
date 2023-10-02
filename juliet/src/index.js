import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Menu pages/components
// Home
// About > Bio
// Books >
// Calendar Mysteries
// Cinderella, P.I. Mysteries
// Death in Shining Armor
// Novel Basics

// Contact
// New Releases
// Newsletter Signup

function About() {
  return <h2>About</h2>;
}

export default About;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<About />);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
