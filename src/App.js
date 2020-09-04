import React from 'react';
import { Button } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import  Buttons from './components/button/Buttons';
import GridComponent from './components/grid/GridComponent';
import GridCard from './components/grid/GridCard';
import Home from './components/home/Home';
import Home2 from './components/home/Home2';
import Header2 from './components/common/Header2';
import TypographyComp from './components/typography/TypographyComp';
import Theming from './components/theming/Theming';
import About from './components/about/About';
import PaperComp from './components/paper/PaperComp';
import DarkMode from './components/theming/DarkMode';
import CardComp from './components/card/CardComp';
import TableComp from './components/table/TableComp';

const App = () => {
	return (
		<div className='App'>
			<Switch>
				<Route path='/' exact component={TableComp} />
				{/*<Route path='/home/:page' exact render={ props => <Home2 {...props} /> } />*/}
			</Switch>
		</div>
	)
}

export default App