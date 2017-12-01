import { getAllPosts, getCategoryPosts, createPost } from '../utils/api'

export const addPost = post => {
  return {
    type: 'ADD_TODO',
    //id: nextTodoId++,
    post
  }
}

export function postNewPost() {
  return (dispatch) => {
    createPost()
      .then(
        post => dispatch(addPost(post))
      )
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

export function categoryPostsFetchData(category) {
  return (dispatch) => {
    getCategoryPosts(category)
      .then(
        posts => dispatch(handleFetchedPosts(posts))
      )
  }
}
