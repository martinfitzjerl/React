import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import image2 from './images/cubePlaceholder2.png'
import image3 from './images/cubePlaceholder3.png'


const style = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
}

const tileData = [
	{
		img: image2,
		title: 'Image',
		author: 'author',
		cols: 1,
    },
    
    {
		img: image3,
		title: 'Image',
		author: 'author',
		cols: 1,
	},


]

export default props =>
<Grid container>
<Grid item sm>



<Paper style={style.Paper}>
		          {tileData.map(tile => (
				            <Paper key={tile.img} cols={tile.cols || 1}>
				              <img src={tile.img} alt={tile.title} />
				            </Paper>
				          ))}
		        </Paper>
</Grid>
</Grid>

