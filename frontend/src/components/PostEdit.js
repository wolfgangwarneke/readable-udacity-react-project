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
      <form onSubmit={this.saveEdit} className="newPostForm text-left">
        <input type="hidden" name="id" value={post.id} />
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="edit-title">Title</label>
          <div className="col-sm-10">
            <input className="form-control" type="text" name="title" id="edit-title" defaultValue={post.title} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="edit-author">Author</label>
          <div className="col-sm-10">
            <input className="form-control" disabled type="text" value={post.author} id="edit-author" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="edit-category">Category</label>
          <div className="col-sm-10">
            <input className="form-control" disabled type="text" value={post.category} id="edit-category" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="edit-body">Body</label>
          <textarea className="form-control" name="body" id="edit-body" defaultValue={post.body}></textarea>
        </div>
        <div className="form-group text-center">
          <input type="submit" className="btn btn-secondary" data-toggle="modal" data-target="#editPostModal" />
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
    putEditPost: (post) => dispatch(putEditPost(post))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEdit)
