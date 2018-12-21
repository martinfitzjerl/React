import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'


const style = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
}

export default props =>
<Grid container>
<Grid item sm>
<Paper style={style.Paper}>
Left Pane
</Paper>
</Grid>
<Grid item sm>
<Paper style={style.Paper}>
Right Pane
</Paper>
</Grid>
</Grid>