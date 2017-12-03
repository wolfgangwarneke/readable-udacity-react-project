const posts = (state = {posts: [], detailPostId: null}, action) => {
  switch (action.type) {
    case 'ADD_POST' :
      const { post } = action
      return {...state, posts: state.posts.concat(post)}
    case 'HANDLE_FETCHED_POSTS':
      //return action.posts
      return {...state, posts: action.posts}
    case 'SELECT_DETAIL_POST':
      alert("SELECT DETAIL POST!!!");
      return {...state, detailPostId: action.postId}
    default:
      return state
  }
}

export default posts
