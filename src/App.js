import React from 'react';
import { Button } from '@material-ui/core';
import { Route } from 'react-router-dom';
import  Buttons from './components/button/Buttons';
import GridComponent from './components/grid/GridComponent';
import Home from './components/home/Home';

const App = () => {
	return (
		<div className='App'>
			<Route path='/' exact component={Home} />
			<Route path='/grid' component={GridComponent} />
		</div>
	)
}

export default App