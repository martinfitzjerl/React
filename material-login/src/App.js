import React, { Component } from 'react';
import logo from './investorCointwo.svg';
import './App.css';
import InputField from './InputField'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome Investors, please login.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            New Investors
          </a>
        </header>
        <InputField/>
      </div>

    );
  }
}

export default App;
