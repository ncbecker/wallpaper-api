import React from "react";
import "./Button.css";

export default function Button({ onClick, innerText }) {
  return (
    <button className="btn" onClick={onClick}>
      {innerText}
    </button>
  );
}
