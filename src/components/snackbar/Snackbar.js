import React from 'react'
import { Snackbar, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Slide, Collapse, Grow, Fade } from '@material-ui/core';

const SnackbarComp = () => {
 const [transition, setTransition] = React.useState(undefined);
 const [state, setState] = React.useState(false);

 const transitionTopRight = (props) => {
 	return <Slide {...props}  direction='left' />
 }
 
  const handleClick = (transition) => () => {
  	setTransition(() => transition);
    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };

	return (
		<div>
		  <Button variant="outlined" onClick={handleClick(transitionTopRight)}>
	        Open success snackbar
	      </Button>

     		<Snackbar 
				open={state} 
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				autoHideDuration={3000} 
				onClose={handleClose}
				message='I love snacks'
				TransitionComponent={transition}
				>
     			<Alert severity="error" onClose={handleClose} variant='filled'>This is an error message!</Alert>
		
			</Snackbar>
	    
	     
		</div>
	)
}

export default SnackbarComp