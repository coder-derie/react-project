import React from 'react';
import ReactDOM from 'react-dom';

import Weather from "./Weather";


function App(){
  return(
    <div className="App">
      <Weather />
    </div>
  );
}

ReactDOM.render(<App />,
  document.getElementById('root')
);
