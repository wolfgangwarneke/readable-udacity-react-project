const comments = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return state
    default:
      return {commentsTest: "wowzers!"}
  }
}

export default comments
