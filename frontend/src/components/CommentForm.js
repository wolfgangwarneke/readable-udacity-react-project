import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { postNewComment } from '../actions';

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
      <form onSubmit={commentSubmit} className="newPostForm">
      <input type="hidden" value={parentId} name="parentId" /><br />
      <input type="text" name="author" /><br />
      <textarea name="body"></textarea><br />
      <input type="submit" />
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
