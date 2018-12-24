import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer';
import Button from './Button';
import GridList from './GridList';
import SimpleList from './SimpleList';
import RightPane from './RightPane';
import LeftPane from './LeftPane';




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
						<Radio></Radio>

						<GridList>

						</GridList>
						
						<SimpleList/>


						<Grid container>
						<Grid item sm>
						<LeftPane/>	
						</Grid>					
						<Grid item sm>
						<RightPane/>
						</Grid>
						</Grid>




<Footer/>

    </div>





					



										

		    );
}




ButtonAppBar.propTypes = {
	  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
