import React from 'react'
import { Paper, Typography, Button, Grid } from '@material-ui/core';

const DarkMode = () => {
	return (
		<Paper style={{ height: '100vh' }}>
			<Grid direction='column' container>
				<Typography variant='h2'> This is my App! </Typography>
				<Button fullWidth variant='containedPrimary'> This is a button </Button>
				<Button fullWidth variant='containedSecondary'> This is another button </Button>
			</Grid>
		</Paper>
	)
}

export default DarkMode