import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Post extends Component {
  componentDidMount() {
  }

  render() {
    const post = this.props.post
    return (
      <table>
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
      </table>
    )
  }
}

export default Post
