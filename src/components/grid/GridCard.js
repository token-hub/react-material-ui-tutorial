import React from 'react'
import { Grid } from '@material-ui/core';
import CardComp from '../card/CardComp';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	padding: {
		padding: '20px',
		justifyContent: 'center'
	}
})

const GridCard = () => {

	const classes = useStyles();
	return (
		<Grid container spacing={4} className={classes.padding}>
			<Grid item xs={12} sm={6} >
				<CardComp />
			</Grid>

			<Grid item xs={12} sm={6}>
				<CardComp />
			</Grid>

			<Grid item xs={12} sm={6} >
				<CardComp />
			</Grid>
		</Grid>
	)
}

export default GridCard