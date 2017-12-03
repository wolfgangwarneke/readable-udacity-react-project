const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      console.log(action);
      return state.concat([action.comment])
    case 'HANDLE_FETCHED_COMMENTS':
      return action.comments || state
    default:
      return state
  }
}

export default comments
