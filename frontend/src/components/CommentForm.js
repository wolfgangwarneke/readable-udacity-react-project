import React, { Component } from 'react'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { postNewComment } from '../actions'

class CommentForm extends Component {
  commentSubmit = (e) => {
    e.preventDefault()
    const commentValues = serializeForm(e.target, { hash: true })
    this.props.postNewComment(commentValues)
    e.target.reset()
  }

  render() {
    const commentSubmit = this.commentSubmit
    const parentId = this.props.parentPostId
    return (
      <form onSubmit={commentSubmit} className="newPostForm text-left">
        <input type="hidden" value={parentId} name="parentId" />
        <div className="form-group">
          <label className="ml-1 font-weight-bold" htmlFor="commentAuthor">Author</label>
          <input className="form-control" type="text" name="author" id="commentAuthor" />
        </div>
        <div className="form-group">
          <label className="ml-1 font-weight-bold" htmlFor="commentBody">Body</label>
          <textarea className="form-control" name="body" id="commentBody"></textarea>
        </div>
        <input className="btn btn-light float-right mr-2" type="submit" data-toggle="modal" data-target="#addCommentModal" />
      </form>
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    detailPost: posts.detailPost
  }
}

function mapDispatchToProps (dispatch) {
  return {
    postNewComment: (comment) => dispatch(postNewComment(comment))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm)
