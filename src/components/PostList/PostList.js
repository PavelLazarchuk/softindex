import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

import useStyles from './styles';
import EnhancedTableHead from './TableHead';
import EnhancedTableBody from './TableBody';
import sortNumber from '../../utils/sortNumber';
import sortString from '../../utils/sortString';

const PostList = ({ postList }) => {
	const classes = useStyles();
	const [list, setList] = useState([]);
	const [order, setOrder] = useState('asc');
	const [sortName, setSortName] = useState('');

	const handleChangeList = data => {
		setList(data);
	};

	const sort = () => {
		const isAsc = order === 'asc';
		const isSortName = sortName === 'firstName' || 'lastName' || 'phone';
		isAsc && !isSortName
			? sortNumber(list, sortName, isAsc)
			: sortNumber(list, sortName, isAsc);

		isAsc && isSortName
			? sortString(list, sortName, isAsc)
			: sortString(list, sortName, isAsc);
	};

	const handleRequestSort = name => {
		const isAsc = sortName === name && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setSortName(name);
	};

	useEffect(() => {
		new Promise(resolve => {
			resolve(sort());
		}).then(data => {
			handleChangeList(data);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sortName, order]);

	return (
		<div className={classes.root}>
			<div className={classes.title}>Post List</div>
			<TableContainer>
				<Table
					className={classes.table}
					style={{ height: `${100 * postList.length}px` }}
				>
					<EnhancedTableHead
						order={order}
						classes={classes}
						sortName={sortName}
						handleRequestSort={handleRequestSort}
					/>
					<EnhancedTableBody
						list={list}
						classes={classes}
						handleChangeList={handleChangeList}
					/>
				</Table>
			</TableContainer>
			{postList.length === 0 && <div>No posts, you can be the first</div>}
		</div>
	);
};

const mapStateToProps = ({ post }) => {
	return {
		postList: post.list,
	};
};

export default connect(mapStateToProps)(PostList);
