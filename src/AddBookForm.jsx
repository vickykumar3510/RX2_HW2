import { useState } from "react"
import { addBook } from "./actions"
import { useDispatch } from "react-redux"
import { totalBooks } from "./actions"


const AddBookForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [isbn, setISBN] = useState('')

    const handleAddBook = () => {
        if(title && author && isbn){
            dispatch(addBook({title, author, isbn }))
            dispatch(totalBooks())
            setTitle('')
            setAuthor('')
            setISBN('')
        }
    }

    return(
        <div>
            <h1>Library Management</h1>
            <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
            <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} value={author} />
            <input type="number" placeholder="ISBN" onChange={(e) => setISBN(e.target.value)} value={isbn}/>

            <button onClick={handleAddBook}>Add Book</button>

        </div>
    )
}

export default AddBookForm