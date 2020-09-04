import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import Coffee from '../card/Coffee';

const HomeContent = (props) => {

	return (
		<Grid container spacing={4}>
			<Grid item xs={12} sm={4}>
				<Coffee 
					title='aaaa' 
					subTitle='$8.99' 
					avatarSrc='https://avatars.dicebear.com/api/male/john.svg?mood[]=happy'
					imgSrc='https://loremflickr.com/640/360'
					description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, illum iusto optio consectetur'
				/>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Coffee />
			</Grid>
			<Grid item xs={12} sm={4}>
				<Coffee />
			</Grid>

			<Grid item xs={12} sm={4}>
				<Coffee />
			</Grid>
			<Grid item xs={12} sm={4}>
				<Coffee />
			</Grid>
			<Grid item xs={12} sm={4}>
				<Coffee />
			</Grid>
		</Grid>
			
		
	)
}

export default HomeContent