import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";


function App(){
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
        by 
        <a href="https://www.linkedin.com/in/deiriaimyers/" target="_blank" rel="noreferrer">Deiriai Myers</a> .
      </footer>
    </div>
  );
}

ReactDOM.render(<App />,
  document.getElementById('root')
);
