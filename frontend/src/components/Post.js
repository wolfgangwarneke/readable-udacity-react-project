import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Post extends Component {
  componentDidMount() {
  }

  render() {
    const post = this.props.post
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
  }
}

export default Post
