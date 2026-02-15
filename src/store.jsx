import { createStore, applyMiddleware } from 'redux'
import libraryReducer from './libraryReducer'
import loggeMiddleware from './loggerMiddleware'

const store = createStore(libraryReducer, applyMiddleware(loggeMiddleware))

export default store