import { getAllPosts, getAllCategories, getCategoryPosts, createPost } from '../utils/api'

export const addPost = post => {
  return {
    type: 'ADD_POST',
    post
  }
}

export function postNewPost(post) {
  return (dispatch) => {
    createPost(post)
      .then(
        post => dispatch(addPost(post))
      )
  }
}

export const selectDetailPost = postId => {
  return {
    type: 'SELECT_DETAIL_POST',
    postId
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

export function handleFetchedCategories(categories) {
    return {
        type: 'HANDLE_FETCHED_CATEGORIES',
        categories
    }
}

export function categoriesFetchData() {
  return (dispatch) => {
    getAllCategories()
      .then(data => {
          let filteredCategories = data.categories.map(c => c.name)
          dispatch(handleFetchedCategories(filteredCategories))
        }
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
