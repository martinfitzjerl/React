import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        open: false,
        form: {
          username: '',
          IDdocumentNumber: '',
          city: '',
          country: '',
          age: '',
          email: '',
          mobileNumber: '',
          password: '',
        }
      }
  }
  state = {

  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const data = this.state
    console.log("Final data", data)
  }

  handleChange = (event) => event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // componentDidMount(){
  //   this.setState({
  //     username: "test"
  //   })
  // }

  render() {
    const {username} = this.state
    console.log({username});
    return (
      <div>

        <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
          Register
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Register</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To Login to this website, please enter your email address and phone number here.
            </DialogContentText>
            <form onSubmit={this.handleSubmit} className= "Dialog-Form">
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="Username"
              type="text"
              name="username"
              //value={this.state.form.username}
              onChange={this.handleChange('username')}
              fullWidth
            />
            <TextField
              margin="dense"
              id="IDdocumentNumber"
              label="ID Document Number"
              type="text"
              name="IDdocumentNumber"
              //value={this.state.form.IDdocumentNumber}
              //onChange={this.handleChange('IDdocumentNumber')}
              fullWidth
            />
            <TextField
              margin="dense"
              id="city"
              label="City"
              type="text"
              name="city"
              //value={this.state.form.city}
              //onChange={this.handleChange('city')}
              fullWidth
            />
            <TextField
              margin="dense"
              id="country"
              label="Country"
              type="text"
              name="country"
              //value={this.state.form.country}
              //onChange={this.handleChange('country')}
              fullWidth
            />
            <TextField
              margin="dense"
              id="age"
              label="Age"
              type="text"
              name="age"
              //value={this.state.form.age}
              //onChange={this.handleChange('age')}
              fullWidth
            />
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="text"
              name="email"
              //value={this.state.form.email}
              //onChange={this.handleChange('email')}
              fullWidth
            />
            <TextField
              margin="dense"
              id="mobileNumber"
              label="Mobile Number"
              type="text"
              name="mobileNumber"
              //value={this.state.form.mobileNumber}
              //onChange={this.handleChange('mobileNumber')}
              fullWidth
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              name="password"
              //value={this.state.form.password}
              //onChange={this.handleChange('password')}
              fullWidth
            />
            </form>


          </DialogContent>
          
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Register
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}