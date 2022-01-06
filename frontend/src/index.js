import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar";
import Packages from "./components/Packages";


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById('navbar')
);


ReactDOM.render(
  <React.StrictMode>
    <Packages />
  </React.StrictMode>,
  document.getElementById('packages')
);