import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import Header from '../common/Header';
import HomeContent from '../home/HomeContent';

const Home = () => {
	return (
		<Grid container direction='column'>
			<Grid item container>
				<Grid item xs={false} sm={2} />
				<Grid item xs={12} sm={8}>
					<HomeContent />
				</Grid>
				<Grid item xs={false} sm={2} />
			</Grid>
		</Grid>
	)
}

export default Home