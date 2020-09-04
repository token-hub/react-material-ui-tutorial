import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	table: {
		width: '800px'
	}
})

const TableComp = () => {
	const classes = useStyles();
	return (
		<Paper>
			<TableContainer component={Paper} className={classes.table} variant='outlined'>
				<Table >
					<TableHead>
						<TableRow>
							<TableCell>Dessert (100g serving)</TableCell>
				            <TableCell>Calories</TableCell>
				            <TableCell>Fat&nbsp;(g)</TableCell>
				            <TableCell>Carbs&nbsp;(g)</TableCell>
				            <TableCell>Protein&nbsp;(g)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>sdsd</TableCell>
							<TableCell>sdsd</TableCell>
							<TableCell>sdsd</TableCell>
							<TableCell>sdsd</TableCell>
							<TableCell>sdsd</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>sdsd</TableCell>
							<TableCell>sdsd</TableCell>
							<TableCell>sdsd</TableCell>
							<TableCell>sdsd</TableCell>
							<TableCell>sdsd</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>sdsd</TableCell>
							<TableCell>sdsd</TableCell>
							<TableCell>sdsd</TableCell>
							<TableCell>sdsd</TableCell>
							<TableCell>sdsd</TableCell>
						</TableRow>
					</TableBody>
					<TableFooter>
						<TableRow>
							<TableCell>Dessert (100g serving)</TableCell>
				            <TableCell>Calories</TableCell>
				            <TableCell>Fat&nbsp;(g)</TableCell>
				            <TableCell>Carbs&nbsp;(g)</TableCell>
				            <TableCell>Protein&nbsp;(g)</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</TableContainer>
		</Paper>
	)
}

export default TableComp