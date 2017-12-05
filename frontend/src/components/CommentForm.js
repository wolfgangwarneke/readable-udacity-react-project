import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { postNewComment } from '../actions'

class CommentForm extends Component {
  componentDidMount() {
  }

  commentSubmit = (e) => {
    e.preventDefault()
    const commentValues = serializeForm(e.target, { hash: true })
    //console.log(postValues)
    this.props.postNewComment(commentValues)
    e.target.reset()
  }

  render() {
    const commentSubmit = this.commentSubmit
    const parentId = this.props.detailPost.id
    return (
      <form onSubmit={commentSubmit} className="newPostForm text-left">
        <input type="hidden" value={parentId} name="parentId" />
        <div className="form-group">
          <label className="ml-1 font-weight-bold" htmlFor="commentAuthor">Author</label>
          <input className="form-control" type="text" name="author" id="commentAuthor" />
        </div>
        <div className="form-group">
          <label className="ml-1 font-weight-bold" htmlFor="commentBody">Body</label>
          <textarea className="form-control" name="body" id="commentBody"></textarea><br />
        </div>
        <input className="btn btn-secondary" type="submit" />
      </form>
    )
  }
}

function mapStateToProps ({ posts }) {
  console.log("MAP STATE TO PROPS DETAIL ID", posts.detailPostId)
  return {
    //posts: posts,
    //comments: comments,
    //categories: categories,
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
