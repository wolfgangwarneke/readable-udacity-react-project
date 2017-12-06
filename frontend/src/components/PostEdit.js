import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { putEditPost, setEditPostProp } from '../actions';

class PostEdit extends Component {
  saveEdit = (e) => {
    e.preventDefault()
    const postValues = serializeForm(e.target, { hash: true })
    this.props.putEditPost(postValues, this.props.editPost)
    e.target.reset()
  }

  handleTitleChange(event) {
    this.props.setEditPostProp({title: event.target.value})
  }

  handleBodyChange(event) {
    this.props.setEditPostProp({body: event.target.value})
  }

  render() {
    const post = this.props.editPost
    if (post) {
      return (
        <form onSubmit={this.saveEdit} className="newPostForm text-left">
          <input type="hidden" name="id" value={post.id} />
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="edit-title">Title</label>
            <div className="col-sm-10">
              <input className="form-control" type="text" name="title" id="edit-title" value={post.title} onChange={this.handleTitleChange.bind(this)} />
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
            <textarea className="form-control" name="body" id="edit-body" value={post.body} onChange={this.handleBodyChange.bind(this)}></textarea>
          </div>
          <div className="form-group text-center">
            <input type="submit" className="btn btn-secondary" data-toggle="modal" data-target="#editPostModal" />
          </div>
        </form>
      )
    } else {
      return (<div></div>)
    }
  }
}

function mapStateToProps ({ posts }) {
  return {
    editPost: posts.editPost
  }
}

function mapDispatchToProps (dispatch) {
  return {
    putEditPost: (post) => dispatch(putEditPost(post)),
    setEditPostProp: (prop) => dispatch(setEditPostProp(prop))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEdit)
