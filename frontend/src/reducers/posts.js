const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return state
    case 'HANDLE_FETCHED_POSTS':
      return action.posts
    default:
      return state
  }
}

export default posts
