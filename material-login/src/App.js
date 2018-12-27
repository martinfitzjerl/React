import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InputField from './InputField';
import Avatar from './Avatar';
import AppBar from './AppBar';
import FormDialog from './FormDialog';
import logo from './investorCointwo.svg';




import DialogBox from './DialogBox';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      investments: [
        {
          title: 'Account One',
          category: 'Vegetables'
        },
        {
          title: 'Account Two',
          category: 'Meats'
        },
        {
          title: 'Account Three',
          category: 'Grains'
        },

      ]
    }
  }
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
          <DialogBox/>
          <br />
          <div className="App-formdialog">
          <FormDialog />
          </div>
        </header>
        <InputField/>


        <div>
      <Fab variant="extended" aria-label="Login" color="primary" >
        <AccountBoxIcon   />
        LOGIN
      </Fab>
    </div>

    <br/>
    <div className="App-Investments">

    </div>


      </div>

    );
  }
}


export default withStyles(styles)(App);
