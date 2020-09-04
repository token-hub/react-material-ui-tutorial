import React from 'react'
import { Paper, Typography } from '@material-ui/core';

const PaperComp = () => {
	return (
		<div>
			<Paper variant='elevation'>
				<Typography variant='h2' square={false} color='primary'> Text </Typography>
				<Typography variant='h2' color='primary'> Text </Typography>
			</Paper>
		</div>
	)
}

export default PaperComp