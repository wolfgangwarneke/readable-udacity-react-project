import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectDetailPost } from '../actions'

class PostDetail extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    //alert(this.props.postId)
    const postId = this.props.postId
    if (postId !== this.props.detailPostId) this.props.selectDetailPost(postId)

    let post = this.props.posts[postId]
    if (post) {
      this.setState({post: post})
    } else {
      // try to get from api
        // if that fails it's 404'd
    }
  }

  render() {
    const post = this.state.post
    if (post) {
      return (
        <table>
          <tbody>
            <tr>
              <th>Category</th>
              <td>{post.category}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{post.title}</td>
            </tr>
            <tr>
              <th>Author</th>
              <td>{post.author}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{post.body}</td>
            </tr>
          </tbody>
        </table>
      )
    } else {
      return (
        <h1>No post found or post is loading</h1>
      )
    }
  }
}

function mapStateToProps ({ posts, comments, categories }) {
  return {
    posts: posts.posts.reduce((postsObj, current) => {
      postsObj[current.id] = current
      return postsObj
    }, {}),
    //posts: posts.posts,
    detailPostId: posts.detailPostId,
    comments: comments,
    categories: categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    selectDetailPost: (postId) => dispatch(selectDetailPost(postId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)
