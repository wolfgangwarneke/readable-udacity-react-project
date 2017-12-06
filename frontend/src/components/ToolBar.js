import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteComment, voteTest } from '../actions'
import Modal from 'react-modal'
import CommentEdit from './CommentEdit'
import ThumbsUp from 'react-icons/lib/fa/thumbs-o-up'
import ThumbsDown from 'react-icons/lib/fa/thumbs-o-down'
import Trash from 'react-icons/lib/fa/trash-o'
import Pencil from 'react-icons/lib/fa/pencil'
import CommentIcon from 'react-icons/lib/fa/comment-o'
import User from 'react-icons/lib/fa/user'

class ToolBar extends Component {
  render() {
    const voteScore = this.props.voteScore
    const iconSize = this.props.iconSize || 30
    const commentNumberPull = this.props.commentNumberPull || "1.1rem"
    const upVote = this.props.upVote
    const downVote = this.props.downVote
    const edit = this.props.edit
    const editModalTarget = this.props.editModalTarget
    const remove = this.props.remove
    const commentCount = typeof this.props.commentCount === "number" ? this.props.commentCount : null
    return (
      <div>
        {commentCount !== null ? (
          <div className="btn-group btn-group-sm mr-2" role="group" aria-label="Zeroeth group">
            <button type="button" className="btn btn-secondary disabled">
              <CommentIcon size={iconSize} />
              <span style={{position: 'relative', right: commentNumberPull}}>{commentCount}</span>
            </button>
          </div>
        ) : ""}
        <div className="btn-group btn-group-sm mr-2">
          <button className="score-btn btn btn-secondary disabled">
            Score
            <span className="score-badge badge">{voteScore}</span>
          </button>
          <button className="btn btn-secondary" onClick={upVote}>
            <ThumbsUp size={iconSize} />
          </button>
          <button className="btn btn-secondary"  onClick={downVote}>
            <ThumbsDown size={iconSize} />
          </button>
        </div>
        <div className="btn-group btn-group-sm">
          <button type="button" className="btn btn-secondary" onClick={edit} data-toggle="modal" data-target={editModalTarget}>
            <Pencil size={iconSize} />
          </button>
          <button className="btn btn-secondary" onClick={remove}>
            <Trash size={iconSize} />
          </button>
        </div>
      </div>
    )
  }
}

export default ToolBar
