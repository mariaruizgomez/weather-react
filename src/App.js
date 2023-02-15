import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Las Vegas" />
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
          and is open-sourced on{" "}
          <a
            href="https://github.com/mariaruizgomez/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://ephemeral-bublanina-84ad9e.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
