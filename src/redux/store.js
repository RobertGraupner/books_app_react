import { createStore } from 'redux';
import shortid from 'shortid';

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_BOOK':
			return {
				...state,
				books: [...state.books, { id: shortid.generate(), ...action.payload }],
			};
		case 'REMOVE_BOOK':
			return {
				...state,
				books: state.books.filter((book) => book.id !== action.payload),
			};
		default:
			return state;
	}
};

const initialState = {
	books: [
		{ id: 1, title: 'Title 1', author: 'Author 1' },
		{ id: 2, title: 'Title 2', author: 'Author 2' },
	],
};

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
