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
      <form onSubmit={postSubmit} className="new-post-form text-left">
        <div className="form-group">
          <label className="ml-1 font-weight-bold" htmlFor="post-title">Title</label>
          <input className="form-control" type="text" name="title" id="post-title" />
        </div>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label className="ml-1 font-weight-bold" htmlFor="post-author">Author</label>
            <input className="form-control" type="text" name="author" id="post-author" />
          </div>
          <div className="col-sm-6 form-group">
            <label className="ml-1 font-weight-bold" htmlFor="post-category">Category</label>
            <select className="form-control text-center" name="category" id="post-category">
              {this.props.categories.map(c => (
                <option key={c} value={c}>{capitalize(c)}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="ml-1 font-weight-bold" htmlFor="post-body">Body</label>
          <textarea className="form-control" name="body" id="post-body"></textarea>
        </div>
        <div className="form-group text-center">
          <input className="btn btn-primary" type="submit" data-toggle="modal" data-target="#addPostModal" />
        </div>
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
