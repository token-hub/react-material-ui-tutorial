import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

const GridComponent = () => {
	return (
		<Grid container direction='column'>
			<Typography color='primary' variant='h3'>Grid Component</Typography>
			<Grid item>
				Header
			</Grid>

			<Grid item container>
				<Grid item xs={0} sm={2} />
				<Grid item xs={12} sm={8}>
					Contents
				</Grid>
				<Grid item xs={0} sm={2} />
			</Grid>

		</Grid>
	)
}

export default GridComponent