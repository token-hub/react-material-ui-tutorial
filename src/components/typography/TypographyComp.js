import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	h2: {
		fontSize: '200px'
	}
})

const TypographyComp = () => {

	const classes = useStyles();

	return (
		<div>
			<Typography variant='caption' color='error' gutterBottom align='center'> Text </Typography>
			<Typography variant='h2' classes={{ h2: classes.h2 }} color='primary' gutterBottom align='center'> Text </Typography>
		</div>
	)
}

export default TypographyComp
