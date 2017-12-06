import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { putEditComment, setEditCommentBody } from '../actions';

class CommentEdit extends Component {
  handleChange(event) {
    this.props.setEditCommentBody(event.target.value)
  }

  saveEdit = (e) => {
    e.preventDefault()
    const updateValues = serializeForm(e.target, { hash: true })
    this.props.putEditComment(updateValues)
    e.target.reset()
  }

  render() {
    this.handleChange.bind(this)
    const comment = this.props.misc
    return (
      <form onSubmit={this.saveEdit} className="newPostForm">
      <input type="hidden" name="id" value={comment.id} />
      <div className="form-group row">
        <label className="col-sm-2 col-form-label font-weight-bold" htmlFor="commentAuthor">Author</label>
        <div className="col-sm-10">
          <input disabled className="form-control" type="text" name="author" id="commentAuthor" value={comment.author} />
        </div>
      </div>
      <div className="form-group">
        <label className="ml-1 font-weight-bold" htmlFor="commentBody">Body</label>
        <textarea className="form-control" name="body" id="commentBody" value={comment.body} onChange={this.handleChange.bind(this)}></textarea>
      </div>
      <input className="btn btn-light" type="submit" data-toggle="modal" data-target="#editCommentModal" />
      </form>
    )
  }
}

function mapStateToProps ({ misc }) {
  return {
    misc
  }
}

function mapDispatchToProps (dispatch) {
  return {
    putEditComment: (commentUpdates) => dispatch(putEditComment(commentUpdates)),
    setEditCommentBody: (newBody) => dispatch(setEditCommentBody(newBody))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentEdit)
