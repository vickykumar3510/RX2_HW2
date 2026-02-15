const initialState = {
    books: [], total: 0
}

const libraryReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_BOOK' : 
        {
            const existing = state.books.find((b) => b.isbn === action.payload.isbn)

            if(existing){
                return state
            } else {
                return {
                    ...state, books: [...state.books, {...action.payload, id: Date.now()}]
                }
            }
        }

        case 'REMOVE_BOOK': 
        {
            return {...state, books: state.books.filter((b) => b.id !== action.payload)}
        }

        case 'TOTAL_BOOK' : {
            return {...state, total: state.books.length}
        }
        default:
            return state

    }
}

export default libraryReducer