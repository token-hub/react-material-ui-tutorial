import React from 'react'
import { Typography, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';

const useStyles = makeStyles({
		root: {
			flex: 1
		}
	})

const Header = () => {
	const classes = useStyles();
	
	return (
		<AppBar position='static'>
			<Toolbar >
				<Typography className={classes.root}> Header </Typography>
				<AcUnitRoundedIcon /> 
			</Toolbar>
		</AppBar>
	)
}

export default Header