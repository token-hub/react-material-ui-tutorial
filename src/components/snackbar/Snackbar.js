import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert, AlertTitle } from '@material-ui/lab';
import Slide from '@material-ui/core/Slide'; 

const SnackbarComp = () => {

	const [open, setOpen] = useState(false);
	const [transition, setTransition] = useState(undefined);

	const transitionSlide = props => {
		return <Slide {...props} direction='left' />
	}

	const handleClick = (transition) => () => {
		setTransition(() => transition)
		setOpen(true);
	}

	const handleOnClose = () => {
		setOpen(false);
	}

 	return (
		<div>
			<Button variant='contained' color='primary' onClick={handleClick(transitionSlide)}> Open Snackbar </Button>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				autoHideDuration={3000}
				onClose={handleOnClose}
				open={open}
				TransitionComponent={transition} // slide
			>
			<Alert
				severity='success'
				variant='filled'
				onClose={handleOnClose}
			>
				{/*<AlertTitle>Success</AlertTitle>*/}
				Transaction saved!
			</Alert>
			</Snackbar>
		</div>
	)
}

export default SnackbarComp