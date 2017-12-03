import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectDetailPost, getNonStatePostById, getComments } from '../actions'
import CommentForm from './CommentForm'

class PostDetail extends Component {
  state = {
    post: null,
    postLoaded: false,
  }

  componentDidMount() {
    //alert(this.props.postId)
    //alert("Mounted")
    const postId = this.props.postId
    if (!postId) return
    if (postId !== this.props.detailPostId) this.props.selectDetailPost(postId)

    let post = this.props.posts[postId]
    if (post) {
      this.setState({post: post})
    } else {
        this.props.getNonStatePostById(postId) // this will update the posts in store and trigger an update
        // then the update will handle the post state of this component
    }

    this.props.getComments(postId)
  }

  componentDidUpdate() {
    console.log("COMPONENT DID UPDATE OUTSIDE LOOP");
    if ((!this.state.post && !this.state.postLoaded)) {
      console.log("COMPONENT DID UPDATE INSIDE LOOP");
      const postId = this.props.postId
      let post = this.props.posts[postId]
      if (post) this.setState({post: post, postLoaded: true, updateFromChild: false})
    }
  }

  render() {
    const post = this.props.post || this.state.post
    const comments = this.props.comments
    if (post) {
      return (
        <div>
          <table>
            <tbody>
              <tr>
                <th>Category</th>
                <td><Link to={"/"+post.category}>{post.category}</Link></td>
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
              <tr>
                <th>Comment Count</th>
                <td>{this.props.comments.length}</td>
              </tr>
            </tbody>
          </table>
          <CommentForm post={this.state.post} />
          <ul>
            {comments && comments.map(c => (
              <li key={c.id}>{c.body}</li>
            ))}
          </ul>
        </div>
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
    detailPostId: posts.detailPostId,
    comments: comments,
    categories: categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    selectDetailPost: (postId) => dispatch(selectDetailPost(postId)),
    getNonStatePostById: (postId) => dispatch(getNonStatePostById(postId)),
    getComments: (postId) => dispatch(getComments(postId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)
