import uuid from './uuid'

const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getPost = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    //.then(data => data.post)

export const createPost = (post) =>
  fetch(`${api}/posts`, { method: 'POST', headers: {...headers, 'Content-Type': 'application/json'}, body: JSON.stringify({id: uuid(), ...post, timestamp: Date.now()}) })
    .then(res => res.json())
    //.then(data => data.categories)

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const fetchDeletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, { method: 'DELETE', headers: headers})
    .then(res => res.json())

export const fetchEditPost = (postUpdates) =>
  fetch(`${api}/posts/${postUpdates.id}`, { method: 'PUT', headers: {...headers, 'Content-Type': 'application/json'}, body: JSON.stringify({id: postUpdates.id, title: postUpdates.title, body: postUpdates.body}) })
    .then(res => res.json())

export const getCategoryPosts = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())

export const getPostsComments = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())

export const createComment = (comment) =>
  fetch(`${api}/comments`, { method: 'POST', headers: {...headers, 'Content-Type': 'application/json'}, body: JSON.stringify({id: uuid(), ...comment, timestamp: Date.now()}) })
    .then(res => res.json())

export const fetchDeleteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, { method: 'DELETE', headers: headers})
    .then(res => res.json())

export const fetchEditComment = (commentUpdates) =>
  fetch(`${api}/comments/${commentUpdates.id}`, { method: 'PUT', headers: {...headers, 'Content-Type': 'application/json'}, body: JSON.stringify({id: commentUpdates.id, timestamp: Date.now(), body: commentUpdates.body}) })
    .then(res => res.json())

export const vote = (path, id, voteType) =>
  fetch(`${api}/${path}/${id}`, { method: 'POST', headers: {...headers, 'Content-Type': 'application/json'}, body: JSON.stringify({ option: voteType })})
