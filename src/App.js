import BooksList from './components/BooksList/BooksList';
import BookForm from './components/BookForm/BookForm';
import { useState } from 'react';
import shortid from 'shortid';

const App = () => {
	const [books, setBooks] = useState([
		{ id: 1, title: 'Title 1', author: 'Author 1' },
		{ id: 2, title: 'Title 2', author: 'Author 2' },
	]);

	const removeBook = (bookId) => {
		setBooks(books.filter((book) => book.id !== bookId));
	};

	const addBook = (newBook) => {
		setBooks([
			...books,
			{ id: shortid(), title: newBook.title, author: newBook.author },
		]);
	};

	return (
		<div>
			<h1>Books App</h1>
			<BooksList books={books} removeBook={removeBook} />
			<BookForm addBook={addBook} />
		</div>
	);
};

export default App;
