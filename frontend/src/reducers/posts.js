const initialEditPostVals = {
  id: "blah",
  body: "blah",
  title: "blah",
  author: "blah",
  category: "React"
}

const posts = (state = {posts: [], detailPost: null, editPost: initialEditPostVals}, action) => {
  switch (action.type) {
    case 'ADD_POST' :
      const { post } = action
      return {...state, posts: state.posts.concat(post)}
    case 'REMOVE_POST' :
      return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
    case 'EDIT_POST' :
      let updatedPost = {...action.post, ...action.updates}
      let postsClone = state.posts.slice(0)
      const editPostId = action.postUpdates.id
      for (let i = 0; i < postsClone.length; i++) {
        console.log("loop", editPostId, postsClone[i].id)
        if (postsClone[i].id === editPostId) {
          postsClone[i] = {...postsClone[i], title: action.postUpdates.title, body: action.postUpdates.body}
          break
        }
      }
      // return {...state, posts: postsClone, detailPost: {...detail_post, ...action.postUpdates}}
      return {...state, posts: postsClone, detailPost: updatedPost, editPost: updatedPost}
    case 'HANDLE_FETCHED_POSTS':
      return {...state, posts: action.posts}
    case 'SELECT_DETAIL_POST':
      let detailPost = action.post
      return {...state, detailPost: detailPost, editPost: {...detailPost}}
    case 'SELECT_EDIT_POST':
      let editPost = action.post
      return {...state, editPost: editPost}
    case 'SET_EDIT_POST_PROP':
      return {...state, editPost: {...state.editPost, ...action.prop}}
    case 'SORT':
      const sortedPosts = state.posts.slice(0).sort(action.comparator)
      return {...state, posts: sortedPosts}
    case 'ADD_COMMENT' :
      const postsCopy = state.posts.slice(0)
      const detail__post = state.detailPost
      const detailPostId = detail__post ? detail__post.id : "noPostId"
      for (let i = 0; i < postsCopy.length; i++) {
        if (postsCopy[i].id === detailPostId) postsCopy[i].commentCount++
      }
      return {...state, posts: postsCopy, detailPost: detail__post}
    case 'REMOVE_COMMENT' :
      const posts_copy = state.posts.slice(0)
      const detail___post = state.detailPost
      const detail_post_id = detail___post ? detail___post.id : "noPostId"
      for (let i = 0; i < posts_copy.length; i++) {
        if (posts_copy[i].id === detail_post_id) posts_copy[i].commentCount--
      }
      return {...state, posts: posts_copy, detailPost: detail___post}
    case 'VOTE':
      if (action.path === "posts") {
        let newDetailPost = null
        const copy = state.posts.slice(0)
        const scoreAdjust = action.voteType === "upVote" ? 1: -1 // assuming downVote if otherwise
        const adjustedCopy = copy.map(p => p.id === action.id ? {...p, voteScore: p.voteScore + scoreAdjust} : p)
        if (state.detailPost && state.detailPost.id === action.id) {
          newDetailPost = {...state.detailPost, voteScore: state.detailPost.voteScore + scoreAdjust}
        }
        return {...state, posts: adjustedCopy, detailPost: newDetailPost}
      } else return state
    default:
      return state
  }
}

export default posts
