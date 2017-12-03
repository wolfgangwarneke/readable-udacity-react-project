import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'

class PostForm extends Component {
  componentDidMount() {
  }

  postSubmit = (e) => {
    e.preventDefault()
    const postValues = serializeForm(e.target, { hash: true })
    console.log(postValues)
  }

  render() {
    const post = this.props.post
    const createPost = this.createPost
    const postSubmit = this.postSubmit
    return (
      <form onSubmit={postSubmit} className="newPostForm">
      <input type="text" name="title" /><br />
      <input type="text" name="author" /><br />
      <textarea name="body"></textarea><br />
      <input type="submit" />
      </form>
    )
  }
}

export default PostForm
