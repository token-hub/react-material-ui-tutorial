import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, CardContent, CardMedia, CardHeader, Card, CardActions, Avatar, Button, IconButton, CardActionArea } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
	card: {
		maxWidth: '400px'
	},
	media: {
		paddingTop: '56.25%', // 16:9
	}
})

const CardComp = () => {

	const classes = useStyles();
	return (
		<Card raised className={classes.card}>
			<CardHeader
				avatar={<Avatar aria-label="recipe">R</Avatar>}
		        title="Shrimp and Chorizo Paella"
		        subheader="September 14, 2016"
		    />
		    <CardActionArea>
		    <CardMedia
		    className={classes.media}
		        // image="https://loremflickr.com/640/360"
		        title="Paella dish"
	      	/>
	      	</CardActionArea>
	      	<CardContent>
		        <Typography variant="body2" color="textSecondary" component="p">
		          This impressive paella is a perfect party dish and a fun meal to cook together with your
		          guests. Add 1 cup of frozen peas along with the mussels, if you like.
		        </Typography>
	        </CardContent>
	        <CardActions disableSpacing>
	        	<IconButton color='inherit'>
	        		<FavoriteIcon/>
	        	</IconButton>
	        	<IconButton color='inherit'>
	        		<FavoriteIcon/>
	        	</IconButton>
	        </CardActions>
		</Card>
	)
}

export default CardComp