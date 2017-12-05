import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { putEditComment, setEditCommentBody } from '../actions';

class CommentEdit extends Component {
  state = {
    value: ""
  }

  componentDidMount() {
    //const commentId = this.props.comment ? this.props.comment.id : ""
    // this.setState({value: commentId})
  }

  componentDidUpdate() {

  }

  handleChange(event) {
    //console.log(this)
    //event.target.value
    this.props.setEditCommentBody(event.target.value)
  }


  saveEdit = (e) => {
    e.preventDefault()
    const updateValues = serializeForm(e.target, { hash: true })
    console.log(updateValues)
    this.props.putEditComment(updateValues)
    e.target.reset()
  }

  render() {
    this.handleChange.bind(this)
    const comment = this.props.misc
    return (
      <form onSubmit={this.saveEdit} className="newPostForm">
      <input type="hidden" name="id" value={comment.id} />
      <input disabled type="text" value={comment.author} /><br />
      <textarea name="body" value={comment.body} onChange={this.handleChange.bind(this)}></textarea><br />
      <input type="submit" data-toggle="modal" data-target="#editCommentModal" />
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
