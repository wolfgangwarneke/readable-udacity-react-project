const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return state
    case 'HANDLE_FETCHED_COMMENTS':
      return action.comments || state
    default:
      return state
  }
}

export default comments
