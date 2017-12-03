const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// export const addPost = (newPost) =>
//    fetch(`${api}/posts`, {
//        method: 'POST',
//        headers: {
//            ...headers,
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify( newPost )
//    });

// export const getPost = (postId) =>
//   fetch(`${api}/posts/${postId}`, { headers })
//     .then(res => res.json())
//     .then(data => data.post)

export const createPost = (post) =>
  fetch(`${api}/posts`, { method: 'POST', headers: {...headers, 'Content-Type': 'application/json'}, body: JSON.stringify({id: "8xf0y6ziyjabvozdd253na", ...post, timestamp: Date.now()}) })
    .then(res => res.json())
    //.then(data => data.categories)

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const getCategoryPosts = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
