import { ADD_ONE_POST, DELETE_ONE_POST } from './actionNames';

const postList =
	localStorage.getItem('post') !== null
		? JSON.parse(localStorage.getItem('post'))
		: [];

const initialState = {
	list: postList,
	error: null,
	isError: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_ONE_POST:
			return {
				list: action.payload,
				isError: false,
			};

		case DELETE_ONE_POST:
			return {
				list: action.payload,
				isError: false,
			};

		default:
			return state;
	}
};
