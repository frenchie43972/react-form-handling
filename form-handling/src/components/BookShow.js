import { useState } from "react";
import useBooksContext from '../hooks/use-books-hook';
import BookEdit from "./BookEdit";


function BookShow({book}) {
  const [editBook, setEditBook] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setEditBook(!editBook);
  };

  const handleSubmit = () => {
    setEditBook(false);
  };

  let content = <h3>{book.title}</h3>

  if (editBook) {
    content = <BookEdit onSubmit={handleSubmit} book={book}/>
  }

  return (
    <div className="book-show">
    <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="Random book Images"/>
      <div>{content}</div>
      <div className="actions">
      <button className="edit" onClick={handleEditClick}>
        Edit
      </button>
      <button className="delete" onClick={handleDeleteClick}>
        Delete
      </button>
      </div>
    </div>
  );
}

export default BookShow;