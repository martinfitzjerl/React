import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
//import tileData from './tileData';
import images from './images/crystal.png'


const styles = theme => ({
	  root: {
		      display: 'flex',
		      flexWrap: 'wrap',
		      justifyContent: 'space-around',
		      overflow: 'hidden',
		      backgroundColor: theme.palette.background.paper,
		    },
	  gridList: {
			width: 500,
			height: 450,
		    },
});


const tileData = [
	{
		img: images,
		title: 'Image',
		author: 'author',
		cols: 1,
	},
	{
		img: images,
		title: 'Image',
		author: 'author',
		cols: 1,
	},
	{
		img: images,
		title: 'Image',
		author: 'author',
		cols: 1,
	},
	{
		img: images,
		title: 'Image',
		author: 'author',
		cols: 1,
	}


]
/**
 *  * The example data is structured as follows:
 *   *
 *    * import image from 'path/to/image.jpg';
 *     * [etc...]
 *      *
 *       * const tileData = [
 *        *   {
 *         *     img: image,
 *          *     title: 'Image',
 *           *     author: 'author',
 *            *     cols: 2,
 *             *   },
 *              *   {
 *               *     [etc...]
 *                *   },
 *                 * ];
 *                  */





function ImageGridList(props) {
	  const { classes } = props;

	  return (
	      <div className={classes.root}>
		        <GridList cellHeight={200} className={classes.gridList} cols={3}>
		          {tileData.map(tile => (
				            <GridListTile key={tile.img} cols={tile.cols || 1}>
				              <img src={tile.img} alt={tile.title} />
				            </GridListTile>
				          ))}
		        </GridList>
		      </div>
		        );
			}

			ImageGridList.propTypes = {
			  classes: PropTypes.object.isRequired,
			};

export default withStyles(styles)(ImageGridList);
