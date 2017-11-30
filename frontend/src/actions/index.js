export const addPost = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const addComment = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const addCategory = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
