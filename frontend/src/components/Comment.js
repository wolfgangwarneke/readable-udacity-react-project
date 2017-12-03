import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteComment } from '../actions'

class Comment extends Component {
  componentDidMount() {
  }

  render() {
    const comment = this.props.comment
    return (
      <div>
        <div>{comment.body} by {comment.author}</div>
        <button onClick={() => this.props.deleteComment(comment.id)}>Remove</button>
      </div>
    )
  }
}

function mapStateToProps ({ comments }) {
  return {
    comments
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment)
