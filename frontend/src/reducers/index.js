import { combineReducers } from 'redux'
import posts from './posts'
import comments from './comments'
import categories from './categories'
import misc from './misc'

const rootReducer = combineReducers({
  posts,
  comments,
  categories,
  misc
})

export default rootReducer
