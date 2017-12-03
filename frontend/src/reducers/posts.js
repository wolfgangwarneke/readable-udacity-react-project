const posts = (state = {posts: [], detailPostId: null}, action) => {
  switch (action.type) {
    case 'ADD_POST' :
      const { post } = action
      return {...state, posts: state.posts.concat(post)}
    case 'HANDLE_FETCHED_POSTS':
      return {...state, posts: action.posts}
    case 'SELECT_DETAIL_POST':
      return {...state, detailPostId: action.postId}
    case 'SORT':
      const sortedPosts = state.posts.slice(0).sort(action.comparator)
      return {...state, posts: sortedPosts}
    default:
      return state
  }
}

export default posts
