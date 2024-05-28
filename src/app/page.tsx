"use client";
import { useEffect } from 'react';
import ReactDOM from "react-dom";
import React from 'react';
import { button, window } from '98.css';

export default function Page() {
  useEffect(() => {
    // Change the background color for both body and html elements
    document.body.style.backgroundColor = 'rgb(50, 100, 113)';
    document.documentElement.style.backgroundColor = 'rgb(50, 100, 113)';

    // Ensure the body and html take full height
    document.body.style.height = '100%';
    document.documentElement.style.height = '100%';
    const nextElement = document.getElementById('__next');
    if (nextElement) {
      nextElement.style.height = '100%';
    }

    // Cleanup: Reset the background color and height when the component unmounts
    return () => {
      document.body.style.backgroundColor = '';
      document.documentElement.style.backgroundColor = '';
      document.body.style.height = '';
      document.documentElement.style.height = '';
      if (nextElement) {
        nextElement.style.height = '';
      }
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts
  
  const [count, setCount] = React.useState(0);
  return (
    <div style={{ width: 300 }} className="window">
      <div className="title-bar">
        <div className="title-bar-text">Counter</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body">
        <p style={{ textAlign: "center" }}>Current count: {count}</p>
        <div className="field-row" style={{ justifyContent: "center" }}>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)}>0</button>
        </div>
      </div>
    </div>
  );
}
