import { ADD_ONE_POST, DELETE_ONE_POST } from './actionNames';

const addPost = payload => {
	return {
		type: ADD_ONE_POST,
		payload,
	};
};

const deletePost = payload => {
	return {
		type: DELETE_ONE_POST,
		payload,
	};
};

export const addOnePost = data => {
	return dispatch => {
		localStorage.setItem('post', JSON.stringify(data));
		dispatch(addPost(JSON.parse(localStorage.getItem('post'))));
	};
};

export const deleteOnePost = data => {
	return dispatch => {
		localStorage.setItem('post', JSON.stringify(data));
		dispatch(deletePost(JSON.parse(localStorage.getItem('post'))));
	};
};
