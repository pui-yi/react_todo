import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRoom from "./components/MyRoom";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className='container'>
    <MyRoom />
  </div>
);