import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TableBody from '@material-ui/core/TableBody';

import PostItem from '../../PostItem';

const EnhancedTableBody = ({ classes, postList, handleChangeList, list }) => {
	useEffect(() => {
		handleChangeList(postList);
	}, [postList, handleChangeList]);

	return (
		<TableBody>
			{list &&
				list.length > 0 &&
				list.map(elem => {
					return <PostItem data={elem} key={elem.id} classes={classes} />;
				})}
		</TableBody>
	);
};

const mapStateToProps = ({ post }) => {
	return {
		postList: post.list,
	};
};

export default connect(mapStateToProps)(EnhancedTableBody);
