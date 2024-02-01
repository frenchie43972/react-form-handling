import { useState } from "react";

function BookCreate({onCreate}) {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
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