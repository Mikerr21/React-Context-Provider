import { useContext } from 'react';
import BooksContext from '../context/books';

function BookList() {
  const { count, incrementCount } = useContext(BooksContext);

  

  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>Increment the count!</button>
    </div>
  );
}

export default BookList;
