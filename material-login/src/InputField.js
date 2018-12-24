import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});


class OutlinedInputAdornments extends React.Component {
  state = {
    username: '',
    IDdocumentNumber: '',
    city: '',
    country: '',
    age: '',
    email: '',
    mobileNumber: '',
    password: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          id="outlined-adornment-Username"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Username"
          value={this.state.username}
          onChange={this.handleChange('username')}


        />
          <TextField
          id="outlined-adornment-IDdocumentNumber"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="IDdocumentNumber"
          value={this.state.IDdocumentNumber}
          onChange={this.handleChange('IDdocumentNumber')}


        />
          <TextField
          id="outlined-adornment-city"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="city"
          value={this.state.city}
          onChange={this.handleChange('city')}


        />
          <TextField
          id="outlined-adornment-country"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="country"
          value={this.state.country}
          onChange={this.handleChange('country')}


        />
          <TextField
          id="outlined-adornment-age"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="age"
          value={this.state.age}
          onChange={this.handleChange('age')}


        />
          <TextField
          id="outlined-adornment-email"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="email"
          value={this.state.email}
          onChange={this.handleChange('email')}


        />
          <TextField
          id="outlined-adornment-mobileNumber"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="mobileNumber"
          value={this.state.mobileNumber}
          onChange={this.handleChange('mobileNumber')}


        />
        <TextField
          id="outlined-adornment-password"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          type={this.state.showPassword ? 'text' : 'password'}
          label="Password"
          value={this.state.password}
          onChange={this.handleChange('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    );
  }
}

OutlinedInputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedInputAdornments);