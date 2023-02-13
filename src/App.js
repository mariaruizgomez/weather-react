import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="linkedin.com/in/carmenruizgomez"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Maria Ruiz
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/mariaruizgomez/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
