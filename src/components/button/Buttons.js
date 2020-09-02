import React from 'react'
import { Button, Typography } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import theme from '../../theme/pallete';
import PropTypes from 'prop-types'

const useStyles = makeStyles({
	buttonStyle: {
		'color': 'red'
	}
})

const Buttons = props => {

const classes = useStyles();

	return (
		<div>
			<p >Hello</p>
			<Typography color='primary' variant='h3'>Hello</Typography>
			<ThemeProvider theme={theme}>
				<Button variant='outlinedPrimary'> Sample Text </Button>
				<Button variant='outlinedSecondary'> Sample Text </Button>
				<Button variant='containedPrimary'> Sample Text </Button>
				<Button variant='containedSecondary'> Sample Text </Button>
			</ThemeProvider>
		</div>
	)
}

Buttons.propTypes = {

}

export default Buttons