// @ts-nocheck
"use client";
import "./globals.css";
import "../../node_modules/98.css/style.css";
import React, { useEffect } from 'react';

export default function Page() {

  // Use a ref to access the draggable element
  const draggableRef = React.useRef(null);

  useEffect(() => {
    // Make the DIV element draggable after the component has been rendered
    if (draggableRef.current) {
      dragElement(draggableRef.current);
    }
  }, []);

  function dragElement(elmnt: any) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const header = document.getElementById(elmnt.id + "header");
    if (header) {
      // if present, the header is where you move the DIV from:
      header.onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e: Event | undefined) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e: Event | undefined) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  const [count, setCount] = React.useState(0);

  return (
    <div ref={draggableRef} id="test" className="moveable">
      <div id="testheader">
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
        </div>
      </div>
    </div>
  );
}