import { getAllPosts } from '../utils/api'

export const addPost = text => {
  return {
    type: 'ADD_TODO',
    //id: nextTodoId++,
    text
  }
}

export const addComment = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const addCategory = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export function handleFetchedPosts(posts) {
    return {
        type: 'HANDLE_FETCHED_POSTS',
        posts
    }
}

export function postsFetchData() {
  return (dispatch) => {
    getAllPosts()
      .then(
        posts => dispatch(handleFetchedPosts(posts))
      )
  }
}
