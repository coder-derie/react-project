import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App(){
  return(
    <div className="App">
      <div className="container">
      <Weather defaultCity="Toronto"/>
      </div>
      <footer className="footer">
        Project designed by{" "}
        <a href="https://www.linkedin.com/in/deiriaimyers/" target="_blank" rel="noreferrer">
          Deiriai Myers
          </a>{" "} 
         and is open-sourced on 
        {" "} 
        <a
          href="https://github.com/coder-derie/react-project"
          target="_blank" rel="noreferrer"
        >
         Github
        </a> {" "}
        and hosted on {" "}
        <a href="https://elegant-volhard-77b09f.netlify.app/" target="_blank" rel="noreferrer">
          Netlify
        </a>
      </footer>
    </div>
  );
}

