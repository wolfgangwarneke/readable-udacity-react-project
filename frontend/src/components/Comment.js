import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteComment, voteTest } from '../actions'
import ToolBar from './ToolBar'
import CommentIcon from 'react-icons/lib/fa/comment-o'
import User from 'react-icons/lib/fa/user'
import timeFormat from '../utils/timeFormat'

class Comment extends Component {
  render() {
    const comment = this.props.comment
    return (
      <div className="comment card text-left">
        <div className="card-header bg-white">
          <div className="float-left">
            <User className="d-none d-sm-inline" size={20} />
            <CommentIcon className="d-none d-sm-inline" style={{position: 'relative', bottom: '0.5em'}} size={18} />
            <span className="badge">{comment.author}</span>
            <span className="timestamp ml-4 float-right font-weight-light font-italic">{timeFormat(comment.timestamp)}</span>
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
