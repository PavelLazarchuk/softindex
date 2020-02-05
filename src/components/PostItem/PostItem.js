import React from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

import { deleteOnePost } from '../../store/post/action';

const PostItem = ({ data, classes, deleteOnePost, postList }) => {
	const deletePost = id => {
		const index = postList.findIndex(elem => elem.id === id);
		postList.splice(index, 1);
		deleteOnePost(postList);
	};

	return (
		<TableRow>
			<TableCell className={classes.tableCell}>
				<DeleteForeverOutlinedIcon
					className={classes.icon}
					onClick={() => deletePost(data.id)}
				/>
			</TableCell>
			<TableCell className={classes.tableCell}>{data.firstName}</TableCell>
			<TableCell className={classes.tableCell}>{data.lastName}</TableCell>
			<TableCell className={classes.tableCell}>{data.phone}</TableCell>
			<TableCell className={classes.tableCell}>{data.age}</TableCell>
			<TableCell className={classes.tableCell}>
				{data.gender ? 'Male' : 'Female'}
			</TableCell>
		</TableRow>
	);
};

const mapDispatchToProps = {
	deleteOnePost,
};

const mapStateToProps = ({ post }) => {
	return {
		postList: post.list,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
