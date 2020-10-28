import React from "react";
import "./Button.css";

export default function Button({ onClick, innerText }) {
  return <button onClick={onClick}>{innerText}</button>;
}
