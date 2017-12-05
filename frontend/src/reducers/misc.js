const misc = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EDIT_COMMENT':
      return action.comment
    case 'SET_EDIT_COMMENT_BODY':
      return {...state, body: action.body}
    default:
      return {id: "blah", author: "blah", body: "blah"}
  }
}

export default misc
