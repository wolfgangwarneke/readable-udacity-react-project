import { combineReducers } from 'redux'
import posts from './posts'
import comments from './comments'
import categories from './categories'

const rootReducer = combineReducers({
  posts,
  comments,
  categories
})

export default rootReducer
