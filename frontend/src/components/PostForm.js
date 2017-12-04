import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { postNewPost } from '../actions';
import capitalize from '../utils/capitalize'

class PostForm extends Component {
  componentDidMount() {
  }

  postSubmit = (e) => {
    e.preventDefault()
    const postValues = serializeForm(e.target, { hash: true })
    //console.log(postValues)
    this.props.postNewPost(postValues)
    e.target.reset()
  }

  render() {
    const post = this.props.post
    const createPost = this.createPost
    const postSubmit = this.postSubmit
    return (
      <form onSubmit={postSubmit} className="newPostForm">
      <input type="text" name="title" /><br />
      <input type="text" name="author" /><br />
      <select name="category">
        {this.props.categories.map(c => (
          <option key={c} value={c}>{capitalize(c)}</option>
        ))}
      </select><br />
      <textarea name="body"></textarea><br />
      <input type="submit" />
      </form>
    )
  }
}

function mapStateToProps ({ posts, comments, categories }) {
  return {
    posts: posts,
    comments: comments,
    categories: categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    postNewPost: (post) => dispatch(postNewPost(post))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm)
