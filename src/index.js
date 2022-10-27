import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './components/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);


// 1) Work on basic layout/CSS
//   - Screen section 
//   - buttons wihtout the need for bootstrap grid via CSS
// 2) Functional
//   - State to track inputs and display 

