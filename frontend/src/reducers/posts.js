const posts = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return state
    default:
      return {postsTest: "wow wow wowie!"}
  }
}

export default posts
