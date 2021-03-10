import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App(){
  return(
    <div className="App">
      <div className="container">
      <Weather />
      </div>
      <footer className="footer">
        <a
          href="https://github.com/coder-derie/react-project"
          target="_blank" rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by {" "}
        <a href="https://www.linkedin.com/in/deiriaimyers/" target="_blank" rel="noreferrer">Deiriai Myers</a> .
      </footer>
    </div>
  );
}

