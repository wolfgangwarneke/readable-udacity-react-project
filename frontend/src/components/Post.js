import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePost, selectDetailPost, voteTest } from '../actions'
import capitalize from '../utils/capitalize'
import ThumbsUp from 'react-icons/lib/fa/thumbs-o-up'
import ThumbsDown from 'react-icons/lib/fa/thumbs-o-down'
import Trash from 'react-icons/lib/fa/trash-o'
import Pencil from 'react-icons/lib/fa/pencil'
import CommentIcon from 'react-icons/lib/fa/comment-o'

class Post extends Component {
  componentDidMount() {
  }

  render() {
    const post = this.props.post
    const link = `/${post.category}/${post.id}`
    return (
      <div className="card text-left" style={{width: "26rem"}}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            by {post.author}
            <Link to={"/" + post.category}>
              <span className="badge badge-secondary ml-2">{post.category}</span>
            </Link>
          </h6>
          <p className="card-text">{post.body} <Link onClick={() => this.props.selectDetailPost(post)} to={link}>...more</Link></p>
          <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group btn-group-sm mr-2" role="group" aria-label="Zeroeth group">
              <button onClick={() => this.props.voteTest("posts", post.id, "upVote")} type="button" className="btn btn-secondary">
                <CommentIcon size={30} />
                <span style={{position: 'relative', right: '1.1rem'}}>{post.commentCount}</span>
              </button>
            </div>
            <div className="btn-group btn-group-sm mr-4" role="group" aria-label="First group">
              <button className="btn btn-secondary disabled">
                Score
                <span className="badge badge-pill badge-secondary">{post.voteScore}</span>
              </button>
              <button onClick={() => this.props.voteTest("posts", post.id, "upVote")} type="button" className="btn btn-secondary"><ThumbsUp size={30} /></button>
              <button onClick={() => this.props.voteTest("posts", post.id, "downVote")} type="button" className="btn btn-secondary"><ThumbsDown size={30} /></button>
            </div>
            <div className="btn-group btn-group-sm" role="group" aria-label="Second group">
              <button onClick={() => this.props.deletePost(post.id)} type="button" className="btn btn-secondary"><Trash size={30} /></button>
              <button onClick={() => this.props.deletePost(post.id)} type="button" className="btn btn-secondary"><Pencil size={30} /></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ }) {
  return {
    //detailPost
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deletePost: (postId) => dispatch(deletePost(postId)),
    selectDetailPost: (post) => dispatch(selectDetailPost(post)),
    voteTest: (path, id, voteType) => dispatch(voteTest(path, id, voteType))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
