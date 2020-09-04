import React from 'react'
import { Typography, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';

const useStyles = makeStyles( theme => ({
	button: {
		background: 'blue',
		[theme.breakpoints.up('sm')]: {
			background: 'red'
		}
	}
}));

const Theming = () => {
	const theme = useTheme();
	const classes = useStyles();

	return (
		<div>
			<Typography variant='h2' color='primary'> Hello world </Typography>
			<Button variant='containedPrimary'> Text </Button>
			<Button className={classes.button} variant='containedSecondary'> Text </Button>
		</div>
	)
}

export default Theming