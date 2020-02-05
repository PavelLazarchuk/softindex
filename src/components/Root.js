import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Form from './Form';
import PostList from './PostList';

const useStyles = makeStyles({
	container: {
		width: '1180px',
		margin: '0 auto',
	},
	root: {
		padding: '100px 50px',
	},
});

function Root() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.root}>
				<Form />
				<PostList />
			</div>
		</div>
	);
}

export default Root;
