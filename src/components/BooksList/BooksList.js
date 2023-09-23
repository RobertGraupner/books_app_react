import { useSelector, useDispatch } from 'react-redux';

const BooksList = () => {
	// w stałej books znajduje się tablica z książkami ze stora
	const books = useSelector((state) => state.books);
	const dispatch = useDispatch();

	// dla czytelności zapisuje removeBook osobno
	const removeBook = (bookId) => {
		dispatch({ type: 'REMOVE_BOOK', payload: bookId });
	};

	return (
		<ul>
			{books.map((book) => (
				<li key={book.id}>
					{book.title} by {book.author}{' '}
					<button onClick={() => removeBook(book.id)}>Remove</button>
				</li>
			))}
		</ul>
	);
};

export default BooksList;
