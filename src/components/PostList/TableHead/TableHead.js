import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const EnhancedTableHead = ({ classes, sortName, order, handleRequestSort }) => {
	const createSortHandler = property => event => {
		handleRequestSort(property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell className={classes.tableCell}>Delete</TableCell>
				<TableCell
					className={classes.tableCell}
					sortDirection={sortName === 'firstName' ? order : false}
				>
					<TableSortLabel
						active={sortName === 'firstName'}
						direction={sortName === 'firstName' ? order : 'asc'}
						onClick={createSortHandler('firstName')}
					>
						First Name
					</TableSortLabel>
				</TableCell>
				<TableCell
					className={classes.tableCell}
					sortDirection={sortName === 'lastName' ? order : false}
				>
					<TableSortLabel
						active={sortName === 'lastName'}
						direction={sortName === 'lastName' ? order : 'asc'}
						onClick={createSortHandler('lastName')}
					>
						Last Name
					</TableSortLabel>
				</TableCell>
				<TableCell
					className={classes.tableCell}
					sortDirection={sortName === 'phone' ? order : false}
				>
					<TableSortLabel
						active={sortName === 'phone'}
						direction={sortName === 'phone' ? order : 'asc'}
						onClick={createSortHandler('phone')}
					>
						Phone
					</TableSortLabel>
				</TableCell>
				<TableCell
					className={classes.tableCell}
					sortDirection={sortName === 'age' ? order : false}
				>
					<TableSortLabel
						active={sortName === 'age'}
						direction={sortName === 'age' ? order : 'asc'}
						onClick={createSortHandler('age')}
					>
						Age
					</TableSortLabel>
				</TableCell>
				<TableCell
					className={classes.tableCell}
					sortDirection={sortName === 'gender' ? order : false}
				>
					<TableSortLabel
						active={sortName === 'gender'}
						direction={sortName === 'gender' ? order : 'asc'}
						onClick={createSortHandler('gender')}
					>
						Gender
					</TableSortLabel>
				</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default EnhancedTableHead;
