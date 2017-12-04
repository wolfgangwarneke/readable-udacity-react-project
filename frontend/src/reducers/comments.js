const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      console.log(action);
      return state.concat([action.comment])
    case 'REMOVE_COMMENT':
      return state.filter(c => c.id !== action.commentId)
    case 'EDIT_COMMENT':
      return state.map(c => c.id === action.commentUpdates.id ? {...c, ...action.commentUpdates} : c)
    case 'HANDLE_FETCHED_COMMENTS':
      return action.comments || state
    case 'VOTE':
    if (action.path === "comments") {
      const copy = state.slice(0)
      const scoreAdjust = action.voteType === "upVote" ? 1: -1
      const adjustedCopy = copy.map(c => c.id === action.id ? {...c, voteScore: c.voteScore + scoreAdjust} : c)
      return adjustedCopy
    } else return state
    default:
      return state
  }
}

export default comments
