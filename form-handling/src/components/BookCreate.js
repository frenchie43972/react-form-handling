import { useState } from "react";
import useBooksContext from '../hooks/use-books-hook';

function BookCreate() {
  const [title, setTitle] = useState('');
  const { createBook } = useBooksContext();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <h3>Add a Book</h3>
        <label>Title Name</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create Book!</button>
      </form>
    </div>
  );
}

export default BookCreate;