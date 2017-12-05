import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteComment, voteTest } from '../actions'
import Modal from 'react-modal'
import CommentEdit from './CommentEdit'
import ToolBar from './ToolBar'
import ThumbsUp from 'react-icons/lib/fa/thumbs-o-up'
import ThumbsDown from 'react-icons/lib/fa/thumbs-o-down'
import Trash from 'react-icons/lib/fa/trash-o'
import Pencil from 'react-icons/lib/fa/pencil'
import CommentIcon from 'react-icons/lib/fa/comment-o'
import User from 'react-icons/lib/fa/user'

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
      <div className="card text-left">
        <div className="card-header bg-white">
          <div className="float-left">
              <User className="d-none d-sm-inline" size={20} />
              <CommentIcon className="d-none d-sm-inline" style={{position: 'relative', bottom: '0.5em'}} size={18} />
            <span className="badge">{comment.author}</span>
          </div>
          <div className="float-right">
            <ToolBar
              iconSize={20}
              voteScore={comment.voteScore}
              upVote={() => this.props.voteTest("comments", comment.id, "upVote")}
              downVote={() => this.props.voteTest("comments", comment.id, "downVote")}
              edit={this.props.setCurrentEditComment}
              editModalTarget={"#editCommentModal"}
              remove={() => this.props.deleteComment(comment.id)}
            />
          </div>
        </div>
        <div className="card-body bg-light">
          <p className="card-text ml-3">
            {comment.body}
          </p>
        </div>
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
