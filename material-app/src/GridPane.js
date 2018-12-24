import React from 'react'
import Paper from '@material-ui/core/Paper'
import image2 from './images/cubePlaceholder2.png'
import image3 from './images/cubePlaceholder3.png'


const style = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10, marginLeft: 1000 }
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




<Paper style={style.Paper}>
		          {tileData.map(tile => (
				            <Paper key={tile.img} cols={tile.cols || 1}>
				              <img src={tile.img} alt={tile.title} />
											Right Pane
				            </Paper>
				          ))}
		        </Paper>


