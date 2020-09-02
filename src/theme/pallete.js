import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: { main: '#ccc' },
		secondary: { main: '#ddd' },
		contrastThreshold: 9,
		tonalOffset: 0.5,
	}
})

export default theme