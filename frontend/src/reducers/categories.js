const categories = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return state
    default:
      return {categoriesTest: "wowza!"}
  }
}

export default categories
