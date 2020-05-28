import React from 'react';
import List from './List'
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='a'>A</div>
      <div id="b">

        
        <div className="column">
          <div id="c">
            <div id="ewrapper">
            <div id="e"></div>
            </div>
          </div>
          <div id="f">
            
            <List></List>
          </div>
        </div>
      
      </div>
      <div id="d">D</div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
