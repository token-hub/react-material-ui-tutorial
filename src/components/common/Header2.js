import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const Header2 = () => {
 
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

	return (
		<AppBar position="static">
	        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
	    		<Tab label="Home" value='1' />
	    		<Tab label="About" value='2' />
	    		<Tab label="Grid" value='3' />
	        </Tabs>
	    </AppBar>
	)
}

export default Header2