import { ADD_ONE_POST, DELETE_ONE_POST, ERROR } from './actionNames';

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

const error = payload => {
	return {
		type: ERROR,
		payload,
	};
};

export const addOnePost = data => {
	return dispatch => {
		dispatch(addPost(data));
	};
};

export const deleteOnePost = data => {
	return dispatch => {
		localStorage.setItem('post', JSON.stringify(data));
		dispatch(deletePost(JSON.parse(localStorage.getItem('post'))));
	};
};
