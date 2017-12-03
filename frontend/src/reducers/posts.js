const posts = (state = [], action) => {
  alert("hello from beginning of posts reducer");
  switch (action.type) {
    case 'ADD_POST' :
      const { post } = action
      alert("hello from posts.js reducers");
      return state.concat([post])
    case 'HANDLE_FETCHED_POSTS':
      return action.posts
    default:
      return state
  }
}

export default posts
