import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteComment, voteTest } from '../actions'
import Modal from 'react-modal'
import CommentEdit from './CommentEdit'

class Comment extends Component {
  state = {
    editingComment: false
  }

  toggleEditCommentModal = () => this.setState(() => ({ editingComment: !this.state.editingComment }))

  componentDidMount() {
  }

  render() {
    const comment = this.props.comment
    return (
      <div>
        <div>{comment.body} by {comment.author} Score: {comment.voteScore}</div>
        <button onClick={() => this.props.voteTest("comments", comment.id, "upVote")}>Upvote</button>
        <button onClick={() => this.props.voteTest("comments", comment.id, "downVote")}>Downvote</button>
        <button onClick={this.toggleEditCommentModal}>Edit</button>
        <button onClick={() => this.props.deleteComment(comment.id)}>Remove</button>
        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={this.state.editingComment}
          onRequestClose={this.toggleEditCommentModal}
          contentLabel='Modal'
        >
          <h1>Comment edit test</h1>
          <CommentEdit comment={comment} />
        </Modal>
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
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    voteTest: (path, id, voteType) => dispatch(voteTest(path, id, voteType))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment)
