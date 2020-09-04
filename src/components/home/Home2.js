import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core';
import About from '../about/About';
import Contact from '../contact/Contact';

const Home2 = ({ history, ...props }) => {
  const	page = props.match.params.page;

  const pagesIndex = {
  	index: {
  		'0': 'about',
  		'1': 'contact'
  	},
  	pages : {
  		'about': '0',
  		'contact': '1'
  	}
  }

  const [value, setValue] = React.useState(pagesIndex.pages[page]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(`/home/${ pagesIndex.index[newValue] }`)
  };

	return (
		<React.Fragment>
			<AppBar position="static">
		        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
		    		<Tab label="About" value='0' />
		    		<Tab label="Contact" value='1' />
		        </Tabs>
		    </AppBar>
	    	{ value === '0' && <About /> }
	    	{ value === '1' && <Contact /> }
	    </React.Fragment>
	)
}

export default Home2