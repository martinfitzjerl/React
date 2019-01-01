import React, { Component } from 'react';
import Form from './Form';
import logo from './images/greenfields.png';
import sideimage from './images/sideimage.bmp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <img className="App-side" alt='sideimage' src={sideimage}>
        </img>


        <div className="App-header">
          <img className="App-logo" alt='logo' src={logo}></img>

          <h1>
            Few Nickels Agriculture
          </h1>
        </div>



        <div className="App-main">
          <p>Welcome please login or register!</p>
          <br/>
          <Form/>
        </div>


        <div className="App-privacyLink">
          <a href="http://www.google.com">Terms of use. Privacy Policy</a>
        </div>
          
      </div>



    );
  }
}

export default App;
