import { sortByNewest, sortByOldest } from '../utils/comparator'

const posts = (state = {posts: [], detailPostId: null}, action) => {
  switch (action.type) {
    case 'ADD_POST' :
      const { post } = action
      return {...state, posts: state.posts.concat(post)}
    case 'HANDLE_FETCHED_POSTS':
      //return action.posts
      return {...state, posts: action.posts}
    case 'SELECT_DETAIL_POST':
      return {...state, detailPostId: action.postId}
    case 'SORT_BY_DATE':
      console.log(action)
      const isByNewest = action.newOrOld[0].toLowerCase() === "n"
      const sortedPosts = state.posts.slice(0).sort(isByNewest ? sortByNewest : sortByOldest)
      console.log(sortedPosts)
      return {...state, posts: sortedPosts}
    default:
      return state
  }
}

export default posts
