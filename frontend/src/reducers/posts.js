const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST' :
      const { post } = action
      return state.concat([post])
    case 'HANDLE_FETCHED_POSTS':
      return action.posts
    default:
      return state
  }
}

export default posts
