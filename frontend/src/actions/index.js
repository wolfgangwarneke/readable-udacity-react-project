import { getAllPosts, getAllCategories, getCategoryPosts, createPost, getPost, getPostsComments, createComment, fetchDeleteComment, fetchDeletePost, fetchEditPost, fetchEditComment, vote } from '../utils/api'

export const addPost = post => {
  return {
    type: 'ADD_POST',
    post
  }
}

export const getNonStatePostById = postId => {
  return (dispatch) => {
    getPost(postId)
      .then(
        post => {
          console.log("!!!", post)
          dispatch(addPost(post))
          dispatch(selectDetailPost(post))
        }
      )
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

export const selectDetailPost = post => {
  return {
    type: 'SELECT_DETAIL_POST',
    post
  }
}

export const removePost = postId => {
  return {
    type: 'REMOVE_POST',
    postId
  }
}

export function deletePost(postId) {
  return (dispatch) => {
    fetchDeletePost(postId)
      .then(
        dispatch(removePost(postId))
      )
  }
}

export const editPost = postUpdates => {
  return {
    type: 'EDIT_POST',
    postUpdates
  }
}

export function putEditPost(postUpdates) {
  return (dispatch) => {
    fetchEditPost(postUpdates)
      .then(
        dispatch(editPost(postUpdates))
      )
  }
}


export function handleFetchedComments(comments) {
    return {
        type: 'HANDLE_FETCHED_COMMENTS',
        comments
    }
}

export const commentsFetchData = postId => {
  return (dispatch) => {
    getPostsComments(postId)
      .then(
        comments => dispatch(handleFetchedComments(comments))
      )
  }
}

export const getComments = postId => {
  return (dispatch) =>
    dispatch(commentsFetchData(postId))
}

export const addComment = comment => {
  return {
    type: 'ADD_COMMENT',
    comment
  }
}

export function postNewComment(comment) {
  return (dispatch) => {
    createComment(comment)
      .then(
        comment => dispatch(addComment(comment))
      )
  }
}

export const removeComment = commentId => {
  return {
    type: 'REMOVE_COMMENT',
    commentId
  }
}

export function deleteComment(commentId) {
  return (dispatch) => {
    fetchDeleteComment(commentId)
      .then(
        dispatch(removeComment(commentId))
      )
  }
}

export const editComment = commentUpdates => {
  return {
    type: 'EDIT_COMMENT',
    commentUpdates
  }
}

export function putEditComment(commentUpdates) {
  return (dispatch) => {
    fetchEditComment(commentUpdates)
      .then(
        dispatch(editComment(commentUpdates))
      )
  }
}

// export const addCategory = id => {
//   return {
//     type: 'ADD_CATEGORY',
//     id
//   }
// }

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

export const sortByComparator = comparator => {
  return {
    type: 'SORT',
    comparator
  }
}

export const voteAction = (path, id, voteType) => {
  return {
    type: 'VOTE',
    path,
    id,
    voteType
  }
}

export function voteTest(path, id, voteType) {
  return (dispatch) => {
    vote(path, id, voteType)
      .then(
        dispatch(voteAction(path, id, voteType))
      )
  }
}

export const setEditComment = comment => {
  return {
    type: 'SET_EDIT_COMMENT',
    comment
  }
}

export const setEditCommentBody = newBody => {
  return {
    type: 'SET_EDIT_COMMENT_BODY',
    newBody
  }
}
