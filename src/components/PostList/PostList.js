import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';

import useStyles from './styles';
import PostItem from '../PostItem';
import EnhancedTableHead from './TableHead';

const PostList = ({ postList }) => {
	const classes = useStyles();
	const [list, setList] = useState([]);

	useEffect(() => {
		if (postList) {
			localStorage.setItem('post', JSON.stringify(postList));
		}
		setList(postList);
	}, [postList]);

	return (
		<div className={classes.root}>
			<div className={classes.title}>Post List</div>
			<TableContainer>
				<Table className={classes.table}>
					<EnhancedTableHead classes={classes} />
					<TableBody>
						{list &&
							list.length > 0 &&
							list.map(elem => {
								return <PostItem data={elem} key={elem.id} classes={classes} />;
							})}
					</TableBody>
				</Table>
			</TableContainer>
			{list.length === 0 && <div>No posts, you can be the first</div>}
		</div>
	);
};

const mapStateToProps = ({ post }) => {
	return {
		postList: post.list,
	};
};

export default connect(mapStateToProps)(PostList);
