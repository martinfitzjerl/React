import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import Radio from '@material-ui/core/Radio';
import GridList from './GridList';



const styles = {
	  root: {
		      flexGrow: 1,
		    },
	  grow: {
		      flexGrow: 1,
		    },
	  menuButton: {
		      marginLeft: -12,
		      marginRight: 20,
		    },
};

function ButtonAppBar(props) {
	  const { classes } = props;
	  return (
		      <div className={classes.root}>
		        <AppBar position="static">
						<Header></Header>
						<Avatar></Avatar>
		          <Toolbar>
		            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
		              <MenuIcon />
		            </IconButton>
		            <Typography variant="h6" color="inherit" className={classes.grow}>
		              news
		            </Typography>
		            <Button color="inherit">Login</Button>
		          </Toolbar>
		        </AppBar>
						<div>
					<Radio/>
					</div>
					<Footer></Footer>
					<GridList></GridList>
		      </div>

		    );
}

ButtonAppBar.propTypes = {
	  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
