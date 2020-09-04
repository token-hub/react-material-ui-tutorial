import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './App.css';
import Theme from './theme/Theme';
import { ThemeProvider } from '@material-ui/core/styles';

render( 
	<Router>
		<ThemeProvider theme={Theme(true)} >
			<App />
		</ThemeProvider>
	</Router>,
	document.getElementById('root')
	)
