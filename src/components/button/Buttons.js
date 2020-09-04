import React from 'react'
import { Button, Typography } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import Theme from '../../theme/Theme';
import PropTypes from 'prop-types'

const useStyles = makeStyles({
	buttonStyle: cool => {

		if (cool) {
			return {
				color: 'white',
				background: 'blue'
			}
		}

		return {
			color: 'white',
			background: 'red'
		}

	}
})

const Buttons = ({ cool }) => {

const classes = useStyles(cool);

	return (
		<div>
			<Button size='large' variant='outlinedPrimary'> Text </Button>
			<Button size='small' variant='contained' color='primary'> Text </Button>
			{
			/*
			<Button fullWidth className={classes.buttonStyle}> Text </Button>
			<Typography color='primary' variant='h3'>Hello</Typography>
			<ThemeProvider Theme={Theme}>
				<Button variant='outlinedPrimary'> Sample Text </Button>
				<Button variant='outlinedSecondary'> Sample Text </Button>
				<Button variant='containedPrimary'> Sample Text </Button>
				<Button variant='containedSecondary'> Sample Text </Button>
			</ThemeProvider>*/}
		</div>
	)
}

Buttons.propTypes = {

}

export default Buttons