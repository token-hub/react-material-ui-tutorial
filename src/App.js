import React from 'react';
import { Button } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';

const App = () => {
	return (
		<div className='App'>
			<Switch>
				<Route path='/' exact component={Home} />
				{/*<Route path='/home/:page' exact render={ props => <Home2 {...props} /> } />*/}
			</Switch>
		</div>
	)
}

export default App