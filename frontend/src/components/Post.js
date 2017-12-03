import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePost } from '../actions'

class Post extends Component {
  componentDidMount() {
  }

  render() {
    const post = this.props.post
    const link = `/${post.category}/${post.id}`
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
              <td><Link to={link}>{post.title}</Link></td>
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
              <td>{post.commentCount}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={() => this.props.deletePost(post.id)}>Delete this post.</button>
      </div>
    )
  }
}

function mapStateToProps ({  }) {
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return {
    deletePost: (postId) => dispatch(deletePost(postId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
