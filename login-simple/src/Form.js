import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import classNames from 'classnames';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  button: {
    margin: '20px',
    height: '20px',
  },
  checkBox: {

  },
  passwordLink: {
    marginLeft: '100px',
  },
});



class TextFields extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            password: '',
            checkedA: false,
        }
    }

  handleChange = prop => event => {
      event.preventDefault()
      console.log(prop);
    this.setState({
      [prop]: event.target.value,
    });
  };

  handleChecked = prop => event => {
    event.preventDefault()
    console.log(prop);
  this.setState({
    [prop]: event.target.checked,
  });
};

  handleSubmit = name => event => {
    event.preventDefault()
      console.log({name});
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  clicked(){
      console.log("button clicked");
  }



  render() {
    const { classes } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className={classes.textField} noValidate autoComplete="off">
        <FormGroup>
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}

        />
        </FormGroup>
        <br/>



        <FormControl className={classNames(classes.margin, classes.textField)}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            name={this.state.password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <br/>

        <Checkbox
          className={classes.checkBox}
          checked={this.state.checkedA}
          onChange={this.handleChecked('checkedA')}
          value="checkedA"
        />
        Remember Me 
        <a className={classes.passwordLink} href="http://www.google.com">Forgot Password</a> 
        <br/>


        <br/>



        <Button onClick={this.clicked} variant="contained" className={classes.button}>
            Login
        </Button>
        
        <Button onClick={this.clicked} variant="contained" className={classes.button}>
            Sign Up
        </Button>
        

        
        
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);