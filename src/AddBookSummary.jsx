import { useSelector, useDispatch } from "react-redux"
import { removeBook, totalBooks } from "./actions"

const LibrarySummary = () => {
  const dispatch = useDispatch()
  const books = useSelector((state) => state.books)
  const total = useSelector((state) => state.total)

  const handleRemove = (id) => {
    dispatch(removeBook(id))
    dispatch(totalBooks())
  }

  return (
    <div>
      <h2>Library Summary</h2>
      <p>Total Books: {total}</p>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} (ISBN: {book.isbn})
            <button onClick={() => handleRemove(book.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LibrarySummary
