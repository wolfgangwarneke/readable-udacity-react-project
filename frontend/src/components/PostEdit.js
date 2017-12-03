import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { putEditPost } from '../actions';

class PostEdit extends Component {
  componentDidMount() {
  }

  saveEdit = (e) => {
    e.preventDefault()
    const postValues = serializeForm(e.target, { hash: true })
    console.log(postValues)
    this.props.putEditPost(postValues)
    e.target.reset()
  }

  render() {
    const post = this.props.post
    return (
      <form onSubmit={this.saveEdit} className="newPostForm">
      <input type="hidden" name="id" value={post.id} />
      <input type="text" name="title" defaultValue={post.title} /><br />
      <input disabled type="text" value={post.author} /><br />
      <input disabled type="text" value={post.category} /><br />
      <textarea name="body" defaultValue={post.body}></textarea><br />
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
    putEditPost: (post) => dispatch(putEditPost(post))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEdit)
