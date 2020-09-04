import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import lime from '@material-ui/core/colors/lime';

const theme = darkMode => { 
	return createMuiTheme({
		palette: {
			// primary: {
			// 	main: blueGrey[300]
			// },
			// secondary: {
			// 	main: lime[600]
			// }
			type: darkMode ? 'dark' : 'light'
		},
		typography: {
			h2: {
				letterSpacing: '2rem'
			}
		}
	})
}
export default theme