const categories = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return state
    case 'HANDLE_FETCHED_CATEGORIES':
      return action.categories
    default:
      return state
  }
}

export default categories
