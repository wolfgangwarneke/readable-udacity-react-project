import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { putEditComment } from '../actions';

class CommentEdit extends Component {
  componentDidMount() {
  }

  saveEdit = (e) => {
    e.preventDefault()
    const updateValues = serializeForm(e.target, { hash: true })
    console.log(updateValues)
    this.props.putEditComment(updateValues)
    e.target.reset()
  }

  render() {
    const comment = this.props.comment
    return (
      <form onSubmit={this.saveEdit} className="newPostForm">
      <input type="hidden" name="id" value={comment.id} />
      <input disabled type="text" value={comment.author} /><br />
      <textarea name="body" defaultValue={comment.body}></textarea><br />
      <input type="submit" />
      </form>
    )
  }
}

function mapStateToProps ({}) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
    putEditComment: (commentUpdates) => dispatch(putEditComment(commentUpdates))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentEdit)
