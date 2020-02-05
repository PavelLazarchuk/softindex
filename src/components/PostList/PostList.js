import React from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

import useStyles from './styles';
import EnhancedTableHead from './TableHead';
import EnhancedTableBody from './TableBody';

const PostList = ({ list }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.title}>Post List</div>
			<TableContainer>
				<Table className={classes.table}>
					<EnhancedTableHead classes={classes} />
					<EnhancedTableBody classes={classes} />
				</Table>
			</TableContainer>
			{list.length === 0 && <div>No posts, you can be the first</div>}
		</div>
	);
};

const mapStateToProps = ({ post }) => {
	return {
		list: post.list,
	};
};

export default connect(mapStateToProps)(PostList);
