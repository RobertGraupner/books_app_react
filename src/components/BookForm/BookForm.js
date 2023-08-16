import { useState } from 'react'

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => { 
    e.preventDefault();
    addBook({ title, author });
    setTitle('');
    setAuthor('');
  }

  return (
    <form onSubmit={handleSubmit}>
      Title: <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      Author: <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button>Add book</button>
    </form>
  );
};

export default BookForm;