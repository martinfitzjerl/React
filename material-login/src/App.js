import React, { Component } from 'react';
import logo from './investorCointwo.svg';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import InputField from './InputField';
import Avatar from './Avatar';
import AppBar from './AppBar';
import Fab from '@material-ui/core/Fab';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
      <Avatar/>
      <AppBar/>
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
        <form>
        <div>
      <Fab variant="extended" aria-label="Login" color="primary" >
        <AccountBoxIcon   />
        LOGIN
        
      </Fab>

    </div>

        </form>
      </div>

    );
  }
}


export default withStyles(styles)(App);
