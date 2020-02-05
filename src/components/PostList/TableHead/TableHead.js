import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const EnhancedTableHead = ({ classes }) => {
	return (
		<TableHead>
			<TableRow>
				<TableCell className={classes.tableCell}>Delete</TableCell>
				<TableCell className={classes.tableCell}>First Name</TableCell>
				<TableCell className={classes.tableCell}>Last Name</TableCell>
				<TableCell className={classes.tableCell}>Phone</TableCell>
				<TableCell className={classes.tableCell}>Age</TableCell>
				<TableCell className={classes.tableCell}>Gender</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default EnhancedTableHead;
